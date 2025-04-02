// src/sections/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-white text-darkblue1 py-20 px-6 md:px-10 font-cormorant">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">

        {/* Redes sociais / Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-darkblue1 mb-4">Contato</h2>
          <p className="text-lg text-darkblue2 leading-relaxed">
            Fico feliz em receber sua mensagem! Você pode entrar em contato diretamente pelas redes sociais abaixo ou preencher o formulário ao lado.
          </p>

          <div className="space-y-4 text-lg">
            <a href="https://wa.me/xxxxx" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-darkblue2 hover:text-darkred1 transition">
              <i className="fab fa-whatsapp text-2xl" /> (xx) xxxxx-xxxx
            </a>
            <a href="https://www.instagram.com/xxxxx.psi" target="_blank"  rel="noreferrer" className="flex items-center gap-3 text-darkblue2 hover:text-darkred1 transition">
              <i className="fab fa-instagram text-2xl" /> @xxxxx.psi
            </a>
            <a href="mailto:contato@xxxxx.com" target="_blank"  rel="noreferrer" className="flex items-center gap-3 text-darkblue2 hover:text-darkred1 transition">
              <i className="fas fa-envelope text-2xl" /> contato@xxxxx.com
            </a>
            <a href="https://www.pinterest.com/xxxxx" target="_blank" rel="noreferrer"  className="flex items-center gap-3 text-darkblue2 hover:text-darkred1 transition">
              <i className="fab fa-pinterest text-2xl" /> @xxxxx
            </a>
            <a href="https://www.tiktok.com/@xxxxx.psi" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-darkblue2 hover:text-darkred1 transition">
              <i className="fab fa-tiktok text-2xl" /> @xxxxx.psi
            </a>
          </div>
        </motion.div>

        {/* Formulário */}
        <motion.form
          className="space-y-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-2xl font-semibold mb-2">Marque uma consulta</h3>

          <input
            type="text"
            placeholder="Nome"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-darkred1"
          />

          <input
            type="text"
            placeholder="Celular (WhatsApp)"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-darkred1"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-darkred1"
          />

          <select className="w-full border border-gray-300 rounded-md p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-darkred1">
            <option value="">Por qual serviço você está interessada?</option>
            <option value="online">Psicoterapia Online</option>
            <option value="presencial">Psicoterapia Presencial</option>
            <option value="consultoria">Consultoria</option>
          </select>

          <textarea
            placeholder="Mensagem"
            rows="4"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-darkred1"
          />

          <button
            type="submit"
            className="bg-darkred1 hover:bg-darkred2 text-white px-6 py-3 rounded-md text-lg font-semibold transition shadow-md"
          >
            Enviar Mensagem
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
