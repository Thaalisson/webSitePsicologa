// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import '../styles/NavbarDesktop.css';
import '../styles/NavbarResponsive.css';
import logo from '../assets/images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}><i className="fa-solid fa-house-user"></i> Bem-Vindo</a></li>
          <li><a href="#about" onClick={toggleMenu}><i className="fa-solid fa-brain"></i> Sobre mim</a></li>   
          <li><a href="#work" onClick={toggleMenu}><i className="fas fa-briefcase"></i> Meu Trabalho</a></li>             
          <li className="navbar-logo">
            <img src={logo} alt="Logo" />
          </li>
          <li><a href="#blog" onClick={toggleMenu}><i className="fa-solid fa-book-open-reader"></i> Blog</a></li>
          <li><a href="#videos" onClick={toggleMenu}><i className="fa-solid fa-display"></i> Midia</a></li>
          <li><a href="#contact" onClick={toggleMenu}><i className="fas fa-envelope"></i> Contatos</a></li>
        </ul>
        <button className="navbar-button" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
