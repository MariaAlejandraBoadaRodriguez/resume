import React from "react";

export default function LinkBadge({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        `inline-flex items-center justify-center rounded-full
         border border-slate-300 px-5 py-2 text-sm font-medium
         text-slate-800 bg-white transition-colors duration-200
         hover:bg-black hover:text-white hover:border-black
         focus:outline-none focus:ring-2 focus:ring-black/20 ` + className
      }
    >
      {children}
    </a>
  );
}
