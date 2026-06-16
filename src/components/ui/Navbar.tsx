"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { NAV_LINKS, WA_LINK } from "@/lib/data";

const links = NAV_LINKS;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1B2E4B] shadow-lg" : "bg-[#1B2E4B]/95"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#2E7D52] rounded-lg flex items-center justify-center group-hover:bg-[#E8610A] transition-colors">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-sm sm:text-base leading-tight">
              Milena Rengifo
              <span className="block text-[#2E7D52] text-xs font-normal">Especialista SST</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8610A] hover:bg-[#cf540a] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white flex items-center justify-center min-w-[44px] min-h-[44px] cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1B2E4B] border-t border-white/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-300 hover:text-white text-sm font-medium border-b border-white/5 cursor-pointer transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center bg-[#E8610A] hover:bg-[#cf540a] text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors cursor-pointer"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
}
