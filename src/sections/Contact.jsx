// src/sections/Contact.js
import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-info">
          <a href="https://wa.me/xxxxx" className="icon-link">
            <i className="fab fa-whatsapp"></i> (xx) xxxxx-xxxx
          </a>
          <a href="https://www.instagram.com/xxxxxx.psi" className="icon-link">
            <i className="fab fa-instagram"></i> @xxxxx.psi
          </a>
          <a href="https://www.pinterest.com/xxxxx" className="icon-link">
            <i className="fab fa-pinterest"></i> @xxxxxx
          </a>
          <a href="https://www.tiktok.com/@xxxxx.psi" className="icon-link">
            <i className="fab fa-tiktok"></i> @xxxxx.psi
          </a>
          <a href="mailto:contato@yasminmartinspsicologa.com" className="icon-link">
            <i className="fas fa-envelope"></i> contato@xxxxxx.com
          </a>
        </div>
        <div className="contact-form-container">
          <h2>Entre em contato ou marque uma consulta!</h2>
          <form className="contact-form">
            <input type="text" placeholder="Nome" className="input" />
            <input type="text" placeholder="Celular (WhatsApp)" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <select className="select">
              <option value="">Por qual serviço você está interessada?</option>
              <option value="online">Psicoterapia Online</option>
              <option value="presencial">Psicoterapia Presencial</option>
              <option value="consultoria">Consultoria</option>
            </select>
            <textarea placeholder="Mensagem" className="textarea" />
            <button type="submit" className="button">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
