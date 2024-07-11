// src/sections/Work.js
import React, { useEffect } from 'react';
import '../styles/Work.css';
import foto from '../assets/images/ErivanWork.jpeg';

const Work = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section className="work-container" id="work">
      <div className="text-container fade-in">
        <h1>Meu Trabalho</h1>
        <p>
          Como terapeuta familiar e de casal, meu trabalho é guiado pela empatia, ética e um profundo compromisso com o bem-estar de meus clientes. Utilizo abordagens personalizadas e fundamentadas em terapias baseadas em evidências para ajudar famílias e casais a navegar por suas dificuldades e alcançar harmonia e entendimento mútuo.
        </p>
      </div>
      <div className="cards-photo-container">
        <div className="cards-container">
          <div className="card fade-in">
            <h3>Terapia Familiar Sistêmica</h3>
            <p>Facilitando a comunicação e resolução de conflitos dentro da família.</p>
          </div>
          <div className="card fade-in">
            <h3>Terapia de Casal</h3>
            <p>Apoiando casais a fortalecerem seus laços e superarem crises.</p>
          </div>
          <div className="card fade-in">
            <h3>Neuropsicologia</h3>
            <p>Avaliação e intervenção em questões cognitivas e emocionais.</p>
          </div>
        </div>
        <div className="work-photo-container">
          <img src={foto} alt="Erivan Antonia Figueiredo" className="work-photo" />
        </div>
      </div>
      <div className="text-container fade-in">
        <p>
          Crio um espaço seguro e acolhedor para que meus clientes possam explorar suas emoções, desenvolver habilidades de enfrentamento e promover mudanças positivas em suas vidas. Cada sessão é planejada para atender às necessidades individuais e coletivas, garantindo um atendimento personalizado e eficaz. Vamos trabalhar juntos para construir relações mais saudáveis e felizes!
        </p>
      </div>
    </section>
  );
};

export default Work;
