import './OverlayText.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const highlights = [
  {
    title: 'Current Role',
    detail: 'Full Stack Web Developer at Work Edge LTD (Dec 2025 - Present).',
  },
  {
    title: 'Previous Experience',
    detail: 'ITSOLERA PVT LTD (Full Stack) and Air University Multan (.NET Backend).',
  },
  {
    title: 'Education',
    detail: 'BS Computer Science, Air University Multan (2023 - 2027).',
  },
];

const metrics = [
  { label: 'Projects Delivered', value: '20+' },
  { label: 'Core Focus', value: 'MERN + .NET' },
  { label: 'Current Stage', value: 'Production Ready' },
];

const techStack = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'REST APIs',
  'Tailwind CSS',
];

function openExternal(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function OverlayText({ onOpenMenu }) {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      '.hero-reveal',
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="home-hero">
      <header className="hero-topbar hero-reveal">
        <div className="hero-identity">
          <p className="hero-location">Multan, Punjab, Pakistan</p>
          <p className="hero-brand">danish-portfolio</p>
        </div>

        <p className="hero-status" aria-live="polite">
          <span className="hero-status-dot" />
          Available for freelance and full-time opportunities
        </p>

        <nav className="hero-nav" aria-label="Primary">
          <button type="button" onClick={onOpenMenu}>Actions</button>
          <button type="button" onClick={() => navigate('/about')}>About</button>
          <button type="button" onClick={() => navigate('/blog')}>Blog</button>
          <button
            type="button"
            onClick={() => openExternal('https://www.linkedin.com/in/danish-butt-b41090369/')}
          >
            LinkedIn
          </button>
          <button
            type="button"
            onClick={() => openExternal('https://github.com/DanishButt586')}
          >
            GitHub
          </button>
        </nav>
      </header>

      <main className="hero-main">
        <section className="hero-primary hero-reveal">
          <p className="hero-kicker">Full Stack Web Developer</p>
          <h1 className="hero-title">
            Danish Butt
            <span>Building reliable, high-performance products from idea to deployment.</span>
          </h1>
          <p className="hero-summary hero-reveal">
            I build production-ready MERN applications by translating client requirements and UI designs
            into clean, scalable, and high-performance web solutions.
          </p>

          <div className="hero-metrics hero-reveal">
            {metrics.map((item) => (
              <article key={item.label} className="metric-card">
                <p className="metric-value">{item.value}</p>
                <p className="metric-label">{item.label}</p>
              </article>
            ))}
          </div>

          <div className="hero-actions hero-reveal">
            <a className="hero-action primary" href="/CV/WebCv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
            <a className="hero-action" href="mailto:danishnaveed212@gmail.com">Email Me</a>
            <a className="hero-action" href="https://www.linkedin.com/in/danish-butt-b41090369/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="hero-action" href="https://github.com/DanishButt586" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>

        <aside className="hero-side hero-reveal">
          <section className="hero-side-panel">
            <h2>Focus Areas</h2>
            <p>
              End-to-end web product development with clean architecture, responsive interfaces,
              and maintainable backend services.
            </p>
            <div className="hero-stack" aria-label="Core technologies">
              {techStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className="hero-highlights" aria-label="Career highlights">
            {highlights.map((item, index) => (
              <article key={item.title} className="highlight-card">
                <p className="highlight-step">{String(index + 1).padStart(2, '0')}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </section>
        </aside>
      </main>

      <footer className="hero-footer hero-reveal">
        <span>Student at Air University Multan</span>
        <span>MERN Stack | React.js | Node.js | MongoDB</span>
      </footer>
    </div>
  );
}
