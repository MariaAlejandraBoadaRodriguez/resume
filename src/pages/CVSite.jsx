// src/pages/CVSite.jsx
import React from "react";
import NavBar from "../components/layout/NavBar";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function CVSite() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
