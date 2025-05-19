import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../components/sections/Projects/projects";

const ProjectsPage: React.FC = () => (
  <section
    id="projects"
    className="min-h-screen flex flex-col items-center p-8 bg-gray-50 text-center"
  >
    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl p-10 border border-blue-100">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Meus Projetos</h2>
      <p className="text-blue-900/90 text-lg mb-10">
        Aqui estão alguns dos meus principais projetos. Clique para ver o código
        ou uma demonstração.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md p-6 text-left border border-cyan-600 flex flex-col justify-between"
          >
            <div>
              {project.image && (
                <img
                  src={project.image}
                  alt={`Imagem do projeto ${project.title}`}
                  className="w-full h-48 object-cover rounded-lg mb-4 border"
                />
              )}

              <h3 className="text-xl font-semibold text-cyan-600">
                {project.title}
              </h3>
              <p className="text-gray-700 mt-2">{project.description}</p>

              {project.techs && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-100 text-cyan-800 px-2 py-1 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-4 mt-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:underline flex items-center gap-1"
                >
                  <FaGithub /> Código
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:underline flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsPage;
