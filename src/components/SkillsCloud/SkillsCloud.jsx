import { useEffect, useRef, useState } from 'react';
import './SkillsCloud.css';

const SKILLS = [
  { name: 'React.js', rgb: '3, 179, 195' },
  { name: 'AWS', rgb: '255, 153, 0' },
  { name: 'Node.js', rgb: '216, 86, 191' },
  { name: 'Express.js', rgb: '216, 86, 191' },
  { name: 'MongoDB', rgb: '216, 86, 191' },
  { name: 'MySQL', rgb: '103, 80, 162' },
  { name: 'Firebase', rgb: '3, 179, 195' },
  { name: 'SQL', rgb: '103, 80, 162' },
  { name: 'Tailwind CSS', rgb: '3, 179, 195' },
  { name: 'Bootstrap', rgb: '3, 179, 195' },
  { name: 'HTML5', rgb: '3, 179, 195' },
  { name: 'CSS3', rgb: '3, 179, 195' },
  { name: 'JavaScript', rgb: '3, 179, 195' },
  { name: 'Python', rgb: '103, 80, 162' },
  { name: 'C++', rgb: '103, 80, 162' },
  { name: 'Docker', rgb: '216, 86, 191' },
  { name: 'Jenkins', rgb: '216, 86, 191' },
  { name: 'Git', rgb: '103, 80, 162' },
  { name: 'GitHub', rgb: '103, 80, 162' },
  { name: 'Postman', rgb: '103, 80, 162' },
  { name: 'REST APIs', rgb: '216, 86, 191' },
  { name: 'Chart.js', rgb: '216, 86, 191' }
];

const SkillsCloud = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!canvas || !ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let radius = 130;
    const depth = 500;

    // Speeds
    let speedX = 0.001; // initial auto rotation speed
    let speedY = 0.003; 

    // Handle resizing
    const resizeCanvas = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const dpr = window.devicePixelRatio || 1;
      width = container.clientWidth;
      height = Math.max(320, container.clientHeight);
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      
      radius = Math.min(width, height) * 0.42;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize 3D positions using Fibonacci sphere algorithm
    const numTags = SKILLS.length;
    const tags = SKILLS.map((skill, index) => {
      const k = -1 + (2 * (index + 1) - 1) / numTags;
      const a = Math.acos(k);
      const b = a * Math.sqrt(numTags * Math.PI);
      
      return {
        name: skill.name,
        rgb: skill.rgb,
        x: Math.sin(a) * Math.cos(b) * radius,
        y: Math.sin(a) * Math.sin(b) * radius,
        z: Math.cos(a) * radius,
        x2d: 0,
        y2d: 0,
        scale: 1,
        width: 0,
        height: 0
      };
    });

    const rotateX = (tag, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y1 = tag.y * cos - tag.z * sin;
      const z1 = tag.z * cos + tag.y * sin;
      tag.y = y1;
      tag.z = z1;
    };

    const rotateY = (tag, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x1 = tag.x * cos - tag.z * sin;
      const z1 = tag.z * cos + tag.x * sin;
      tag.x = x1;
      tag.z = z1;
    };

    let isDragging = false;
    let startX = 0;
    let startY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        mouseRef.current = { x, y, active: true };

        if (isDragging) {
          const deltaX = e.touches[0].clientX - startX;
          const deltaY = e.touches[0].clientY - startY;
          
          speedY = deltaX * 0.008;
          speedX = -deltaY * 0.008;
          
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
        }
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      if (isDragging) {
        // Direct swipe drag velocities on touch devices
        speedX *= 0.95;
        speedY *= 0.95;
      } else if (mouseRef.current.active) {
        // Hover-based rotation on desktop (mouse offset from center controls speed)
        const targetSpeedX = -(mouseRef.current.y - height / 2) * 0.0001;
        const targetSpeedY = (mouseRef.current.x - width / 2) * 0.0001;
        
        speedX += (targetSpeedX - speedX) * 0.15;
        speedY += (targetSpeedY - speedY) * 0.15;
      } else {
        // Return to constant slow drift
        speedX += (-0.0005 - speedX) * 0.05;
        speedY += (0.0015 - speedY) * 0.05;
      }

      // Rotate all tags
      tags.forEach(tag => {
        rotateX(tag, speedX);
        rotateY(tag, speedY);
        
        // 3D projections
        tag.scale = depth / (depth + tag.z);
        tag.x2d = tag.x * tag.scale + width / 2;
        tag.y2d = tag.y * tag.scale + height / 2;
      });

      // Sort by depth (Z index) so items in back render first, giving visual occlusion
      const sortedTags = [...tags].sort((a, b) => a.z - b.z);

      // Check hover tag
      let currentHovered = null;
      if (mouseRef.current.active) {
        // Iterate front-to-back to catch topmost element first
        for (let i = sortedTags.length - 1; i >= 0; i--) {
          const tag = sortedTags[i];
          const dist = Math.hypot(mouseRef.current.x - tag.x2d, mouseRef.current.y - tag.y2d);
          // Adjust hit box size by projection scale
          const hitRadius = Math.max(30, 20 * tag.scale + tag.name.length * 4);
          if (dist < hitRadius && tag.z > -radius * 0.5) {
            currentHovered = tag;
            break;
          }
        }
      }
      
      setHoveredSkill(currentHovered ? currentHovered.name : null);

      // Draw all tags
      sortedTags.forEach(tag => {
        const isHovered = currentHovered && currentHovered.name === tag.name;
        
        // Compute font scale and opacity with mobile scaling fallback
        const isMobile = width < 768;
        const baseFontSize = isMobile ? 12 : 16;
        const fontSize = Math.max(isMobile ? 10 : 11, Math.round(baseFontSize * tag.scale));
        const alpha = Math.min(1.0, Math.max(0.15, (tag.z + radius) / (2 * radius) * 0.8 + 0.15));

        ctx.save();
        ctx.translate(tag.x2d, tag.y2d);
        
        // Background capsule pill for hovered items
        if (isHovered) {
          ctx.font = `bold ${fontSize}px var(--font-display), sans-serif`;
          const textWidth = ctx.measureText(tag.name).width;
          const paddingX = 14;
          const paddingY = 8;
          
          // Glow background
          ctx.shadowBlur = 15;
          ctx.shadowColor = `rgba(${tag.rgb}, 0.5)`;
          ctx.fillStyle = `rgba(13, 13, 18, 0.9)`;
          ctx.strokeStyle = `rgba(${tag.rgb}, 0.8)`;
          ctx.lineWidth = 1.5;
          
          const r = (fontSize + paddingY) / 2;
          const w = textWidth + paddingX * 2;
          const h = fontSize + paddingY;
          
          ctx.beginPath();
          ctx.roundRect(-w / 2, -h / 2, w, h, r);
          ctx.fill();
          ctx.stroke();
          
          // Hover text draw
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255, 255, 255, 1.0)`;
        } else {
          // Regular text draw
          ctx.fillStyle = `rgba(${tag.rgb}, ${alpha})`;
          ctx.font = `${tag.scale > 0.95 ? 'bold' : 'normal'} ${fontSize}px var(--font-display), sans-serif`;
        }

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(tag.name, 0, 0);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        
        canvas.removeEventListener('touchstart', handleTouchStart);
        canvas.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="skills-cloud-container">
      <canvas ref={canvasRef} className="skills-cloud-canvas" />
      <div className="skills-cloud-footer">
        <span className="skills-cloud-tooltip">
          {hoveredSkill ? `Active Skill: ${hoveredSkill}` : 'Hover to rotate'}
        </span>
      </div>
    </div>
  );
};

export default SkillsCloud;
