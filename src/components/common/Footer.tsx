import React from "react";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";

const Footer: React.FC = () => (
  <footer className="w-full border-t border-cyan-100 bg-white/80 backdrop-blur py-6 mt-8">
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 gap-2">
      <span className="text-blue-900 text-sm">
        © {new Date().getFullYear()} Gabriel. Todos os direitos reservados.
      </span>
      <div className="flex gap-4">
        <a
          href="https://github.com/gabriellima-wav"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-6 h-6 opacity-80 hover:opacity-100 transition"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/contatogabriellima/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-6 h-6 opacity-80 hover:opacity-100 transition"
          />
        </a>
      </div>
    </div>
  </footer>
);
 
export default Footer;
