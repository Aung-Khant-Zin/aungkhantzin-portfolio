import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let’s create valuable, user-first experiences together</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Say hello</h3>
          <p>
            Email me for collaboration, internships, or design critiques. I’ll
            reply within 24 hours.
          </p>
          <a href="mailto:aungkhantzin1364@gmail.com" className="btn-primary">
            aungkhantzin1364@gmail.com
          </a>
        </div>
        <div className="contact-card">
          <h3>Elsewhere on the web</h3>
          <ul className="link-list">
            <li>
              <a href="https://wa.me/6581462766" target="_blank" rel="noreferrer">
                <FaWhatsapp aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/akzryan" target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/AUNG-KHANT-ZIN" target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
