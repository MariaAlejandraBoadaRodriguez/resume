import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { WHATSAPP_URL } from "../../constants";

export default function Contact() {
    return (
        <Section id="contacto" title="Contacto" subtitle="¡Hablemos!">
            <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-semibold">¿Tienes una oportunidad o proyecto?</h3>
                        <p className="mt-1 text-slate-700">Escríbeme y coordinamos una reunión.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a href="mailto:alejandrarodriguez2508@gmail.com" className="rounded-full border px-5 py-3 hover:shadow">Email</a>
                    </div>
                </div>
            </Card>
        </Section>
    );
}