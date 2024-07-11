// src/sections/About.js
import React from 'react';
import '../styles/About.css';
import foto from '../assets/images/Erivan_pessoa.jpg';

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <div className="about-text">
          <h1 className="title">Sobre Mim</h1>
          <p className="description">
            Olá! Sou Erivan Antonia Figueiredo, terapeuta familiar e de casal com uma trajetória sólida e dedicada desde 2003. Graduada em Psicologia pela UNISANTOS, busquei continuamente ampliar meus conhecimentos com especializações em Terapia Familiar Sistêmica e Neuropsicologia.
            <br /><br />
            Minha missão é auxiliar indivíduos e casais a compreenderem suas emoções, superarem desafios e fortalecerem seus relacionamentos. Acredito profundamente no poder do autoconhecimento e da comunicação eficaz para promover transformações significativas.
            <br /><br />
            Ofereço um ambiente acolhedor e seguro para crianças, adolescentes e adultos, onde cada um pode explorar seu potencial e encontrar caminhos para uma vida mais equilibrada e harmoniosa.
            <br /><br />
            Vamos trilhar juntos essa jornada de crescimento e descoberta!
          </p>
        </div>
        <div className="about-photo">
          <img src={foto} alt="Erivan Antonia Figueiredo" />
        </div>
      </div>
    </section>
  );
};

export default About;
