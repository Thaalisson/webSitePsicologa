// src/sections/About.jsx
import React from 'react';
import foto from '../assets/images/Erivan_pessoa.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-white text-darkblue1 py-20 px-6 md:px-10 font-cormorant">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14">

        {/* Texto */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-chocolate">Sobre Mim</h2>
          <div className="text-lg text-darkblue2 space-y-5 leading-relaxed max-w-3xl">
            <p>
              Com <strong>21 anos de experiência em saúde mental</strong>, atuei na prevenção e tratamento de transtornos psicológicos, sempre focada na melhoria da qualidade de vida e do desempenho das pessoas.
            </p>
            <p>
              Como <strong>psicóloga e neuropsicóloga</strong>, minha abordagem combina conhecimento científico e prático para ajudar empresas a construir um ambiente mais saudável, produtivo e harmonioso.
            </p>
            <p>
              Entendo que os desafios organizacionais vão além da produtividade e impactam diretamente a saúde mental dos colaboradores. Problemas como <strong>absenteísmo, turnover, ansiedade, burnout, estresse</strong> e <strong>dificuldades na comunicação</strong> podem comprometer os resultados da empresa e a satisfação da equipe.
            </p>
            <p>
              Por isso, ofereço <strong>soluções personalizadas</strong> para promover bem-estar, engajamento e eficiência no ambiente de trabalho.
            </p>

            <div className="mt-8 p-6 border-l-4 border-darkred1 bg-darkred1/5 rounded-md shadow-sm">
              <p className="text-lg italic font-semibold text-darkred1 leading-relaxed">
                “Vamos construir juntos ambientes mais saudáveis e humanos nas empresas.”
              </p>
            </div>
          </div>
        </motion.div>

        {/* Foto */}
        <motion.div
          className="flex-1 w-full max-w-sm"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={foto}
            alt="Erivan Antonia Figueiredo"
            className="rounded-2xl shadow-xl object-cover w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
