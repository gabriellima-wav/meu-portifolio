import React from "react";
import Timeline from "../../components/sections/TimeLine";

const AboutPage: React.FC = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col items-center p-8 bg-gray-50"
  >
    <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
      Minha Trajetória
    </h2>
    <Timeline />
  </section>
);

export default AboutPage;
