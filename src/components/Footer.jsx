import React from 'react';
import { personal } from '../data';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-text">
          © 2025 {personal.name}. Designed &amp; Built with care.
        </span>
        <div className="footer-links">
          <button onClick={scrollToTop} className="footer-link">Back to Top ↑</button>
          <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
