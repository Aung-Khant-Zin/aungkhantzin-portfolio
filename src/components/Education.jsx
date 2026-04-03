import React from "react";

const education = [
  {
    school: "Singapore Polytechnic",
    program: "Diploma in Information Technology",
    focus: "Software Engineering specialization",
    period: "Apr 2023 — May 2026",
    details:
      "Coursework highlights include full-stack development, applied machine learning, and UI engineering.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>Continuous learning anchored in software craftsmanship</h2>
      </div>
      <div className="timeline">
        {education.map((item) => (
          <article key={item.school} className="timeline-card">
            <div>
              <h3>{item.school}</h3>
              <p className="timeline-period">{item.period}</p>
            </div>
            <p className="timeline-role">{item.program}</p>
            <p>{item.focus}</p>
            <p className="muted">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
