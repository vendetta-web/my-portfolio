import React from "react";
import { personal, socialLinks } from "../data";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="section-shell hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow eyebrow-dark">{personal.eyebrow}</span>
          <h1>{personal.name}</h1>
          <h2>
            I build web &amp; enterprise solutions with <span>React</span> &amp; <span>Salesforce</span>.
          </h2>
          <p>{personal.description}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Work <i className="fa-solid fa-arrow-down"></i>
            </a>
            {personal.resume ? (
              <a className="btn btn-secondary-dark" href={personal.resume} target="_blank" rel="noreferrer">
                Download Resume <i className="fa-solid fa-download"></i>
              </a>
            ) : (
              <a className="btn btn-secondary-dark" href="#experience">
                View Experience <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>

          <div className="social-row" aria-label="Social profiles">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="hero-image-card">
            <div className="hero-image-topbar">
              <span></span><span></span><span></span>
              <small>workspace.jsx</small>
            </div>
            <img src={personal.heroImage} alt="Developer workspace illustration" />
            <div className="hero-code-card">
              <span>const developer =</span>
              <strong>React + Salesforce</strong>
              <small>building useful things.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
