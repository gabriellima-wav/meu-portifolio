import React from "react";
import Header from "../../components/common/Header";
import MainSections from "../MainSections";

const HomePage: React.FC = () => (
  <>
    <Header />
    <main className="bg-white font-sans pt-16">
      <section
        id="home"
        className="flex flex-col lg:flex-row justify-center items-center gap-8 p-8 text-center"
      >
        <img
          src="/minha_foto.jpeg"
          alt="Minha foto"
          className="w-40 h-40 rounded-full shadow-lg object-cover"
        />
        <div className="max-w-3xl bg-white/80 rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-4">
            Bem-vindo ao meu portfólio!
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Me chamo <span className="font-semibold">Gabriel</span> e sou um
            desenvolvedor front-end apaixonado por transformar ideias em
            experiências incríveis.
          </p>
          <p className="text-lg text-gray-700">
            Explore as seções abaixo para saber mais sobre mim, meus projetos e
            como me contatar.
          </p>
        </div>
      </section>

      <MainSections />
    </main>
  </>
);

export default HomePage;
