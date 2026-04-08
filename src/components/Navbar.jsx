import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active section
      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.getBoundingClientRect().top <= 100) {
          setActiveSection(links[i].toLowerCase());
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => scrollTo('hero')}>SS.</button>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l}>
              <button
                className={`nav-link${activeSection === l.toLowerCase() ? ' active' : ''}`}
                onClick={() => scrollTo(l.toLowerCase())}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <button key={l} className="mobile-link" onClick={() => scrollTo(l.toLowerCase())}>
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}
