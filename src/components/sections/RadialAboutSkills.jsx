import React from "react";
import "../../styles/radial-about-skills.css";

const skills = [
  "Python", "Qiskit", "PennyLane",
  "React", "Spring Boot", "Node.js", "postgreSQL", "Git", "MySQL",
  "Scrum", "Jira"
];

// distribuye N chips entre un arco (grados) y expone --a para CSS
const angleFor = (i, n, startDeg = -70, endDeg = 70) => {
  const t = n === 1 ? 0.5 : i / (n - 1);
  const deg = startDeg + (endDeg - startDeg) * t;
  return { "--a": `${deg}deg`, "--i": i };
};

export default function RadialAboutSkills() {
  return (
    <section id="sobre-mi" className="radial">
      {/* ancla extra para el menú Habilidades apuntando al mismo bloque */}
      <div id="habilidades" className="radial__anchor" aria-hidden="true" />

      <div className="radial__container">
        {/* CÍRCULO CENTRAL */}
        <div className="radial__left">
          <div className="radial-disc">
            <div className="radial-disc__inner">
              <p>
                Soy desarrolladora <strong>full-stack</strong> con base en psicología
                e ingeniería de software y actualmente curso una <strong>Maestría en
                Ciberseguridad y Ciberdefensa</strong>. Me especializo en construir
                productos de extremo a extremo que combinan <strong>optimización</strong>,
                <strong> seguridad</strong> y <strong>computación cuántica</strong>; disfruto transformar
                requisitos complejos en interfaces claras y resultados reproducibles listos
                para producción. Cuento con bases sólidas en <strong>álgebra lineal</strong>,
                <strong> probabilidad</strong> y <strong>programación</strong> aplicadas a información
                y criptografía cuántica.
              </p>
            </div>
          </div>
        </div>

        {/* SEMICÍRCULO DE SKILLS + CALLOUTS */}
        <div className="radial__right">
          <div className="radial-orbit">
            <div className="radial-orbit__ring" aria-hidden="true" />

            <ul className="radial-orbit__chips">
              {skills.map((s, i) => (
                <li key={s} className="chip" style={angleFor(i, skills.length)}>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
