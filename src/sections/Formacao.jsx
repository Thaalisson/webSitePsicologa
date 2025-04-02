// src/sections/Formacao.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faPeopleRoof,
  faCertificate,
  faBookOpen,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';

const cursos = [
  {
    titulo: 'Terapia Cognitivo-Comportamental',
    subtitulo: 'Pós-graduação 2016 - 2017',
    icon: faBrain,
  },
  {
    titulo: 'Casais e Família – Sistêmica Breve',
    subtitulo: 'Especialização 2013 - 2014',
    icon: faPeopleRoof,
  },
  {
    titulo: 'Terapia Familiar Sistêmica',
    subtitulo: 'Curso de Formação 2010 - 2012',
    icon: faCertificate,
  },
  {
    titulo: 'Neuropsicologia – Instituto Pieron',
    subtitulo: 'Formação 2014',
    icon: faBrain,
  },
  {
    titulo: 'Psicologia Institucional – UNIG',
    subtitulo: 'Pós-graduação 2007',
    icon: faBookOpen,
  },
  {
    titulo: 'Universidade Católica de Santos',
    subtitulo: 'Licenciatura 2000 - 2004',
    icon: faUniversity,
  },
];

const Formacao = () => {
  return (
    <section id="formacao" className="bg-white text-darkblue1 py-24 px-6 md:px-10 font-cormorant">
      <div className="max-w-7xl mx-auto space-y-16 text-center">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-lg text-darkblue2">
            Uma trajetória dedicada ao conhecimento e à prática clínica.
          </p>
        </motion.div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {cursos.map((curso, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-3 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Ícone */}
              <div className="w-16 h-16 flex items-center justify-center bg-darkred1 text-white rounded-full shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-darkblue1">
                <FontAwesomeIcon icon={curso.icon} size="lg" aria-label={`Ícone de ${curso.titulo}`} />
              </div>

              {/* Título */}
              <h3 className="text-lg font-semibold group-hover:text-darkblue1 transition-colors">
                {curso.titulo}
              </h3>

              {/* Subtítulo */}
              <p className="text-sm text-gray-500">{curso.subtitulo}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formacao;
