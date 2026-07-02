import { useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import './Projects.css';

// SVG components to replace missing lucide brand icons
const Github = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const sliderRef = useRef(null);
  
  const projects = [
    {
      title: 'AI Sentiment Analysis Chat Application',
      description: 'A real-time AI chat application with toxicity detection. Features secure authentication, real-time communication using Socket.IO, image sharing, and a robust MongoDB backend.',
      tags: ['React.js', 'Node.js', 'Socket.IO', 'MongoDB', 'AI API'],
      github: 'https://github.com/saurashp/sentiment-analysis-chat-application',
      gradient: 'linear-gradient(135deg, rgba(3, 179, 195, 0.15) 0%, rgba(103, 80, 162, 0.15) 100%)',
      borderColor: 'rgba(3, 179, 195, 0.3)',
      glowClass: 'cyan-glow'
    },
    {
      title: 'Weather App with DevOps',
      description: 'A responsive weather application utilizing public APIs to display real-time forecasts. The project is dockerized and set up with a fully automated CI/CD pipeline using Jenkins.',
      tags: ['JavaScript', 'Docker', 'Jenkins', 'CI/CD', 'REST API'],
      github: 'https://github.com/saurashp/weather-app',
      gradient: 'linear-gradient(135deg, rgba(216, 86, 191, 0.15) 0%, rgba(103, 80, 162, 0.15) 100%)',
      borderColor: 'rgba(216, 86, 191, 0.3)',
      glowClass: 'magenta-glow'
    },
    {
      title: 'Contact Management System',
      description: 'A secure MERN-based CRUD application that enables users to manage their contacts. Features RESTful APIs and seamless MongoDB integration with React.',
      tags: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'REST API'],
      github: 'https://github.com/saurashp/Contact-Management',
      gradient: 'linear-gradient(135deg, rgba(3, 179, 195, 0.1) 0%, rgba(216, 86, 191, 0.1) 100%)',
      borderColor: 'rgba(255, 255, 255, 0.15)',
      glowClass: 'mixed-glow'
    },
    {
      title: 'UniversalSearchGUI',
      description: 'A Python-based desktop GUI application that enables users to perform instant searches across Google, YouTube, and Instagram from a single unified interface.',
      tags: ['Python', 'Tkinter (GUI)', 'Webbrowser', 'Automation'],
      github: 'https://github.com/saurashp/UniversalSearchGUI',
      gradient: 'linear-gradient(135deg, rgba(103, 80, 162, 0.15) 0%, rgba(216, 86, 191, 0.15) 100%)',
      borderColor: 'rgba(103, 80, 162, 0.3)',
      glowClass: 'magenta-glow'
    }
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 420; // card width (380) + gap (40)
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-slider-wrapper">
        <button className="slider-nav-btn prev" onClick={() => scroll('left')} aria-label="Previous Project">
          <ChevronLeft size={24} />
        </button>

        <div className="projects-slider-container" ref={sliderRef}>
          <div className="projects-slider">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`project-card glass-panel ${project.glowClass}`}
                style={{
                  background: `${project.gradient}`,
                  borderColor: `${project.borderColor}`
                }}
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="GitHub Repository">
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-nav-btn next" onClick={() => scroll('right')} aria-label="Next Project">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
