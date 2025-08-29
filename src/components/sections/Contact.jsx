import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import "../../styles/contact.css";

export default function Contact() {
  return (
    <Section id="contacto" title="Contacto" subtitle="¡Hablemos!" className="contact">
      <Card className="contact-card">
        <div className="contact-card__row">
          <div>
            <h3 className="contact-card__title">¿Tienes una oportunidad o proyecto?</h3>
            <p className="contact-card__text">Escríbeme y coordinamos una reunión.</p>
          </div>
          <div className="contact-card__actions">
            <a href="mailto:alejandrarodriguez2508@gmail.com" className="btn-outline">Email</a>
          </div>
        </div>
      </Card>
    </Section>
  );
}
