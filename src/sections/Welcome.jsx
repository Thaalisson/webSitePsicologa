import React from 'react';
import { motion } from 'framer-motion';
import videoSrc from '../assets/videos/peaceVideo.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
  const scrollToAbout = () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = "https://wa.me/13981682500?text=Gostaria%20de%20realizar%20uma%20consulta.%20Vim%20pelo%20site!";

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden font-cormorant">
      {/* Vídeo de fundo */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 z-10"></div>

      {/* Conteúdo */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Seja Bem-Vindo
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-5xl font-light mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Psicóloga Erivan
        </motion.h2>

        {/* Botões */}
        <motion.div
          className="flex flex-col md:flex-row gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={scrollToAbout}
            className="bg-darkred1 hover:bg-darkred2 text-white font-semibold text-xl px-10 py-4 rounded-full shadow-lg transition-all duration-300"
          >
            Saiba mais sobre mim
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="bg-darkred1 hover:bg-darkred2 text-white font-semibold text-xl px-10 py-4 rounded-full shadow-lg transition-all duration-300"
          >
            Fale comigo no WhatsApp
          </a>
        </motion.div>

        {/* Seta animada */}
        <motion.div
          className="mt-16 text-white text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <FontAwesomeIcon icon={faChevronDown} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
