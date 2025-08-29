import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";

// Lista en línea con separadores "|"
const InlineList = ({ items }) => (
  <div className="mt-4 flex flex-wrap items-center justify-center gap-y-2 text-slate-700">
    {items.map((txt, i) => (
      <React.Fragment key={i}>
        <span className="px-1">{txt}</span>
        {i < items.length - 1 && <span className="opacity-50">|</span>}
      </React.Fragment>
    ))}
  </div>
);

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades" subtitle="Tecnologías y Herramientas">
      <div className="grid md:grid-cols-3 gap-6">
        {/* LENGUAJES */}
        <Card className="p-8 bg-white text-slate-900 border border-slate-200">
          <h3 className="text-center text-black text-xl font-extrabold tracking-wide">
            Lenguajes
          </h3>
          <div className="mx-auto mt-2 h-1 w-10 rounded bg-black" />
          <InlineList
            items={[
              "Python",
              "Qiskit",
              "PennyLane",
              "Java",
              "Cirq",
              "PHP",
              "C#",
            ]}
          />
        </Card>

        {/* FRAMEWORKS & TOOLS */}
        <Card className="p-8 bg-white text-slate-900 border border-slate-200">
          <h3 className="text-center text-black text-xl font-extrabold tracking-wide">
            Frameworks & Tools
          </h3>
          <div className="mx-auto mt-2 h-1 w-10 rounded bg-black" />
          <InlineList
            items={[
              "React",
              "Laravel",
              "Spring Boot / Node.js",
              "MySQL",
              "PostgreSQL",
              "VS Code",
              "Git",
              "Jira",
              "Postman",
              "Docker",
            ]}
          />
        </Card>

        {/* METODOLOGÍAS & IDIOMAS */}
        <Card className="p-8 bg-white text-slate-900 border border-slate-200">
          <h3 className="text-center text-black text-xl font-extrabold tracking-wide">
            Metodologías & Idiomas
          </h3>
          <div className="mx-auto mt-2 h-1 w-10 rounded bg-black" />
          <InlineList
            items={[
              "Scrum",
              "Español",
              "Inglés",
            ]}
          />
        </Card>
      </div>
    </Section>
  );
}
