// src/components/sections/RadialAboutSkills.jsx
import React from "react";
import "../../styles/radial-about-skills.css";

/* =========================
   Datos por grupo de skills
   ========================= */
const LANGUAGES = [
  { label: "Python", percent: 90 },
  { label: "Qiskit", percent: 75 },
  { label: "PennyLane", percent: 70 },
];

const FRAMEWORKS_DB = [
  { label: "React", percent: 80 },
  { label: "Spring Boot", percent: 60 },
  { label: "Node.js", percent: 70 },
  { label: "PostgreSQL", percent: 75 },
  { label: "MySQL", percent: 80 },
];

const TOOLS = [
  { label: "Git", percent: 90 },
  { label: "Jira", percent: 75 },
  { label: "Scrum", percent: 85 },
];

/* Barrita reutilizable */
function SkillBar({ label, percent, variant = "yellow" }) {
  return (
    <div className={`skillbar skillbar--${variant}`}>
      <div className="skillbar__head">
        <span className="skillbar__label">{label}</span>
        <span className="skillbar__percent">{percent}%</span>
      </div>
      <div className="skillbar__track">
        <div className="skillbar__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default function RadialAboutSkills() {
  return (
    <section id="sobre-mi" className="radial">
      {/* ancla adicional para el menú */}
      <div id="habilidades" className="radial__anchor" aria-hidden="true" />

      <div className="radial__container">
        {/* IZQUIERDA: descripción */}
        <div className="radial__left">
          <div className="about">
            <p className="about__p">
              I am a <strong>full-stack</strong> developer with a background in
              psychology and software engineering, and I am currently pursuing a
              <strong> Master’s degree in Data Analytics </strong> and
              <strong> Master's degree in Cybersecurity and Cyberdefense </strong>.
              I specialize in <strong> optimization</strong>, <strong> security</strong>, 
              <strong> Software Testing</strong>, <strong> Cloud & DevOps</strong> and
              <strong> quantum computing</strong>; I enjoy transforming complex 
              requirements into clear interfaces and reproducible, production-ready results. 
              I have a strong foundation in <strong> linear algebra</strong>,
              <strong> probability</strong> and <strong> programming </strong> 
              applied to information and quantum cryptography.
            </p>
          </div>
        </div>

        {/* DERECHA: Skill Set agrupado */}
        <div className="radial__right">
          <div className="skillbars">
            <h3 className="skillbars__title">Skill Set</h3>

            {/* Lenguajes (amarillo) */}
            <div className="skillbars__group">
              <h4 className="skillbars__groupTitle">Programming languages</h4>
              {LANGUAGES.map((s) => (
                <SkillBar key={s.label} {...s} variant="yellow" />
              ))}
            </div>

            {/* Frameworks y BD (negro) */}
            <div className="skillbars__group">
              <h4 className="skillbars__groupTitle">
                Frameworks & Data Base
              </h4>
              {FRAMEWORKS_DB.map((s) => (
                <SkillBar key={s.label} {...s} variant="black" />
              ))}
            </div>

            {/* Herramientas (amarillo) */}
            <div className="skillbars__group">
              <h4 className="skillbars__groupTitle">Tools</h4>
              {TOOLS.map((s) => (
                <SkillBar key={s.label} {...s} variant="yellow" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
