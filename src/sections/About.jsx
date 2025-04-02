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
              Olá! Sou <span className="font-semibold">Erivan Antonia Figueiredo</span>, terapeuta familiar e de casal com uma trajetória sólida e dedicada desde 2005.
              Graduada em Psicologia pela UNISANTOS, busquei continuamente ampliar meus conhecimentos com especializações em Terapia Familiar Sistêmica e Neuropsicologia.
            </p>
            <p>
              Minha missão é auxiliar indivíduos e casais a compreenderem suas emoções, superarem desafios e fortalecerem seus relacionamentos.
              Acredito profundamente no poder do autoconhecimento e da comunicação eficaz para promover transformações significativas.
            </p>
            <p>
              Ofereço um ambiente acolhedor e seguro para crianças, adolescentes e adultos, onde cada um pode explorar seu potencial e encontrar
              caminhos para uma vida mais equilibrada e harmoniosa.
            </p>
            <div className="mt-8 p-6 border-l-4 border-darkred1 bg-darkred1/5 rounded-md shadow-sm">
              <p className="text-lg italic font-semibold text-darkred1 leading-relaxed">
                “Vamos trilhar juntos essa jornada de crescimento e descoberta!”
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
