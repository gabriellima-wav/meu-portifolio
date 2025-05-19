import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("enviando...");

  const serviceId = "default_service";
  const templateId = "template_y1r6l6p";
  const publicKey = "0B8nF8qvd-V6qKBC6";
  const payload = {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
  };

  console.log("Enviando com os dados:", { serviceId, templateId, publicKey, payload });

  emailjs
    .send(serviceId, templateId, payload, publicKey)
    .then((response) => {
      console.log("Email enviado com sucesso:", response);
      setStatus("Mensagem enviada com sucesso!");
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Erro ao enviar email:", error);
      setStatus("Erro ao enviar. Tente novamente.");
    });
};

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-8 text-center bg-gray-50">
      <div className="max-w-3xl bg-white rounded-3xl shadow-xl p-8 w-full">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Contato</h2>
        <p className="text-blue-900/90 text-lg mb-4">Me envie uma mensagem!</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-left">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
            className="p-3 border border-blue-200 rounded-xl"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            required
            className="p-3 border border-blue-200 rounded-xl"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Sua mensagem"
            required
            className="p-3 border border-blue-200 rounded-xl h-32 resize-none"
          />
          <button
            type="submit"
            className="bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-800 transition"
          >
            Enviar
          </button>
          {status && <p className="text-sm text-blue-700 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
