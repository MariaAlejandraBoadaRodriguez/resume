import React from "react";

export default function Card({ children, className = "" }) {
    return (
    <div className={`rounded-2xl border bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition ${className}`}>
        {children}
    </div>
    );
}