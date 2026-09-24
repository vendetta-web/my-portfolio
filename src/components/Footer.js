import React from "react";
import { personal, socialLinks } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
          <span>© {currentYear} {personal.name}. All rights reserved.</span>
          <a href="#home" aria-label="Back to top" className="footer-top-link">
            <i className="fa-solid fa-arrow-up"></i>
            <span>Back to top</span>
          </a>
      </div>
    </footer>
  );
}