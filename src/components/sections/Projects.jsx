import React from "react";
import Section from "../ui/Section";
import "../../styles/projects.css";

import quboImg from "../../images/QUBO.png";
import teleImg from "../../images/Teleporta.png";

const projects = [
  {
    title: "Quantum Portfolio Optimization",
    tag: "QUBO",
    image: quboImg,
    desc:
      "Plataforma de optimización de cartera con formulación QUBO para balancear retorno-riesgo. Preselección por Sharpe, alto retorno, baja volatilidad/correlación. Solver de recocido simulado e integración cuántica (PennyLane/QAOA).",
    demo: "https://investmen-portafolio.vercel.app/",
    code: "https://github.com/MariaAlejandraBoadaRodriguez/investmen-portafolio",
  },
  {
    title: "Teleportation",
    tag: "VQA",
    image: teleImg,
    desc:
      "Plataforma web para simular teletransportación cuántica: parámetros de entrada, visualización de estados y backend con entrelazamiento y medidas.",
    demo: "https://teleportation-project.onrender.com/",
    code: "https://github.com/MariaAlejandraBoadaRodriguez/teleportation_project",
  },
];

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyectos">
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
                  Ver demo
                </a>
                <a
                  className="btn btn--ghost"
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
