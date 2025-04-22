import React from "react";

const ProjectsPage: React.FC = () => (
  <section id="projects" className="min-h-screen flex flex-col justify-center items-center p-8 text-center">
    <div className="max-w-3xl bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Meus Projetos</h2>
      <p className="text-blue-900/90 text-lg mb-4">
        Aqui você pode listar seus principais projetos com descrições e links.
      </p>
      {/* Exemplo de projeto */}
      <div className="border border-cyan-600 rounded-lg p-4 mb-4">
        <h3 className="text-xl font-semibold text-cyan-600">Projeto Exemplo</h3>
        <p className="text-blue-900/80">Descrição do projeto.</p>
        <a href="#" className="text-cyan-600 hover:underline">Ver mais</a>
      </div>
    </div>
  </section>
);

export default ProjectsPage;
