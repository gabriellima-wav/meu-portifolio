// src/components/sections/Contato.tsx
import React from "react";

const ContactPage: React.FC = () => (
  <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-8 text-center bg-gray-50">
    <div className="max-w-3xl bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Contato</h2>
      <p className="text-blue-900/90 text-lg mb-4">
        Formulário de contato ou informações para conexão.
      </p>
      {/* Aqui você pode adicionar um formulário real */}
    </div>
  </section>
);

export default ContactPage;
