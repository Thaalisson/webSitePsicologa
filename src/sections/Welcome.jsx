import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import bannerDesktop from '../assets/images/BannerFullHdErivan.png';
import bannerMobile from '../assets/images/ErivanWork.jpeg';

const Welcome = () => {
  const scrollToAbout = () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink =
    'https://wa.me/13981682500?text=Gostaria%20de%20realizar%20uma%20consulta.%20Vim%20pelo%20site!';

  return (
    <section
      id="home"
      className="relative w-full min-h-screen font-cormorant bg-white overflow-hidden"
    >
      {/* Imagem Desktop */}
      <img
        src={bannerDesktop}
        alt="Psicóloga Erivan Desktop"
        className="hidden sm:block absolute inset-0 w-full h-full object-cover object-[60%_center] z-0"
      />

      {/* Imagem Mobile */}
      <img
        src={bannerMobile}
        alt="Psicóloga Erivan Mobile"
        className="block sm:hidden absolute inset-0 w-full h-full object-cover object-top z-0"
      />

      {/* Overlay escura leve */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Gradiente suave no final da seção */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

      {/* Conteúdo principal */}
      <div className="relative z-30 flex flex-col justify-center items-center text-center min-h-screen px-6 text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold drop-shadow mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Seja Bem-Vindo
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-light drop-shadow mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Psicóloga Erivan
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={scrollToAbout}
            className="bg-darkred1 hover:bg-darkred2 text-white font-medium text-lg px-8 py-3 rounded-full shadow-md transition"
          >
            Saiba mais sobre mim
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-darkred1 font-medium text-lg px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Fale comigo no WhatsApp
          </a>
        </motion.div>

        {/* Seta animada */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <FontAwesomeIcon icon={faChevronDown} className="animate-bounce drop-shadow" />
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
