import React from "react";

const experiences = [
  {
    company: "ArcLab",
    role: "Frontend Engineering Intern",
    period: "Jun 2023 — Jun 2024",
    bullets: [
      "Developed AI Smart Transform and Smart Media flows that reduced authoring time by 35%.",
      "Extended the Toast UI image editor with custom annotation layers and accessibility tooling.",
      "Collaborated with designers to launch responsive layouts and improve component documentation.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Hands-on work at the intersection of product and engineering</h2>
      </div>
      <div className="timeline">
        {experiences.map((exp) => (
          <article key={exp.company} className="timeline-card">
            <div>
              <h3>{exp.company}</h3>
              <p className="timeline-period">{exp.period}</p>
            </div>
            <p className="timeline-role">{exp.role}</p>
            <ul className="list">
              {exp.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
