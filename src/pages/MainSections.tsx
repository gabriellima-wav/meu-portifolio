import React from "react";
import Footer from "../components/common/Footer";
import AboutPage from "./about/AboutPage";
import ContactPage from "./contact/ContactPage";
import ProjectsPage from "./projects/ProjectsPage";

const MainSections: React.FC = () => {
  return (
    <>
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
};

export default MainSections;
