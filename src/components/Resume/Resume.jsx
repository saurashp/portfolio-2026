import { Briefcase, GraduationCap, Award, Users, ExternalLink } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const experiences = [
    {
      role: 'Web Developer Intern',
      company: 'Coincent',
      duration: 'May 2024 – Jul 2024',
      points: [
        'Developed and deployed 3 responsive web applications.',
        'Improved UI/UX and optimized frontend performance.'
      ]
    },
    {
      role: 'Trainee',
      company: 'SAIL Rourkela Steel Plant',
      duration: 'Jun 2024 – Jul 2024',
      points: [
        'Completed a 6-week industrial training focused on SAP ERP and Oracle Database systems.',
        'Worked with Oracle Database and SAP ERP to understand enterprise workflows, database management, and SQL-based data retrieval.'
      ]
    },
    {
      role: 'Cloud Computing Intern',
      company: 'Corizo',
      duration: 'May 2023 – Jul 2023',
      points: [
        'Completed intensive training and practical projects under Cloud Computing.',
        'Worked with virtual instances, cloud infrastructure orchestration, and basic deployment systems.'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech, Computer and Communication Engineering',
      institution: 'Manipal University Jaipur',
      duration: '2022 – 2026',
      details: 'Focus on core programming, databases, web technologies, and systems engineering.'
    }
  ];

  const leadership = [
    {
      role: 'Technical Head & Webmaster',
      organization: 'Panacea, MUJ',
      details: 'Led 5+ workshops and events involving 300+ participants, managed the online presence and technical operations.'
    },
    {
      role: 'Production Lead',
      organization: 'Glitch Esports Society',
      details: 'Managed production streams, event setups, and maintained 100+ sponsorship leads.'
    }
  ];

  const certifications = [
    {
      name: 'Meta React Basics',
      link: 'https://www.coursera.org/account/accomplishments/verify/23463Q8LGC2W'
    },
    {
      name: 'Meta Introduction to Front-End Development',
      link: 'https://www.coursera.org/account/accomplishments/verify/UW9T8QRQ2MYT'
    },
    {
      name: 'Meta Introduction to Back-End Development',
      link: 'https://www.coursera.org/account/accomplishments/verify/JZY30NV77LL5'
    }
  ];

  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="resume-grid">
        {/* Left Column: Experience & Education */}
        <div className="resume-column">
          <div className="column-header">
            <Briefcase className="header-icon cyan" size={24} />
            <h3 className="column-title">Work Experience</h3>
          </div>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item glass-panel">
                <span className="timeline-duration">{exp.duration}</span>
                <h4 className="timeline-role">{exp.role}</h4>
                <h5 className="timeline-company gradient-text">{exp.company}</h5>
                <ul className="timeline-points">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="column-header" style={{ marginTop: '40px' }}>
            <GraduationCap className="header-icon magenta" size={24} />
            <h3 className="column-title">Education</h3>
          </div>
          
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item glass-panel">
                <span className="timeline-duration">{edu.duration}</span>
                <h4 className="timeline-role">{edu.degree}</h4>
                <h5 className="timeline-company gradient-text">{edu.institution}</h5>
                <p className="timeline-desc">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Leadership & Certifications */}
        <div className="resume-column">
          <div className="column-header">
            <Users className="header-icon cyan" size={24} />
            <h3 className="column-title">Leadership & Roles</h3>
          </div>
          
          <div className="timeline">
            {leadership.map((lead, index) => (
              <div key={index} className="timeline-item glass-panel">
                <h4 className="timeline-role">{lead.role}</h4>
                <h5 className="timeline-company gradient-text">{lead.organization}</h5>
                <p className="timeline-desc">{lead.details}</p>
              </div>
            ))}
          </div>

          <div className="column-header" style={{ marginTop: '40px' }}>
            <Award className="header-icon magenta" size={24} />
            <h3 className="column-title">Meta Certifications</h3>
          </div>

          <div className="certs-grid">
            {certifications.map((cert, index) => (
              <a 
                key={index} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-card glass-panel"
              >
                <div className="cert-info">
                  <span className="cert-badge">Credential</span>
                  <h4 className="cert-name">{cert.name}</h4>
                </div>
                <ExternalLink className="cert-link-icon" size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
