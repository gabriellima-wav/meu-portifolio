import React from "react";

const AboutPage: React.FC = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col justify-center items-center p-8 text-center bg-gray-50"
  >
    <div className="max-w-3xl bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Sobre Mim</h2>
      <p className="text-blue-900/90 text-lg">
        Aqui você pode colocar informações sobre sua trajetória, habilidades
        técnicas e experiência profissional.
      </p>
    </div>
  </section>
);

export default AboutPage;
