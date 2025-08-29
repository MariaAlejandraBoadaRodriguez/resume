// src/components/sections/RadialAboutSkills.jsx
import React from "react";
import "../../styles/radial-about-skills.css";

const SKILL_BARS = [
  { label: "Python", percent: 90 },
  { label: "Qiskit", percent: 75 },
  { label: "PennyLane", percent: 70 },
  { label: "React", percent: 80 },
  { label: "Spring Boot", percent: 60 },
  { label: "Node.js", percent: 70 },
  { label: "PostgreSQL", percent: 75 },
  { label: "Git", percent: 90 },
  { label: "MySQL", percent: 80 },
  { label: "Scrum", percent: 85 },
  { label: "Jira", percent: 75 },
];

export default function RadialAboutSkills() {
  return (
    <section id="sobre-mi" className="radial">
      {/* ancla extra para el menú */}
      <div id="habilidades" className="radial__anchor" aria-hidden="true" />

      <div className="radial__container">
        {/* IZQUIERDA: descripción */}
        <div className="radial__left">
          <div className="about">
            <p className="about__p">
              Soy desarrolladora <strong>full-stack</strong> con base en
              psicología e ingeniería de software y actualmente curso una
              <strong> Maestría en Ciberseguridad y Ciberdefensa</strong>. Me
              especializo en construir productos de extremo a extremo que
              combinan <strong>optimización</strong>, <strong>seguridad</strong>{" "}
              y <strong>computación cuántica</strong>; disfruto transformar
              requisitos complejos en interfaces claras y resultados
              reproducibles listos para producción. Cuento con bases sólidas en
              <strong> álgebra lineal</strong>, <strong>probabilidad</strong> y
              <strong> programación</strong> aplicadas a información y
              criptografía cuántica.
            </p>
          </div>
        </div>

        {/* DERECHA: barras de skills */}
        <div className="radial__right">
          <div className="skillbars">
            <h3 className="skillbars__title">Skill Set</h3>

            <div className="skillbars__grid">
              {SKILL_BARS.map((s) => (
                <div key={s.label} className="skillbar">
                  <div className="skillbar__head">
                    <span className="skillbar__label">{s.label}</span>
                    <span className="skillbar__percent">{s.percent}%</span>
                  </div>

                  <div className="skillbar__track">
                    <div
                      className="skillbar__fill"
                      style={{ width: `${s.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
