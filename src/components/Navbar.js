import React, { useEffect, useState } from "react";
import { navigation, personal } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="section-shell nav-inner">
        <a href="#home" className="brand" aria-label="Go to home">
          <span className="brand-mark">{personal.initials}</span>
          <span className="brand-name">{personal.name}</span>
        </a>

        <button
          className="mobile-menu-btn"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        <nav className={`main-nav ${open ? "main-nav--open" : ""}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.target} href={`#${item.target}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let's Talk <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </header>
  );
}
