import React from 'react';
import logo from '../assets/images/ERIVAN_SIMBOLO-white-rgb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faWhatsapp,
  faPinterest,
  faTiktok,
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

        {/* Redes sociais */}
        <div className="flex gap-5 text-xl">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="hover:text-darkred1 transition" />
          </a>
          <a href="https://wa.me/xxxxx" target="_blank" rel="noreferrer" title="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} className="hover:text-darkred1 transition" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" title="Pinterest">
            <FontAwesomeIcon icon={faPinterest} className="hover:text-darkred1 transition" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" title="TikTok">
            <FontAwesomeIcon icon={faTiktok} className="hover:text-darkred1 transition" />
          </a>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="border-t border-white/10"></div>

      {/* Créditos */}
      <div className="text-center py-4 text-sm text-white/70">
        Desenvolvido por <span className="text-white font-semibold">@devThalisson</span> • © {new Date().getFullYear()} Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
