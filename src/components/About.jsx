import React from 'react';
import { personal } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const contacts = [
  { icon: '📍', label: 'Location', value: personal.location },
  { icon: '✉️', label: 'Email',    value: personal.email },
  { icon: '📱', label: 'Phone',    value: personal.phone },
  { icon: '💼', label: 'LinkedIn', value: personal.linkedin },
  { icon: '🐙', label: 'GitHub',   value: personal.github },
];

export default function About() {
  const textRef  = useScrollReveal(0);
  const cardsRef = useScrollReveal(100);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div ref={textRef} className="fade-in">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Passionate Developer<br />Based in Noida</h2>
            <div className="about-text">
              {personal.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          <div ref={cardsRef} className="fade-in about-details">
            {contacts.map((c, i) => (
              <div key={i} className="detail-card">
                <div className="detail-icon">{c.icon}</div>
                <div>
                  <div className="detail-label">{c.label}</div>
                  <div className="detail-value">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
