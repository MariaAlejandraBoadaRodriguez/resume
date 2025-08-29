import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { WHATSAPP_URL } from "../../constants";

export default function About() {
    return (
        <Section id="sobre-mi" title="Sobre mí" subtitle="Perfil profesional">
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h3 className="text-xl font-semibold">Resumen</h3>
                    <p className="mt-3 text-slate-700">
                        Desarrollo proyectos que combinan optimización, ciberseguridad y computación cuántica. Me interesan los retos de
                        ingeniería con impacto real, la visualización clara de resultados y la construcción de productos listos para producción.
                    </p>
                    <ul className="mt-4 text-slate-700 list-disc pl-5 space-y-1">
                        <li>Participación en hackathons y comunidad de investigación en la Universidad de los Andes.</li>
                        <li>Experiencia en frontend profesional para explicar resultados técnicos a clientes.</li>
                        <li>Enfoque en reproducibilidad, buenas prácticas y documentación.</li>
                    </ul>
                </Card>
                <Card className="p-6">
                    <h3 className="text-xl font-semibold">Contacto</h3>
                    <div className="mt-3 grid gap-2">
                        <a className="underline hover:text-blue-700" href="mailto:alejandrarodriguez2508@gmail.com">alejandrarodriguez2508@gmail.com</a>
                        <span className="text-slate-700">(+57) 320 867 30 22</span>
                        <a className="underline hover:text-blue-700" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Escríbeme por WhatsApp</a>
                    </div>
                </Card>
            </div>
        </Section>
    );
}