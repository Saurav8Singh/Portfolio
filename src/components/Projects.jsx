import React from 'react';
import { projects } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
    </svg>
  );
}

function ProjectCard({ number, title, tech, description, liveUrl, githubUrl, delay }) {
  const ref = useScrollReveal(delay);
  return (
    <div ref={ref} className="proj-card fade-in">
      <div className="proj-number">{number}</div>
      <h3 className="proj-title">{title}</h3>
      <div className="proj-tech">
        {tech.map((t, i) => <span key={i}>{t}</span>)}
      </div>
      <p className="proj-desc">{description}</p>
      <div className="proj-footer">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
          Live Demo <ExternalIcon />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
          GitHub <GithubIcon />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const headRef = useScrollReveal(0);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div ref={headRef} className="fade-in">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            A selection of projects I've built across frontend and full-stack development.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
