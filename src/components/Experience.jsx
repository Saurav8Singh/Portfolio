import React from 'react';
import { experience } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';
import './Experience.css';

function ExpCard({ title, company, period, bullets, delay }) {
  const ref = useScrollReveal(delay);
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div ref={ref} className="exp-card fade-in">
        <div className="exp-header">
          <h3 className="exp-title">{title}</h3>
          <span className="exp-date">{period}</span>
        </div>
        <div className="exp-org">{company}</div>
        <ul className="exp-bullets">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const headRef = useScrollReveal(0);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div ref={headRef} className="fade-in">
          <span className="section-label">Work History</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">My professional journey building real-world web applications.</p>
        </div>
        <div className="timeline">
          {experience.map((exp, i) => (
            <ExpCard key={i} {...exp} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
