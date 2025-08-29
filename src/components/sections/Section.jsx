import React from "react";
import "../../styles/section.css";

/**
 * Section genérico.
 * - full=true hace que la sección ocupe 100% del alto de la pantalla
 *   (restando la altura del navbar si existe).
 * - snap=true alinea para scroll-snap (opcional).
 */
export default function Section({
  id,
  title,
  subtitle,
  children,
  full = true,
  snap = true,
  className = "",
}) {
  return (
    <section
      id={id}
      className={[
        "section",
        full && "section--full",
        snap && "section--snap",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {(title || subtitle) && (
        <header className="section__head">
          {title && <h2 className="section__title">{title}</h2>}
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
          <span className="section__bar" />
        </header>
      )}
      {children}
    </section>
  );
}
