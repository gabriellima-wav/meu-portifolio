// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-cyan-100 z-50">
    <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3">
      {/* Logo ou Nome */}
      <a href="#home" className="text-blue-900 font-bold text-xl tracking-tight hover:text-cyan-600 transition">
        Início
      </a>
      {/* Navegação */}
      <ul className="flex gap-6">
        <li>
          <a href="#about" className="text-blue-900 hover:text-cyan-600 font-medium transition">
            Sobre
          </a>
        </li>
        <li>
          <a href="#projects" className="text-blue-900 hover:text-cyan-600 font-medium transition">
            Projetos
          </a>
        </li>
        <li>
          <a href="#contact" className="text-blue-900 hover:text-cyan-600 font-medium transition">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
