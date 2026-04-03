import React from "react";
import project1 from "../assets/cashflowx.jpg";
import project2 from "../assets/github-profile-analyzer.jpg";
import project3 from "../assets/flowtask.jpg";
import project4 from "../assets/figma_prototype.jpg";

const projectData = [
  {
    title: "CashflowX Dashboard",
    desc:
      "Full-stack finance cockpit with gated auth, inline expense CRUD, and responsive dashboards summarizing spend, categories, and velocity.",
    stack: ["React 19", "Tailwind CSS", "Express API", "PostgreSQL", "Recharts"],
    img: project1,
    link: "https://cashflowx-app.onrender.com/",
  },
  {
    title: "GitHub Analyzer",
    desc:
      "Polished React + Vite dashboard that fetches profile stats, recent repos, language breakdowns, and keeps search history with filters, dark mode, and tight loading/error states.",
    stack: ["React", "Vite", "TypeScript", "Recharts", "REST APIs"],
    img: project2,
    link: "https://repo-radar-sand.vercel.app/",
  },
  {
    title: "SaaS Landing Page",
    desc:
      "FlowTask landing with hero CTAs, animated mockups, interactive features, social-proof grids, and modal pricing enhanced by scroll-triggered reveals.",
    stack: ["React 18", "Vite", "CSS Modules", "Scroll API"],
    img: project3,
    link: "https://saas-landing-page-self-eight.vercel.app/",
  },
  {
    title: "Figma Restaurant Suite",
    desc:
      "Desktop wireframes and interactive prototypes for a modern restaurant experience hub, including reservations and loyalty flows.",
    stack: ["Figma", "Wireframes", "Prototyping"],
    img: project4,
    link: "https://www.figma.com/design/DRDxLbCuNR94ppNEs8cWuQ/Restaurant-Project?node-id=2-18&t=ofsQYQu3vVt19A9D-1",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Recent projects that blend delightful UX with measurable impact</h2>
      </div>
      <div className="projects-grid">
        {projectData.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <ul className="chip-list">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noreferrer" className="btn-text">
                View project ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
