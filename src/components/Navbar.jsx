  import React, { useState, useEffect } from 'react';
  import logo from '../assets/images/ERIVAN_NOME-white-rgb.png';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import useScrollSpy from '../hooks/useScrollSpy';
  import { Menu } from '@headlessui/react';
  import { AnimatePresence, motion } from 'framer-motion';

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  };

  const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const sectionIds = [
      'home', 'about', 'formacao',
      'corporate', 'work',
      'blog', 'videos', 'contact'
    ];
    const activeSection = useScrollSpy(sectionIds, 100);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const renderLink = (href, icon, label) => (
      <a
        href={href}
        onClick={() => setMenuOpen(false)}
        className={`flex items-center gap-2 px-2 py-1 rounded-md transition-all duration-200
          ${activeSection === href.replace('#', '')
            ? 'text-darkred2 font-semibold'
            : 'text-white hover:text-darkred2'}`}
      >
        <i className={`fa-solid ${icon} fa-sm`} aria-hidden="true" />
        <span>{label}</span>
      </a>
    );

    return (
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? 'bg-darkblue1/90 backdrop-blur-md shadow-md' : 'bg-darkblue1'}`}>

        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative z-50">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo da Instituição" className="h-10 md:h-12 object-contain" />
          </div>

          {/* Botão Hamburguer */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-white text-2xl"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center gap-6 font-cormorant text-lg">
            <li>{renderLink('#home', 'fa-house', 'Início')}</li>

            {/* Dropdown: Sobre */}
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="flex items-center gap-2 text-white hover:text-darkred2">
                  <i className="fa-solid fa-user-group fa-sm" /> Sobre
                  <i className="fa-solid fa-caret-down text-sm" />
                </Menu.Button>
                <Menu.Items className="absolute left-0 mt-2 w-48 bg-darkblue1 rounded-md shadow-lg ring-1 ring-black/5 z-50">
                  <div className="px-4 py-2 space-y-1">
                    <Menu.Item>{() => renderLink('#about', 'fa-user', 'Sobre Mim')}</Menu.Item>
                    <Menu.Item>{() => renderLink('#formacao', 'fa-graduation-cap', 'Formação')}</Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </li>

            {/* Dropdown: Serviços */}
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="flex items-center gap-2 text-white hover:text-darkred2">
                  <i className="fa-solid fa-hand-holding-heart fa-sm" /> Serviços
                  <i className="fa-solid fa-caret-down text-sm" />
                </Menu.Button>
                <Menu.Items className="absolute left-0 mt-2 w-48 bg-darkblue1 rounded-md shadow-lg ring-1 ring-black/5 z-50">
                  <div className="px-4 py-2 space-y-1">
                    <Menu.Item>{() => renderLink('#corporate', 'fa-briefcase', 'Corporativo')}</Menu.Item>
                    <Menu.Item>{() => renderLink('#work', 'fa-heart', 'Soluções Terapêuticas')}</Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </li>

            {/* Dropdown: Mídia */}
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="flex items-center gap-2 text-white hover:text-darkred2">
                  <i className="fa-solid fa-photo-film fa-sm" /> Mídia
                  <i className="fa-solid fa-caret-down text-sm" />
                </Menu.Button>
                <Menu.Items className="absolute left-0 mt-2 w-48 bg-darkblue1 rounded-md shadow-lg ring-1 ring-black/5 z-50">
                  <div className="px-4 py-2 space-y-1">
                    <Menu.Item>{() => renderLink('#blog', 'fa-book-open', 'Publicações')}</Menu.Item>
                    <Menu.Item>{() => renderLink('#videos', 'fa-video', 'Vídeos')}</Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </li>

            <li>{renderLink('#contact', 'fa-envelope', 'Contato')}</li>
          </ul>
        </div>

        {/* Mobile Menu Animado */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="md:hidden absolute top-full left-0 w-full bg-darkblue1 flex flex-col gap-4 px-6 py-6 font-cormorant text-base z-40 shadow-xl rounded-b-lg"
            >
              <li>{renderLink('#home', 'fa-house', 'Início')}</li>

              {/* Mobile: Sobre */}
              <li>
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center justify-between w-full text-white hover:text-darkred2">
                    <span className="flex items-center gap-2">
                      <i className="fa-solid fa-user-group fa-sm" /> Sobre
                    </span>
                    <i className="fa-solid fa-caret-down text-sm" />
                  </Menu.Button>
                  <Menu.Items className="mt-2 w-full bg-darkblue1 rounded-md px-4 py-2 flex flex-col gap-2 z-50">
                    <Menu.Item>{() => renderLink('#about', 'fa-user', 'Sobre Mim')}</Menu.Item>
                    <Menu.Item>{() => renderLink('#formacao', 'fa-graduation-cap', 'Formação')}</Menu.Item>
                  </Menu.Items>
                </Menu>
              </li>

              {/* Mobile: Serviços */}
              <li>
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center justify-between w-full text-white hover:text-darkred2">
                    <span className="flex items-center gap-2">
                      <i className="fa-solid fa-hand-holding-heart fa-sm" /> Serviços
                    </span>
                    <i className="fa-solid fa-caret-down text-sm" />
                  </Menu.Button>
                  <Menu.Items className="mt-2 w-full bg-darkblue1 rounded-md px-4 py-2 flex flex-col gap-2 z-50">
                    <Menu.Item>{() => renderLink('#corporate', 'fa-briefcase', 'Corporativo')}</Menu.Item>
                    <Menu.Item>{() => renderLink('#work', 'fa-heart', 'Soluções Terapêuticas')}</Menu.Item>
                  </Menu.Items>
                </Menu>
              </li>

              {/* Mobile: Mídia */}
              <li>
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center justify-between w-full text-white hover:text-darkred2">
                    <span className="flex items-center gap-2">
                      <i className="fa-solid fa-photo-film fa-sm" /> Mídia
                    </span>
                    <i className="fa-solid fa-caret-down text-sm" />
                  </Menu.Button>
                  <Menu.Items className="mt-2 w-full bg-darkblue1 rounded-md px-4 py-2 flex flex-col gap-2 z-50">
                    <Menu.Item>{() => renderLink('#blog', 'fa-book-open', 'Publicações')}</Menu.Item>
                    <Menu.Item>{() => renderLink('#videos', 'fa-video', 'Vídeos')}</Menu.Item>
                  </Menu.Items>
                </Menu>
              </li>

              <li>{renderLink('#contact', 'fa-envelope', 'Contato')}</li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    );
  };

  export default Navbar;