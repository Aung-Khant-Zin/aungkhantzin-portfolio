import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiFigma,
  SiWordpress,
  SiMysql,
  SiPostgresql,
  SiBootstrap,
  SiJenkins,
} from "react-icons/si";

const highlightSkills = [
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Figma", icon: SiFigma, color: "#f24e1e" },
  { name: "WordPress", icon: SiWordpress, color: "#21759b" },
  { name: "MySQL", icon: SiMysql, color: "#00618a" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#316192" },
  { name: "Java", icon: FaJava, color: "#e76f00" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
  { name: "Jenkins", icon: SiJenkins, color: "#d24939" },
];

export default function Skills() {
  const frontend = [
    "React",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Bootstrap",
    "Vite",
    "PostgreSQL",
  ];

  const tooling = [
    "Figma",
    "Git & GitHub",
    "Toast UI Editor",
    "Google Gemini API",
    "Chrome DevTools",
    "REST API Integration",
  ];

  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>A balanced toolkit across product, code, and collaboration</h2>
      </div>
      <div className="skills-container">
        <div className="skill-card">
          <h3>Frontend Core</h3>
          <ul>
            {frontend.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="skill-card">
          <h3>Tools & Workflows</h3>
          <ul>
            {tooling.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="highlight-panel">
        <div className="highlight-copy">
          <p className="eyebrow">Highlight</p>
          <h3>Visual polish meets reliable engineering</h3>
          <p>
            I partner closely with designers to translate component libraries
            into resilient systems. From semantic HTML all the way to database
            schemas, each layer is considered for accessibility, scalability,
            and storytelling.
          </p>
        </div>
        <div className="highlight-grid">
          {highlightSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                className="highlight-card"
                key={skill.name}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <span
                  className="highlight-icon"
                  style={{ color: skill.color, backgroundColor: `${skill.color}22` }}
                >
                  <Icon />
                </span>
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
