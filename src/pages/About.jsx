import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './About.css';

export default function About() {
  const navigate = useNavigate();
  const [showFullContent, setShowFullContent] = useState(false);

  const aboutContent = {
    excerpt: [
      "I am Danish Butt, a Computer Science student at Air University Multan and a dedicated Full Stack Web Developer from Multan, Punjab, Pakistan.",
      "I specialize in the MERN stack and focus on turning client requirements and UI designs into pixel-perfect, fully functional web applications with smooth user experiences."
    ],
    fullContent: [
      "I am Danish Butt, a dedicated Full Stack Web Developer with a strong focus on the MERN stack (React.js, Node.js, MongoDB).",
      "I specialize in translating client requirements and UI designs into pixel-perfect, fully functional web solutions, from backend architecture to dynamic frontend interfaces.",
      "At Work Edge LTD (December 2025 to Present), I work as a Full Stack Web Developer, building and hosting full stack web applications and delivering designs exactly as clients envision.",
      "At ITSOLERA PVT LTD (January 2026 to March 2026), I built three major web applications, including two industry-level projects deployed on Vercel.",
      "At Air University Multan (June 2025 to September 2025), I worked as a .NET backend developer on an internship management system.",
      "Education: Bachelor of Computer Science at Air University Multan (2023 to 2027), and Engineering studies at Punjab Group Of Colleges (2020 to 2022)."
    ]
  };

  return (
    <div className="about-page">
      {/* Spline Animation Background */}
      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/qK5Aba3x2UOqeksF/scene.splinecode" 
        />
      </div>
      
      {/* Back Arrow */}
      <button className="back-arrow" onClick={() => navigate('/')}>
        <span className="arrow-icon">←</span>
        <span className="back-text">Back to Home</span>
      </button>

      {/* About Content */}
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        
        <div className="about-description">
          {aboutContent.excerpt.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <button 
            className="read-more-btn" 
            onClick={() => setShowFullContent(true)}
          >
            Read More
          </button>
        </div>
      </div>

      {/* Top Center - danish-portfolio */}
      <div className="top-center">
        <p>danish-portfolio</p>
      </div>

      {/* Right Menu - About, Blog, LinkedIn */}
      <div className="right-menu">
        <ul>
          <li
            className="clickable"
            onClick={() => navigate('/about')}
            style={{ pointerEvents: 'auto', cursor: 'pointer' }}
          >
            About
          </li>
          <li
            className="clickable"
            onClick={() => navigate('/blog')}
            style={{ pointerEvents: 'auto', cursor: 'pointer' }}
          >
            Blog
          </li>
          <li
            className="clickable"
            onClick={() => window.open('https://www.linkedin.com/in/danish-butt-b41090369/', '_blank', 'noopener,noreferrer')}
            style={{ pointerEvents: 'auto', cursor: 'pointer' }}
          >
            LinkedIn
          </li>
        </ul>
      </div>

      {/* Popup for full about content */}
      {showFullContent && (
        <div className="popup-overlay" onClick={() => setShowFullContent(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowFullContent(false)}>
              ×
            </button>
            <h2 className="popup-title">About Me</h2>
            <div className="popup-body">
              {aboutContent.fullContent.map((paragraph, index) => (
                <p key={index} className="popup-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
