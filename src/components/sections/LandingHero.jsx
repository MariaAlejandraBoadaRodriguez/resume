import React from "react";
import { WHATSAPP_URL } from "../../constants";
import foto from "../../images/foto.png";
import cvPdf from "../../pdf/cv.pdf"; 
import "../../styles/landing-hero.css"; // importa los estilos de esta sección

export default function LandingHero() {
  return (
    <section id="home" className="landing-hero">
      <div className="landing-hero__container">
        {/* Columna izquierda */}
        <div className="landing-hero__left">
          <h1 className="landing-hero__title">
            Hola, <br />
            <span className="landing-hero__im">soy</span>{" "}
            <span className="landing-hero__name">María Alejandra Boada</span>
          </h1>

          <p className="landing-hero__subtitle">
            Full-Stack Developer · Ciberseguridad · Computación Cuántica
          </p>

          {/* Socials */}
          <div className="landing-hero__socials">

            <a
              className="social-btn"
              href="https://www.instagram.com/invites/contact/?igsh=1jo940jfn4ds&utm_content=xyx4yu5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              >
              {/* Instagram SVG */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M7 2h10c2.76 0 5 2.24 5 5v10c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V7c0-2.76 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3v10c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3H7zm5 2.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"
                />
              </svg>
            </a>


            <a
              className="social-btn"
              href="https://www.linkedin.com/in/mar%C3%ADa-alejandra-boada-rodriguez/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              >
              {/* LinkedIn SVG */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8 8.5h3.83v1.98h.06c.53-.95 1.83-1.98 3.77-1.98 4.04 0 4.79 2.66 4.79 6.11V23h-4v-6.47c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.67-2.48 3.41V23H8V8.5z"/>
              </svg>
            </a>

            <a
              className="social-btn"
              href="https://github.com/MariaAlejandraBoadaRodriguez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              {/* GitHub SVG */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.8.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.9 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.78.84 1.24 1.9 1.24 3.22 0 4.58-2.8 5.6-5.47 5.89.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 .5z"/>
              </svg>
            </a>

             {/* CV (PDF) */}
            <a
              className="social-btn"
              href={cvPdf}
              download="CV_Maria_Alejandra_Boada_Rodriguez.pdf"
              aria-label="Descargar CV en PDF"
              title="Descargar CV (PDF)"
            >
              {/* icono de descarga */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L11 12.59V4a1 1 0 0 1 1-1zm-7 14a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H5z"/>
              </svg>
            </a> 

          </div>
        </div>

        {/* Columna derecha: círculo animado con la foto */}
        <div className="landing-hero__right">
          <div className="coin" aria-hidden="true">
            <div className="coin__face coin__face--front">
              <img src={foto} alt="María Alejandra" />
            </div>
            {/* cara trasera opcional (mismo color) */}
            <div className="coin__face coin__face--back">
              <img src={foto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
