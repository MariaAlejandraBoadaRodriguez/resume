import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import "../../styles/education.css";

/** Formación principal */
const PRINCIPAL = [
  {
    title: "Psychology",
    org: "Corporación Universitaria Minuto de Dios",
    date: "2011 – 2015",
  },
  {
    title: "Software Engineering",
    org: "Universidad Iberoamericana",
    date: "2022 – 2026",
  },
  {
    title: "Master's in Cybersecurity",
    org: "Escuela Superior de Guerra",
    date: "2024 – 2026",
  },
  {
    title: "Master’s in Data Analytics",
    org: "University of Niagara Falls (UNF)",
    date: "2025 – 2027",
  },
];

/** Cursos destacados */
const COURSES = [
  {
    title: "Post-Quantum Cryptography",
    org: "Universidad de los Andes",
    date: "2024",
  },
  {
    title: "Introduction to Quantum Computing",
    org: "Universidad de los Andes",
    date: "2024",
  },
  {
    title: "Software Programming Technician",
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
          <h3 className="text-lg font-semibold">Main training</h3>
          <Row items={PRINCIPAL} />
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold">Featured Courses</h3>
          <Row items={COURSES} />
        </Card>
      </div>
    </Section>
  );
}
