import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";

// Separador vertical reutilizable
const Sep = () => <span className="mx-2 text-slate-400">|</span>;

// Renderiza un <li> con partes unidas por "|"
const InlineItem = ({ parts }) => (
  <li className="leading-relaxed">
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
    <Section id="educacion" title="Educación">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Formación principal */}
        <Card className="p-6 space-y-2">
          <h3 className="text-lg font-semibold">Formación principal</h3>
          <ul className="list-none pl-0 text-slate-700 space-y-2">
            <InlineItem
              parts={[
                "Ingeniería de Software",
                "Universidad Iberoamericana (Virtual)",
                "2022 – Presente",
              ]}
            />
            <InlineItem
              parts={[
                "Maestría en Ciberseguridad y Ciberdefensa",
                "Escuela Superior de Guerra (Presencial)",
                "2024 – Presente",
              ]}
            />
            <InlineItem
              parts={[
                "Psicología",
                "Corporación Universitaria Minuto de Dios (Presencial)",
                "2011 – 2015",
              ]}
            />
          </ul>
        </Card>

        {/* Cursos destacados */}
        <Card className="p-6 space-y-2">
          <h3 className="text-lg font-semibold">Cursos destacados</h3>
          <ul className="list-none pl-0 text-slate-700 space-y-2">
            <InlineItem
              parts={[
                "Criptografía Poscuántica",
                "Universidad de los Andes",
                "2024",
              ]}
            />
            <InlineItem
              parts={[
                "Introducción a la Computación Cuántica",
                "Universidad de los Andes",
                "2024",
              ]}
            />
            <InlineItem
              parts={[
                "Técnico en Programación de Software",
                "SENA",
                "2020 – 2023",
              ]}
            />
            <InlineItem
              parts={[
                "Habilidades de Programación Web",
                "Universidad de Antioquia",
                "2021",
              ]}
            />
          </ul>
        </Card>
      </div>
    </Section>
  );
}
