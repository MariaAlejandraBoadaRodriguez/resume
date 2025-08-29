import React from "react";
import { WHATSAPP_URL } from "../../constants";

export default function NavBar() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <a href="#inicio" className="font-bold text-xl md:text-2xl tracking-tight">María Alejandra Boada Rodriguez</a>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#sobre-mi" className="hover:text-blue-700">Sobre mí</a>
                    <a href="#habilidades" className="hover:text-blue-700">Habilidades</a>
                    <a href="#proyectos" className="hover:text-blue-700">Proyectos</a>
                    <a href="#educacion" className="hover:text-blue-700">Educación</a>
                    <a href="#certificaciones" className="hover:text-blue-700">Certificaciones</a>
                    <a href="#contacto" className="hover:text-blue-700">Contacto</a>
                </nav>            
                <div className="flex items-center gap-3">
                </div>
            </div>
        </header>
    );
}