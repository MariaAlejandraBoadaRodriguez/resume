import React from "react";
import "../../styles/navbar.css"; // <- importa el CSS separado

export default function NavBar() {
  return (
    // Puedes ajustar la altura del header cambiando --nav-h
    <header className="navbar" style={{ "--nav-h": "72px" }}>
      <div className="navbar__container">
        <nav className="navbar__links" aria-label="Secciones del sitio">
          <a href="#home" className="navbar__link">Home</a>
          <a href="#habilidades" className="navbar__link">About Me</a>
          <a href="#proyectos" className="navbar__link">Projects</a>
          <a href="#educacion" className="navbar__link">Education</a>
          <a href="#certificaciones" className="navbar__link">Certifications</a>
          <a href="#contacto" className="navbar__link">Contact</a>
        </nav>

        {/* Espaciador opcional para mantener justify-between si luego agregas algo a la derecha */}
        <div className="navbar__spacer" />
      </div>
    </header>
  );
}
