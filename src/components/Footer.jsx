import React from 'react';
import logo from '../assets/images/ERIVAN_SIMBOLO-white-rgb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-darkblue1 text-white font-cormorant">
      {/* Bloco principal */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Logo e nome */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo Erivan" className="h-10" />
          <span className="text-lg font-semibold tracking-wide">
            Psicóloga Erivan
          </span>
        </div>

        {/* Redes sociais e telefone */}
        <div className="flex flex-wrap items-center gap-5 text-xl">
          <a
            href="https://www.instagram.com/erivanfigueredo.psi/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="hover:text-darkred1 transition" />
          </a>
          <a
            href="https://wa.me/13981682500?text=Gostaria%20de%20realizar%20uma%20consulta.%20Vim%20pelo%20site!"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="hover:text-darkred1 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/erivan-figueredo-472935347/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="hover:text-darkred1 transition" />
          </a>
          <a
            href="https://www.facebook.com/terapeutafamiliarecasal"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} className="hover:text-darkred1 transition" />
          </a>

        </div>
      </div>

      {/* Linha separadora */}
      <div className="border-t border-white/10"></div>

      <div className="text-center py-4 text-sm text-white/70">
        Desenvolvido por{' '}
        <a
          href="https://www.linkedin.com/in/thalissonpereira01/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold hover:underline hover:text-[#e98c8b] transition-colors"
        >
          @devThalisson
        </a>{' '}
        • © {new Date().getFullYear()} Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
