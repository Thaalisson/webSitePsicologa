// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Importa o CSS do Footer
import logo from '../assets/images/ERIVAN_SIMBOLO-white-rgb.png';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa o CSS do Font Awesome

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="logo-container">
        <img src={logo} alt="Psicóloga Erivan" className="footer-logo" />
        <p className="footer-text">Psicóloga Erivan</p>
      </div>
      <div className="info-container">
        <a href="https://www.instagram.com" className="icon-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.whatsapp.com"  className="icon-link">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <div className="footer-bottom-text">
        <p>Desenvolvido por @devThalisson</p>
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
