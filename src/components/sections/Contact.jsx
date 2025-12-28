import React, { useMemo, useEffect, useRef, useState } from "react";
import Section from "../ui/Section";
import "../../styles/contact.css";

export default function Contact() {
  // URL a la que vuelve después de enviar (opcional)
  const nextUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const { origin, pathname } = window.location;
    return `${origin}${pathname}?sent=1#contacto`;
  }, []);

  // --- SOLO PARA EL MENSAJE (overlay + confeti) ---
  const [showToast, setShowToast] = useState(false);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  // ...
  // Confeti visible en toda la pantalla (canvas) – no toca el layout del form
  const runConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return () => {};

    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;   // sin dpr para evitar escalado raro
      canvas.height = window.innerHeight;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#f59e0b", "#f6c342", "#1d4ed8", "#10b981", "#ef4444"];
    const COUNT = Math.min(220, Math.floor(window.innerWidth / 6));

    const parts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.3,
      size: 8 + Math.random() * 12,
      shape: Math.random() < 0.5 ? "rect" : "circle",
      color: colors[(Math.random() * colors.length) | 0],
      vx: -3 + Math.random() * 6,
      vy: 2 + Math.random() * 5,
      rot: Math.random() * Math.PI,
      vr: -0.3 + Math.random() * 0.6,
    }));

    let start;
    const tick = (t) => {
      if (!start) start = t;
      const elapsed = t - start;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      parts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravedad suave
        p.rot += p.vr;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      if (elapsed < 2500) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  };
// ...


  // Detecta ?sent=1, muestra overlay y lo oculta solo
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setShowToast(true);
      const stopConfetti = runConfetti();

      const hide = setTimeout(() => {
        setShowToast(false);
        // limpia ?sent=1 de la URL
        const url = new URL(window.location.href);
        url.searchParams.delete("sent");
        window.history.replaceState({}, "", url.toString());
        if (stopConfetti) stopConfetti();
      }, 2600);

      return () => {
        clearTimeout(hide);
        if (stopConfetti) stopConfetti();
      };
    }
  }, []);
  // --- FIN CAMBIOS MENSAJE ---

  return (
    <Section id="contacto" title="contact" subtitle="¡Let's talk!" className="contact">
      <form
        className="contact__form"
        action="https://formsubmit.co/mboadarodriguez7@gmail.com"
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

      {/* Reemplaza el <p className="msg ok">... por este overlay */}
      {showToast && (
        <div className="confetti-overlay" role="status" aria-live="polite">
          <canvas ref={canvasRef} className="confetti-canvas" />
          <div className="toast toast--ok">Thank you! Your message was sent successfully.</div>
        </div>
      )}
    </Section>
  );
}
