# Saurash Preet — Personal Portfolio 🚀

A modern, high-performance, and visually immersive developer portfolio showcasing full-stack development (MERN stack), DevOps capabilities, and cloud engineering expertise.

[Live Portfolio]([https://github.com/saurashp/portfolio-2026](https://saurashp.vercel.app/))

---

## ✨ Features

- **Interactive 3D Skills Cloud**: A dynamic, interactive HTML5 canvas tag cloud presenting technical expertise with smooth rotation and hover physics.
- **Featured Projects Slider**: A sleek, horizontal scrolling carousel showcasing premium production-inspired projects (such as `RateLimit Pro`, `AI Sentiment Analysis Chat`, and `Weather App with DevOps`) complete with source links and custom neon glows.
- **Synced Interactive Timeline**: A clean, chronological display of professional experience, traineeships, and academic progression.
- **Premium Glassmorphism Design**: High-fidelity dark theme featuring neon gradients, responsive layouts, custom load screens, and interactive micro-animations.
- **Resume Download Integration**: Direct download option for the latest PDF resume.

---

## 🛠️ Tech Stack

- **Framework**: [React.js](https://react.dev/)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 (Custom Glassmorphism and Neon theme variables)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://github.com/oxc-project/oxc)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/saurashp/portfolio-2026.git
   cd portfolio-2026
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist/` directory.

---

## 📂 Project Structure

```text
├── public/                 # Static assets (Resume, Favicon, SVG icons)
├── src/
│   ├── assets/             # Fonts, styles, global stylesheets
│   ├── components/         # Reusable portfolio modules
│   │   ├── About/          # About narrative & statistics
│   │   ├── Hero/           # Greeting header & Resume download link
│   │   ├── Hyperspeed/     # Neon background speedline animations
│   │   ├── Loader/         # Custom screen loading indicator
│   │   ├── Navbar/         # Fixed blur header navigation
│   │   ├── Projects/       # Project slider & GitHub source card connectors
│   │   ├── Resume/         # Work experience & education timelines
│   │   └── SkillsCloud/    # Interactive 3D tag cloud rendering logic
│   ├── App.jsx             # Main site container & routing
│   └── main.jsx            # React root setup
├── index.html              # HTML shell entry point
└── vite.config.js          # Vite compilation settings
```
