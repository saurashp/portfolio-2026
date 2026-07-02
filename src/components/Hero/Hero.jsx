import { ArrowRight, Mail, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge float-animation">
          <span className="badge-glow-dot"></span>
          Open to work
        </div>
        
        <h1 className="hero-title">
          Hi, I am <span className="gradient-text">Saurash Preet</span>
        </h1>
        
        <h2 className="hero-subtitle">
          Building <span className="text-glow-cyan">Robust MERN Applications</span> & <span className="text-glow-magenta">DevOps Pipelines</span>
        </h2>
        
        <p className="hero-description">
          A final-year B.Tech student with hands-on experience in MERN Stack development, DevOps, and AI-powered web applications. Skilled in React.js, Node.js, Express.js, and MongoDB.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn-neon btn-neon-cyan">
            View My Projects <ArrowRight size={16} />
          </a>
          <a href="/Saurash_Preet_Resume.pdf" download="Saurash_Preet_Resume.pdf" className="btn-neon btn-neon-magenta">
            Download Resume <Download size={16} />
          </a>
          <a href="#contact" className="btn-neon btn-neon-cyan">
            Get in touch <Mail size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
