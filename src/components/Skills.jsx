import React from 'react';
import { skills } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';
import './Skills.css';

function SkillCard({ category, items, delay }) {
  const ref = useScrollReveal(delay);
  return (
    <div ref={ref} className="skill-card fade-in">
      <div className="skill-card-title">{category}</div>
      <div className="skill-tags">
        {items.map((item, i) => (
          <span key={i} className="skill-tag">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headRef = useScrollReveal(0);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div ref={headRef} className="fade-in">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-sub">
            A curated set of technologies I use to build modern, performant web experiences.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <SkillCard key={i} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
