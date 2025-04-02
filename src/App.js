// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './sections/About';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Videos from './sections/Videos';
import Welcome from './sections/Welcome';
import Blog from './sections/Blog';
import Formacao from './sections/Formacao';
import CorporateImpact from  './sections/CorporateImpact';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="bg-white text-chocolate font-cormorant">
      <Navbar />
      <main>
        <Welcome />
        <About />
        <Formacao/>        
        <CorporateImpact/>
        <Work />
        <Blog />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
