import React from "react";

export default function Section({ id, title, children, subtitle }) {
    return (
        <section id={id} className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
                {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
                <div className="mt-4 h-1 w-24 rounded bg-blue-600" />
            </div>
            {children}
        </section>
    );
}