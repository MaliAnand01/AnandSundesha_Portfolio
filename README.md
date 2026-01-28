# Anand Sundesha - 3D Developer Portfolio

A modern, high-performance developer portfolio built with **React**, **Three.js (via Spline)**, and **Tailwind CSS**. 
This project showcases my journey as a **Self-Taught Developer & MCA Candidate**, featuring interactive 3D elements, smooth momentum scrolling, and optimized animations.

![Portfolio Preview](public/og-preview.png)

## ✨ Key Features

- **Interactive 3D Hero**: Features a fully interactive 3D character scene powered by [Spline](https://spline.design/).
- **Smooth Momentum Scrolling**: Integrated [Lenis](https://github.com/darkroomengineering/lenis) for a premium, weighted scroll feel.
- **Performance Optimized**: 
  - **Lazy Loading**: Below-the-fold sections are code-split and loaded on demand.
  - **Scroll Spy**: Efficient scroll tracking using requestAnimationFrame throttling.
  - **Manual Chunking**: Separated heavy 3D and animation libraries into vendor chunks.
- **Responsive Design**: Mobile-first architecture ensuring the 3D elements and layout adapt to all screen sizes.
- **Dynamic Content**: Centralized data management for easy updates to projects, skills, and experience.

## 🛠️ Tech Stack

- **Core**: React 19, Vite
- **Styling**: Tailwind CSS v4, Lucide React (Icons)
- **Animations**: Framer Motion
- **3D Engine**: @splinetool/react-spline
- **UX/UI**: Lenis (Smooth Scroll), Intersection Observers

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/MaliAnand01/portfolio-3d.git
    cd portfolio-3d
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    npm run preview
    ```

## 📂 Project Structure

```bash
src/
├── components/
│   ├── hero/          # 3D Scene & Hero Logic
│   ├── layout/        # Navbar & Footer
│   ├── sections/      # About, Projects, Services, Contact
│   └── ui/            # Reusable UI (SmoothScroll, Spotlight)
├── data/
│   └── data.js        # Central content file
├── lib/               # Utilities (cn, clsx)
├── App.jsx            # Main Layout & Scroll Logic
└── main.jsx           # Entry Point
```

## 👨‍💻 About Me

**Anand Sundesha**  
*MCA Candidate | Java Full Stack Aspirant | Frontend Specialist*

I bridge the gap between complex backend logic and beautiful frontend experiences. 
- **Focus**: Java, Spring Boot, React, Modern Web Performance.
- **Experience**: Freelance client projects (PongalDelights) and self-taught mastery.

---

*Built with ❤️ by Anand.*
