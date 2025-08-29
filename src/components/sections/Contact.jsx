import React, { useMemo } from "react";
import Section from "../ui/Section";
import "../../styles/contact.css";

export default function Contact() {
  // URL a la que vuelve después de enviar (opcional)
  const nextUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const { origin, pathname } = window.location;
    return `${origin}${pathname}?sent=1#contacto`;
  }, []);

  return (
    <Section id="contacto" title="Contacto" subtitle="¡Hablemos!" className="contact">
      <form
        className="contact__form"
        action="https://formsubmit.co/mariaalejandraboadarodriguez@gmail.com"
        method="POST"
      >
        {/* Config FormSubmit */}
        <input type="hidden" name="_subject" value="Nuevo mensaje desde el CV" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={nextUrl} />
        {/* Honeypot anti-spam */}
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

        <div className="row">
          <input name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
        </div>

        <input name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" rows={8} required />

        <button type="submit" className="btn">SEND</button>
      </form>

      {/* (Opcional) Mensaje de éxito al volver con ?sent=1 */}
      {typeof window !== "undefined" &&
        new URLSearchParams(window.location.search).get("sent") === "1" && (
          <p className="msg ok">¡Gracias! Tu mensaje fue enviado correctamente.</p>
        )}
    </Section>
  );
}
