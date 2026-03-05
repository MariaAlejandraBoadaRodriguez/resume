import React from "react";
import Section from "../ui/Section";
import "../../styles/projects.css";

import quboImg from "../../images/QUBO.png";
import teleImg from "../../images/Teleporta.png";
import MarketlensImg from "../../images/MarketLens.png";

const projects = [
  {
    title: "MarketLens Analytics",
    tag: "SEO / SEM Analytics",
    image: MarketlensImg,
    desc:
      "Portfolio optimization platform with QUBO formulation to balance return and risk. Sharpe preselection, high return, low volatility/correlation. Simulated annealing solver and quantum integration (Penny Lane/QAOA).",
    demo: "https://marketlens-analytics.vercel.app/",
    code: "https://github.com/MariaAlejandraBoadaRodriguez/marketLens_analytics.git",
  },
  {
    title: "Quantum Portfolio Optimization",
    tag: "QUBO",
    image: quboImg,
    desc:
      "Portfolio optimization platform with QUBO formulation to balance return and risk. Sharpe preselection, high return, low volatility/correlation. Simulated annealing solver and quantum integration (Penny Lane/QAOA).",
    demo: "https://investmen-portafolio.vercel.app/",
    code: "https://github.com/MariaAlejandraBoadaRodriguez/investmen-portafolio",
  },
  {
    title: "Teleportation",
    tag: "VQA",
    image: teleImg,
    desc:
      "Web platform for simulating quantum teleportation: input parameters, state visualization, and backend with entanglement and measurements.",
    demo: "https://teleportation-project.onrender.com/",
    code: "https://github.com/MariaAlejandraBoadaRodriguez/teleportation_project",
  },
];

export default function Projects() {
  return (
    <Section id="proyectos" title="Projects">
      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            {/* Media arriba */}
            <div className="project-card__media">
              <img src={p.image} alt={p.title} loading="lazy" />
              <span
                className={`project-card__tag ${
                  p.tag.toLowerCase() === "qubo" ? "is-qubo" : "is-vqa"
                }`}
              >
                {p.tag}
              </span>
            </div>

            {/* Contenido abajo */}
            <div className="project-card__body">
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>

              <div className="project-card__actions">
                <a
                  className="btn btn--ghost"
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  className="btn btn--ghost"
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
