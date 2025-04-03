// src/sections/CorporateImpact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBrain, FaComments, FaChartLine, FaHandshake } from 'react-icons/fa';
import anaCostaLogo from '../assets/images/ana-costa.png';
import correiosLogo from '../assets/images/correios.png';
import ObjetivoLogo from '../assets/images/objetivoEscola.png';
import oswaldoRamosLogo from '../assets/images/oswaldo-ramos.png';
import itejLogo from '../assets/images/itej.png';
import Logo_ND_2020 from '../assets/images/Logo_ND_2020.png';


const problems = [
    {
        title: 'Absenteísmo e Turnover',
        desc: 'Reduzir faltas e rotatividade, promovendo maior satisfação e engajamento.',
        icon: <FaUsers />,
    },
    {
        title: 'Estresse e Ansiedade',
        desc: 'Implementar estratégias para gestão emocional e prevenção de burnout.',
        icon: <FaBrain />,
    },
    {
        title: 'Falha de Comunicação',
        desc: 'Melhorar a interação entre equipes, fortalecendo lideranças e promovendo um clima organizacional positivo.',
        icon: <FaComments />,
    },
    {
        title: 'Baixa Produtividade',
        desc: 'Ajudar colaboradores a desenvolver habilidades emocionais para um melhor desempenho.',
        icon: <FaChartLine />,
    },
    {
        title: 'Gestão de Conflitos',
        desc: 'Ensinar técnicas para lidar com desafios interpessoais e fortalecer o trabalho em equipe.',
        icon: <FaHandshake />,
    },
];

const services = [
    {
        category: 'Palestras e Workshops',
        items: [
            'Inteligência emocional no ambiente corporativo',
            'Prevenção do estresse e burnout',
            'Liderança e comunicação eficaz',
            'Qualidade de vida e produtividade no trabalho',
        ],
    },
    {
        category: 'Treinamentos Personalizados',
        items: [
            'Desenvolvimento de habilidades emocionais e comportamentais',
            'Fortalecimento da liderança e gestão de equipes',
            'Programa de bem-estar corporativo',
        ],
    },
    {
        category: 'Consultoria em Saúde Mental',
        items: [
            'Diagnóstico organizacional e intervenção estratégica',
            'Criação de políticas para saúde mental no trabalho',
            'Acompanhamento e suporte para gestores e equipes',
        ],
    },
];

const CorporateImpact = () => {
    return (
        <section id="corporate" className="bg-white text-darkblue1 py-20 px-6 md:px-12 font-cormorant">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Header */}
                <div className="text-center">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-darkred1 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Impacto Corporativo
                    </motion.h2>
                    <p className="text-xl text-darkblue2">
                        Soluções psicológicas aplicadas ao mundo empresarial com foco em produtividade, bem-estar e cultura organizacional.
                    </p>
                </div>

                {/* Problemas resolvidos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all border-t-4 border-darkred1"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-3xl text-darkred1 mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Serviços */}
                <div className="space-y-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-darkred1 text-center">Soluções Oferecidas</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                className="bg-darkred1 text-white rounded-lg p-6 space-y-4 hover:bg-darkred2 transition"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * i, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-bold mb-2 border-b border-white pb-1">{service.category}</h3>
                                <ul className="space-y-2 list-disc list-inside text-base leading-relaxed">
                                    {service.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Logo de empresas com nome abaixo */}
                <div className="text-center pt-16">
                    <h4 className="text-xl text-darkblue2 font-medium mb-6">
                        Empresas nas quais ofereci serviços psicológicos e de consultoria
                    </h4>
                    <div className="flex flex-wrap items-center justify-center gap-12">
                        <div className="flex flex-col items-center">
                            <img src={anaCostaLogo} alt="Hospital Ana Costa" className="h-12 object-contain" />
                            <span className="mt-2 text-sm text-darkblue2 font-light">Hospital Ana Costa</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={correiosLogo} alt="Correios" className="h-12 object-contain" />
                            <span className="mt-2 text-sm text-darkblue2 font-light">Correios</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={ObjetivoLogo} alt="Colégio Objetivo" className="h-12 object-contain" />
                            <span className="mt-2 text-sm text-darkblue2 font-light">Colégio Objetivo</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={oswaldoRamosLogo} alt="Fundação Oswaldo Ramos" className="h-12 object-contain" />
                            <span className="mt-2 text-sm text-darkblue2 font-light text-center">Fundação Oswaldo Ramos</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={itejLogo} alt="ITEJ" className="h-12 object-contain" />
                            <span className="mt-2 text-sm text-darkblue2 font-light">ITEJ</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={Logo_ND_2020} alt="Logo_ND_2020" className="h-12 object-contain" />
                            <span className="mt-2 text-sm text-darkblue2 font-light">Notre Dame</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateImpact;
