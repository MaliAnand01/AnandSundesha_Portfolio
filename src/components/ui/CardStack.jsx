 
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import { cn } from "../../lib/utils"; // Importing utility

function wrapIndex(n, len) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

function signedOffset(i, active, len, loop) {
  const raw = i - active;
  if (!loop || len <= 1) return raw;

  // consider wrapped alternative
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export const CardStack = ({
  items,
  initialIndex = 0,
  maxVisible = 5, // Reduced for mobile
  cardWidth = 520, // Default width
  cardHeight = 400, // Adjusted height

  overlap = 0.85,
  spreadDeg = 8,

  perspectivePx = 1200,
  depthPx = 250,
  tiltXDeg = 2,

  activeLiftPx = 22,
  activeScale = 1.03,
  inactiveScale = 0.94,

  springStiffness = 280,
  springDamping = 28,

  loop = true,
  autoAdvance = false,
  intervalMs = 2800,
  pauseOnHover = true,

  showDots = true,
  className,

  onChangeIndex,
  renderCard,
}) => {
  const reduceMotion = useReducedMotion();
  const len = items.length;

  const [active, setActive] = useState(() => wrapIndex(initialIndex, len));
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    setActive((a) => wrapIndex(a, len));
  }, [len]);

  useEffect(() => {
    if (!len) return;
    onChangeIndex?.(active, items[active]);
  }, [active, items, len, onChangeIndex]);

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));
  const cardSpacing = Math.max(10, Math.round(cardWidth * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const canGoPrev = loop || active > 0;
  const canGoNext = loop || active < len - 1;

  const prev = useCallback(() => {
    if (!len) return;
    if (!canGoPrev) return;
    setActive((a) => wrapIndex(a - 1, len));
  }, [canGoPrev, len]);

  const next = useCallback(() => {
    if (!len) return;
    if (!canGoNext) return;
    setActive((a) => wrapIndex(a + 1, len));
  }, [canGoNext, len]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  useEffect(() => {
    if (!autoAdvance) return;
    if (reduceMotion) return;
    if (!len) return;
    if (pauseOnHover && hovering) return;

    const id = setInterval(() => {
      if (loop || active < len - 1) next();
    }, Math.max(700, intervalMs));

    return () => clearInterval(id);
  }, [
    autoAdvance,
    intervalMs,
    hovering,
    pauseOnHover,
    reduceMotion,
    len,
    loop,
    active,
    next,
  ]);

  if (!len) return null;

  const activeItem = items[active];

  return (
    <div
      className={cn("w-full flex flex-col items-center", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Stage */}
      <div
        className="relative w-full flex justify-center focus:outline-none"
        style={{ height: Math.max(380, cardHeight + 80), perspective: `${perspectivePx}px` }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* Background glow effects */}
        <div
          className="pointer-events-none absolute top-6 h-48 w-[70%] rounded-full bg-zinc-400/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 h-40 w-[76%] rounded-full bg-black/10 blur-3xl dark:bg-black/30"
          aria-hidden="true"
        />

        <div className="relative h-full w-full flex items-end justify-center">
            <AnimatePresence initial={false}>
            {items.map((item, i) => {
                const off = signedOffset(i, active, len, loop);
                const abs = Math.abs(off);
                const visible = abs <= maxOffset;

                if (!visible) return null;

                // Geometry
                const rotateZ = off * stepDeg;
                const x = off * cardSpacing;
                const y = abs * 10;
                const z = -abs * depthPx;

                const isActive = off === 0;

                const scale = isActive ? activeScale : inactiveScale;
                const lift = isActive ? -activeLiftPx : 0;
                const rotateX = isActive ? 0 : tiltXDeg;
                const zIndex = 100 - abs;

                const dragProps = isActive
                ? {
                    drag: "x",
                    dragConstraints: { left: 0, right: 0 },
                    dragElastic: 0.18,
                    onDragEnd: (e, info) => {
                        if (reduceMotion) return;
                        const travel = info.offset.x;
                        const v = info.velocity.x;
                        const threshold = Math.min(160, cardWidth * 0.22);

                        if (travel > threshold || v > 650) prev();
                        else if (travel < -threshold || v < -650) next();
                    },
                    }
                : {};

                return (
                <motion.div
                    key={item.title || i}
                    className={cn(
                    "absolute bottom-0 rounded-3xl overflow-hidden shadow-2xl",
                    "will-change-transform select-none touch-none", // critical for mobile
                    isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                    )}
                    style={{
                        width: "100%", // Responsive width
                        maxWidth: cardWidth,
                        height: cardHeight,
                        zIndex,
                        transformStyle: "preserve-3d",
                    }}
                    initial={
                    reduceMotion
                        ? false
                        : { opacity: 0, y: y + 40, x, rotateZ, rotateX, scale }
                    }
                    animate={{
                        opacity: 1,
                        x,
                        y: y + lift,
                        rotateZ,
                        rotateX,
                        scale,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: springStiffness,
                        damping: springDamping,
                    }}
                    onClick={() => setActive(i)}
                    {...dragProps}
                >
                    <div
                    className="h-full w-full"
                    style={{
                        transform: `translateZ(${z}px)`,
                        transformStyle: "preserve-3d",
                    }}
                    >
                    {renderCard ? (
                        renderCard(item, { active: isActive })
                    ) : (
                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                            No Content
                        </div>
                    )}
                    </div>
                </motion.div>
                );
            })}
            </AnimatePresence>
        </div>
      </div>

      {/* Dots navigation */}
      {showDots && (
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            {items.map((it, idx) => {
              const on = idx === active;
              return (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    on ? "bg-white w-4" : "bg-white/20 hover:bg-white/50"
                  )}
                  aria-label={`Go to item ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
