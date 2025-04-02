// src/sections/Videos.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Videos = () => {
  return (
    <section id="videos" className="bg-[#f9f9f9] text-darkblue1 py-20 px-6 md:px-10 font-cormorant">
      <div className="max-w-5xl mx-auto text-center space-y-12">

        {/* Título e descrição */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Vídeos</h2>
          <p className="text-lg text-darkblue2 max-w-2xl mx-auto leading-relaxed">
            Conteúdos audiovisuais que reforçam a prática clínica, abordam saúde mental e fortalecem o vínculo com o público.
          </p>
        </motion.div>

        {/* Vídeo YouTube embed responsivo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden w-full pt-[56.25%] rounded-xl shadow-2xl"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Vídeo da Psicóloga Erivan"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Videos;
