// src/components/Welcome.jsx
import React from 'react';
import { motion } from 'framer-motion';
import videoSrc from '../assets/videos/peaceVideo.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
  const handleButtonClick = () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden font-cormorant">
      {/* Vídeo de fundo */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay em gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 z-10"></div>

      {/* Conteúdo centralizado */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Seja Bem-Vindo
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-4xl font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Psicóloga Erivan
        </motion.h2>

        <motion.button
          onClick={handleButtonClick}
          className="bg-darkred1 hover:bg-darkred2 text-white font-semibold text-lg md:text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          QUEM SOU EU
        </motion.button>

        {/* Seta animada para scroll */}
        <motion.div
          className="mt-12 text-white text-3xl"
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
