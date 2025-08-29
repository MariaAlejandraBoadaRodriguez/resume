import React from "react";

export default function Footer() {
  return (
    <footer className="border-t bg-white/70">
      <div className="mx-auto max-w-6xl px-4 py-10
                      flex flex-col items-center justify-center text-center gap-2">
        <p className="font-semibold">María Alejandra Boada Rodriguez</p>
        <p className="text-sm text-slate-600">Building software with ♥ from Colombia</p>
        <p className="text-sm text-slate-600">@2025 - All Right Reserved</p>
      </div>
    </footer>
  );
}