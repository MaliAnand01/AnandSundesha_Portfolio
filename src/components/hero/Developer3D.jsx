/* eslint-disable no-unused-vars */
import React from 'react';
import { SplineScene } from '../ui/SplineScene';

// Memoize to prevent re-renders from Hero's typing effect
const Developer3D = React.memo(({ onLoad }) => {
  return (
    <div className="relative w-full h-[500px] md:h-full flex items-center justify-center">
      <SplineScene 
        scene="/models/scene.splinecode"
        className="w-full h-full"
        onLoad={onLoad}
      />
    </div>
  );
});

Developer3D.displayName = "Developer3D";

export default Developer3D;
