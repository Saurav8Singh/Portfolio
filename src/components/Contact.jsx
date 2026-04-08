import React, { useState } from 'react';
import { personal } from '../data';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

const contactItems = [
  { icon: '✉️', label: 'Email',    value: personal.email },
  { icon: '📱', label: 'Phone',    value: personal.phone },
  { icon: '📍', label: 'Location', value: personal.location },
  { icon: '💼', label: 'LinkedIn', value: personal.linkedin },
  { icon: '🐙', label: 'GitHub',   value: personal.github },
];

export default function Contact() {
  const infoRef = useScrollReveal(0);
  const formRef = useScrollReveal(120);

  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2500);
      return;
    }
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name:'', email:'', subject:'', message:'' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const btnLabel = {
    idle:    'Send Message',
    sending: 'Sending…',
    success: '✓ Message Sent!',
    error:   'Fill required fields',
  }[status];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-head fade-in" ref={useScrollReveal(0)}>
          <span className="section-label gold2-label">Get In Touch</span>
          <h2 className="section-title white-title">Let's Work Together</h2>
          <p className="section-sub muted-sub">
            Open to new opportunities, collaborations, or just a friendly chat.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div ref={infoRef} className="fade-in">
            <p className="contact-intro">
              I'm currently open to new opportunities. Whether you have a project in mind,
              a question, or just want to connect — my inbox is always open. I'll get back
              to you as soon as possible.
            </p>
            <div className="contact-items">
              {contactItems.map((c, i) => (
                <div key={i} className="contact-item">
                  <div className="contact-icon">{c.icon}</div>
                  <div>
                    <div className="contact-lbl">{c.label}</div>
                    <div className="contact-val">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} className="contact-form fade-in" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  id="name" name="name" type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject" name="subject" type="text"
                placeholder="Project Discussion"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message" name="message" rows="5"
                placeholder="Tell me about your project or opportunity…"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className={`btn-send ${status}`}
              disabled={status === 'sending'}
            >
              {btnLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
