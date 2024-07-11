// src/components/Welcome.jsx
import React from 'react';
import '../styles/Welcome.css';
import videoSrc from '../assets/videos/peaceVideo.mp4';

const Welcome = () => {
  const handleButtonClick = () => {
    const aboutLink = document.querySelector('.navbar-links a[href="#about"]');
    if (aboutLink) {
      aboutLink.click();
    }
  };

  return (
    <div className="welcome-container">
      <video autoPlay loop muted className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="welcome-message">
        <h1>Seja Bem-Vindo!</h1>
        <h2>Psicologa Erivan</h2>
        <button className="quem-sou-eu-button" onClick={handleButtonClick}>QUEM SOU EU</button>
      </div>
    </div>
  );
};

export default Welcome;
