import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import "../../styles/education.css";

const Sep = () => <span className="edu-sep" aria-hidden>|</span>;

const InlineItem = ({ parts }) => (
  <li className="edu-item">
    {parts.map((txt, i) => (
      <React.Fragment key={i}>
        <span>{txt}</span>
        {i < parts.length - 1 && <Sep />}
      </React.Fragment>
    ))}
  </li>
);

export default function Education() {
  return (
    <Section id="educacion" title="Educación" className="education">
      <div className="edu__grid">
        <Card className="edu-card">
          <h3 className="edu-card__title">Formación principal</h3>
          <ul className="edu-list">
            <InlineItem parts={["Ingeniería de Software","Universidad Iberoamericana (Virtual)","2022 – Presente"]} />
            <InlineItem parts={["Maestría en Ciberseguridad y Ciberdefensa","Escuela Superior de Guerra (Presencial)","2024 – Presente"]} />
            <InlineItem parts={["Psicología","Corporación Universitaria Minuto de Dios (Presencial)","2011 – 2015"]} />
          </ul>
        </Card>

        <Card className="edu-card">
          <h3 className="edu-card__title">Cursos destacados</h3>
          <ul className="edu-list">
            <InlineItem parts={["Criptografía Poscuántica","Universidad de los Andes","2024"]} />
            <InlineItem parts={["Introducción a la Computación Cuántica","Universidad de los Andes","2024"]} />
            <InlineItem parts={["Técnico en Programación de Software","SENA","2020 – 2023"]} />
            <InlineItem parts={["Habilidades de Programación Web","Universidad de Antioquia","2021"]} />
          </ul>
        </Card>
      </div>
    </Section>
  );
}
