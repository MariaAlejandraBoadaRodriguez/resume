import React from "react";
import Card from "../ui/Card";
import LinkBadge from "../ui/LinkBadge";
import { WHATSAPP_URL } from "../../constants";

export default function Hero() {
    return (
        <section id="inicio" className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12),transparent_50%)]" />
            <div className="mx-auto max-w-6xl px-4 py-10 md:py-28 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Full‑Stack Developer Cybersecurity & Quantum Computing Enthusiast
                    </h1>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <LinkBadge href="https://www.linkedin.com/in/mar%C3%ADa-alejandra-boada-rodriguez/">LinkedIn</LinkBadge>
                        <LinkBadge href="https://github.com/MariaAlejandraBoadaRodriguez">GitHub</LinkBadge>
                    </div>
                </div>
                <Card className="p-6">
                    <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-blue-500/10 to-emerald-500/10 p-6">
                        <p className="text-slate-700 text-base leading-relaxed">
                            Soy desarrolladora <strong>full-stack</strong> con base en psicología e ingeniería de software
                            y actualmente curso una <strong>Maestría en Ciberseguridad y Ciberdefensa</strong>. Me especializo en
                            construir productos de extremo a extremo que combinan <strong>optimización</strong>, <strong>seguridad</strong>
                            y <strong>computación cuántica</strong>; disfruto transformar requisitos complejos en interfaces claras y
                            resultados reproducibles listos para producción. Cuento con bases sólidas en <strong>álgebra lineal</strong>,
                            <strong> probabilidad</strong> y <strong>programación</strong> aplicadas a información y criptografía cuántica.
                        </p>

                        <p className="mt-3 text-slate-700 text-base leading-relaxed">
                            He trabajado con formulaciones <strong>QUBO</strong> y algoritmos variacionales (PennyLane/Qiskit) para problemas
                            de optimización; aplico principios de <strong>ciberseguridad</strong> y prácticas de ingeniería (testing, versionado,
                            documentación) para entregar soluciones mantenibles y listas para producción. También tengo experiencia en
                            <strong>frontend</strong> profesional para explicar resultados técnicos a clientes y stakeholders no técnicos.
                        </p>
                    </div>
                </Card>
            </div>
        </section>
    );
}