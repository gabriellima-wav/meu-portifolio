import React from "react";
import Header from "../../components/common/Header";
import AboutPage from "../about/aboutPage";
import ContactPage from "../contact/contactPage";
import ProjectsPage from "../projects/projectsPage";
import Footer from "../../components/common/Footer";

const HomePage: React.FC = () => (
  <>
    <Header />
    <main className="bg-white font-sans pt-16">
      <section
        id="home"
        className="flex flex-col justify-center items-center p-8 text-center"
      >
        <div className="max-w-3xl bg-white/80 rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-4">
            Bem-vindo ao meu portfólio!
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Explore as seções abaixo para saber mais sobre mim, meus projetos e
            como me contatar.
          </p>
        </div>
      </section>
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </main>
  </>
);

export default HomePage;
