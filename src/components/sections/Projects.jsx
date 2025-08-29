import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import LinkBadge from "../ui/LinkBadge";


export default function Projects() {
    return (
        <Section id="proyectos" title="Proyectos">
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">Quantum Portfolio Optimization</h3>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">QUBO</span>
                    </div>
                    <p className="mt-3 text-slate-700">
                        Plataforma de optimización de cartera con formulación QUBO para balancear retorno‑riesgo. Preselección por Sharpe,
                        alto retorno, baja volatilidad/correlación. Solver de recocido simulado e integración cuántica (PennyLane/QAOA).
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <LinkBadge href="https://investmen-portafolio.vercel.app/">Ver demo</LinkBadge>
                        <LinkBadge href="https://github.com/MariaAlejandraBoadaRodriguez/investmen-portafolio">Código</LinkBadge>
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">Teleportation (Flask + PennyLane)</h3>
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">VQA</span>
                    </div>
                    <p className="mt-3 text-slate-700">
                        Plataforma web para simular teletransportación cuántica: parámetros de entrada, visualización de estados y backend
                        con entrelazamiento y medidas.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <LinkBadge href="https://teleportation-project.onrender.com/">Ver demo</LinkBadge>
                        <LinkBadge href="https://github.com/MariaAlejandraBoadaRodriguez/teleportation_project">Código</LinkBadge>
                    </div>
                </Card>
            </div>
        </Section>
    );
}