// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useScrollSpy from '../hooks/useScrollSpy';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = [
    'home',
    'about',
    'formacao',
    'corporate',
    'work',
    'blog',
    'videos',
    'contact'
  ];
  const activeSection = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? 'bg-darkblue1/90 backdrop-blur-md shadow-md' : 'bg-darkblue1'}`}>
      
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo da Instituição" className="h-12 md:h-14 object-contain" />
        </div>

        {/* Botão Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl ml-auto"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
        </button>

        {/* Menu */}
        <ul className={`absolute md:static top-full left-0 w-full md:w-auto
                        bg-darkblue1 md:bg-transparent px-6 md:px-0 pt-0 md:py-0 
                        flex flex-col md:flex-row items-center gap-4 lg:gap-6
                        font-cormorant text-base md:text-lg ml-auto
                        transition-all duration-300 
                        ${menuOpen ? 'flex' : 'hidden md:flex'}`}>

          {[
            { href: '#home',       icon: 'fa-house',          label: 'Início' },
            { href: '#about',      icon: 'fa-user',           label: 'Sobre Mim' },
            { href: '#formacao',   icon: 'fa-graduation-cap', label: 'Formação' },
            { href: '#corporate',  icon: 'fa-briefcase',      label: 'Corporativo' },
            { href: '#work',       icon: 'fa-heart',          label: 'Soluções Terapêuticas' },
            { href: '#blog',       icon: 'fa-book-open',      label: 'Publicações' },
            { href: '#videos',     icon: 'fa-video',          label: 'Mídia' },
            { href: '#contact',    icon: 'fa-envelope',       label: 'Contato' }
          ].map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-200
                  ${activeSection === item.href.replace('#', '') 
                    ? 'text-[#e98c8b] font-semibold' 
                    : 'text-white hover:text-[#e98c8b]'}`}
              >
                <i className={`fa-solid ${item.icon} fa-xs`} aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
