import React from 'react';
import { education, certifications } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';
import './Education.css';

function EduCard({ degree, institution, year, delay }) {
  const ref = useScrollReveal(delay);
  return (
    <div ref={ref} className="edu-card fade-in">
      <div>
        <div className="edu-degree">{degree}</div>
        <div className="edu-inst">{institution}</div>
      </div>
      <div className="edu-year">{year}</div>
    </div>
  );
}

export default function Education() {
  const headRef  = useScrollReveal(0);
  const certHead = useScrollReveal(200);

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div ref={headRef} className="fade-in">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-sub">My academic foundations in computer science and applications.</p>
        </div>

        <div className="edu-grid">
          {education.map((e, i) => (
            <EduCard key={i} {...e} delay={i * 80} />
          ))}
        </div>

        <div className="cert-section">
          <div ref={certHead} className="fade-in">
            <span className="section-label">Credentials</span>
            <h3 className="cert-title">Certifications</h3>
          </div>
          <div className="cert-grid">
            {certifications.map((c, i) => (
              <EduCard
                key={i}
                degree={c.title}
                institution={c.issuer}
                year={c.year}
                delay={i * 80 + 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
