import React from 'react';
import { personal } from '../data';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-circle1" />
      <div className="hero-circle2" />
      <div className="hero-dot-grid" />

      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="hero-dot" />
              {personal.tagline}
            </div>

            <h1 className="hero-name">
              Hi, I'm<br />
              <span className="hero-name-highlight">{personal.name}</span>
            </h1>

            <p className="hero-desc">{personal.summary}</p>

            <div className="hero-btns">
              <button className="btn-primary" onClick={() => scrollTo('projects')}>
                View My Work
              </button>
              <button className="btn-outline" onClick={() => scrollTo('contact')}>
                Get In Touch
              </button>
            </div>

            <div className="hero-stats">
              {personal.stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

        <div>
  <img className="hero-avatar" src="/Saurav.jpeg" alt="Profile" />
</div>
        </div>
      </div>
    </section>
  );
}
