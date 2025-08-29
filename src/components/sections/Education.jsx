import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import "../../styles/education.css";

/** Formación principal */
const PRINCIPAL = [
  {
    title: "Psicología",
    org: "Corporación Universitaria Minuto de Dios",
    date: "2011 – 2015",
  },
  {
    title: "Ingeniería de Software",
    org: "Universidad Iberoamericana",
    date: "2022 – Presente",
  },
  {
    title: "Maestría en Ciberseguridad y Ciberdefensa",
    org: "Escuela Superior de Guerra",
    date: "2024 – Presente",
  },
];

/** Cursos destacados */
const COURSES = [
  {
    title: "Criptografía Poscuántica",
    org: "Universidad de los Andes",
    date: "2024",
  },
  {
    title: "Introducción a la Computación Cuántica",
    org: "Universidad de los Andes",
    date: "2024",
  },
  {
    title: "Técnico en Programación de Software",
    org: "SENA",
    date: "2020 – 2023",
  },
];

const Row = ({ items }) => (
  <ul className="edu-row">
    {items.map((it, i) => (
      <li key={i} className="edu-col">
        <p className="edu-title">{it.title}</p>
        <p className="edu-sub">{it.org}</p>
        <p className="edu-date">{it.date}</p>
      </li>
    ))}
  </ul>
);

export default function Education() {
  return (
    <Section id="educacion" title="Educación">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Formación principal</h3>
          <Row items={PRINCIPAL} />
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold">Cursos destacados</h3>
          <Row items={COURSES} />
        </Card>
      </div>
    </Section>
  );
}
