import React from "react";
import profile from "../assets/linkinProfile-Akz.jpg";

export default function Header() {
  return (
    <header className="header" id="home">
      <div className="profile-wrapper">
        <img src={profile} alt="Aung Khant Zin" className="profile-pic" />
      </div>
      <p className="eyebrow">Turning Designs into Code</p>
      <p className="typewriter typewriter-primary">Aspiring Frontend Developer</p>
      <p className="typewriter typewriter-secondary">Available for full-time opportunities</p>
      <h1>Building polished, human-focused interfaces</h1>
      <p className="lead">
        I ship performant, responsive products with React, TypeScript, and a
        keen eye for detail. Currently obsessed with design systems and
        delightful micro-interactions.
      </p>
      <div className="cta-buttons">
        <a href="#projects" className="btn-primary">
          View Projects
        </a>
        <a href="#contact" className="btn-secondary">
          Contact Me
        </a>
      </div>
      <ul className="quick-stats">
        <li>
          <span className="stat-number">3+</span>
          <span>Production features shipped</span>
        </li>
        <li>
          <span className="stat-number">1 yr</span>
          <span>ArcLab internship</span>
        </li>
        <li>
          <span className="stat-number">2026</span>
          <span>Diploma completion</span>
        </li>
      </ul>
      <div className="resume-banner">
        <div>
          <p>
            Prefer the highlights? Grab the polished PDF or review the interactive version
            tracking my most recent work.
          </p>
        </div>
        <div className="resume-actions">
          <a
            href="/Aung_Khant_Zin_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            View resume
          </a>
          <a href="/Aung_Khant_Zin_Resume.pdf" download className="btn-secondary ghost">
            Download PDF
          </a>
        </div>
      </div>
    </header>
  );
}
