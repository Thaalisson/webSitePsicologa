// src/sections/Work.jsx
import React from 'react';
import foto from '../assets/images/ErivanWork.jpeg';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase,faPeopleRoof, faHeart, faBrain } from '@fortawesome/free-solid-svg-icons'; // Ícones principais

const Work = () => {
  const cards = [
    {
      title: 'Psicologia Organizacional',
      text: 'Intervenções focadas na saúde emocional de equipes, clima organizacional e performance corporativa.',
      icon: faBriefcase // ícone corporativo
    },
    {
      title: 'Neuropsicologia',
      text: 'Avaliação e intervenção em questões cognitivas e emocionais.',
      icon: faBrain, // cérebro
    },
    {
      title: 'Terapia Familiar Sistêmica',
      text: 'Facilitando a comunicação e resolução de conflitos dentro da família.',
      icon: faPeopleRoof, // família
    },
    {
      title: 'Terapia de Casal',
      text: 'Apoiando casais a fortalecerem seus laços e superarem crises.',
      icon: faHeart, // coração
    },
 
  ];

  return (
    <section id="work" className="bg-white text-darkblue1 py-20 px-6 md:px-10 font-cormorant">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Título */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Soluções Terapêuticas</h1>
          <p className="text-lg text-darkblue2 leading-relaxed">
            Como terapeuta familiar e de casal, meu trabalho é guiado pela empatia, ética e um profundo compromisso com o bem-estar de meus clientes...
          </p>
        </div>

        {/* Cards + imagem */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                className="bg-darkred1 text-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition"
              >
                <FontAwesomeIcon icon={card.icon} className="text-3xl mb-3 text-white" />
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Imagem */}
          <div className="w-full max-w-sm flex-shrink-0">
            <img src={foto} alt="Erivan Antonia Figueiredo" className="rounded-xl shadow-xl object-cover w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
