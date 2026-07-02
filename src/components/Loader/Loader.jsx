import { useState, useEffect } from 'react';
import './Loader.css';

const LOADING_STEPS = [
  { progress: 0, text: 'INITIALIZING PORTFOLIO ENGINE...' },
  { progress: 20, text: 'LOADING THREE.JS WEBGL CANVAS...' },
  { progress: 45, text: 'CONFIGURING DYNAMIC HYPERSPEED OPTICS...' },
  { progress: 70, text: 'MOUNTING REACT INTERFACE COMPONENTS...' },
  { progress: 90, text: 'ESTABLISHING CYBERNETIC NEON GLOW...' },
  { progress: 100, text: 'SYSTEM READY. WELCOME.' }
];

const Loader = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [activeStepText, setActiveStepText] = useState(LOADING_STEPS[0].text);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds total loading time
    const intervalTime = 30; // Update every 30ms
    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = Math.min(prevProgress + increment, 100);
        
        // Find current step text based on progress
        const matchedStep = [...LOADING_STEPS]
          .reverse()
          .find((step) => nextProgress >= step.progress);
        
        if (matchedStep) {
          setActiveStepText(matchedStep.text);
        }

        if (nextProgress >= 100) {
          clearInterval(timer);
          // Trigger fade out transition after a brief pause
          setTimeout(() => {
            setIsFadingOut(true);
            // Fully unmount the loader after transition animation completes
            setTimeout(() => {
              onFinished();
            }, 600);
          }, 300);
        }

        return nextProgress;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <div className={`loader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loader-glitch-bg"></div>
      <div className="loader-container">
        {/* Futuristic Spinner */}
        <div className="futuristic-spinner">
          <div className="spinner-ring ring-outer"></div>
          <div className="spinner-ring ring-middle"></div>
          <div className="spinner-ring ring-inner"></div>
          <div className="spinner-core">SP</div>
        </div>

        {/* Brand details */}
        <div className="loader-brand">
          <span className="brand-name">SAURASH PREET</span>
          <span className="brand-sub">PORTFOLIO V2026</span>
        </div>

        {/* Progress Bar & Status Text */}
        <div className="loader-progress-wrapper">
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
              <div className="progress-fill-glow"></div>
            </div>
          </div>
          <div className="loader-status">
            <span className="status-percent">{Math.round(progress)}%</span>
            <span className="status-message">{activeStepText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
