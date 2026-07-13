import { Code, Layers, ShieldCheck, Cpu } from 'lucide-react';
import './About.css';
import SkillsCloud from '../SkillsCloud/SkillsCloud';

const About = () => {
  const stats = [
    { value: '2022-2026', label: 'B.Tech CCE Student' },
    { value: '6', label: 'Key Projects' },
    { value: '2', label: 'Internships/Trainings' },
    { value: '3', label: 'Meta Certifications' },
  ];

  const cards = [
    {
      icon: <Code className="card-icon cyan" size={24} />,
      title: 'Full-Stack (MERN)',
      desc: 'Building responsive frontend interfaces with React, integrated with robust Express/Node backends and MongoDB.',
    },
    {
      icon: <Cpu className="card-icon magenta" size={24} />,
      title: 'DevOps & Integration',
      desc: 'Dockerizing applications and setting up automated CI/CD pipelines with Jenkins for seamless deployments.',
    },
    {
      icon: <Layers className="card-icon cyan" size={24} />,
      title: 'Database Management',
      desc: 'Designing database schemas and retrieving data using SQL, MongoDB, and Oracle Database systems.',
    },
    {
      icon: <ShieldCheck className="card-icon magenta" size={24} />,
      title: 'AI-Powered Web Apps',
      desc: 'Developing smart features like real-time communication (Socket.IO) and toxicity or sentiment analysis.',
    },
  ];

  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        {/* Left column: narrative */}
        <div className="about-narrative">
          <p className="narrative-text" style={{ fontSize: '19px', lineHeight: '1.8' }}>
            I am a final-year Computer and Communication Engineering student at Manipal University Jaipur with a deep passion for Full-Stack development and Cloud operations. I enjoy building secure, high-performance web applications and streamlining deployment pipelines using modern DevOps practices.
          </p>
        </div>

        {/* Right column: stats */}
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card glass-panel">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width Technical Expertise Tag Cloud */}
      <div className="about-skills glass-panel" style={{ marginTop: '40px', marginBottom: '80px', padding: '30px 20px', display: 'flex', flexDirection: 'column' }}>
        <h3 className="skills-title" style={{ textAlign: 'center', marginBottom: '20px' }}>Technical Expertise</h3>
        <SkillsCloud />
      </div>

      {/* Services/Core Values Row */}
      <div className="services-grid">
        {cards.map((card, i) => (
          <div key={i} className="service-card glass-panel">
            <div className="service-icon-wrapper">{card.icon}</div>
            <h4 className="service-title">{card.title}</h4>
            <p className="service-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
