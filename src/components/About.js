import React from "react";
import { personal, personalFacts } from "../data";

export default function About() {
  return (
    <section id="about" className="light-section section-pad">
      <div className="section-shell about-grid">
        <div className="about-visual reveal">
          <div className="about-card">
            <div className="about-code-window">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
              <pre>{`function buildIdea(idea) {\n  return {\n    ui: \"clean\",\n    system: \"scalable\",\n    impact: \"real\"\n  };\n}`}</pre>
            </div>
          </div>
        </div>

        <div className="about-copy reveal">
          <span className="eyebrow">ABOUT ME</span>
          <h2>{personal.aboutTitle}</h2>
          {personal.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          <div className="fact-grid">
            {personalFacts.map((fact) => (
              <div className="fact-card" key={fact.label}>
                <i className={fact.icon}></i>
                <div>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
