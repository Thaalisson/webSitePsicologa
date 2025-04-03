// src/sections/Blog.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="blog" className="bg-[#f9f9f9] text-darkblue1 py-20 px-6 md:px-10 font-cormorant">
      <div className="max-w-5xl mx-auto space-y-12 text-center">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Publicações</h2>
          <p className="text-lg text-darkblue2 max-w-2xl mx-auto leading-relaxed">
            Acompanhe reflexões, conteúdos terapêuticos e dicas compartilhadas no Instagram. Um espaço para aprofundar o cuidado com você mesmo(a).
          </p>
        </motion.div>

        {/* Elfsight Instagram Feed Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="elfsight-app-f5c84f56-0192-47e7-ace0-a1ec32ff6435" data-elfsight-app-lazy></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
