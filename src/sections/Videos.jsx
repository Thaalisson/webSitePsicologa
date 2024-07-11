// src/sections/Videos.jsx
import React from 'react';
import '../styles/Videos.css';

const Videos = () => {
  return (
    <section className="videos-container" id="videos">
      <h2>Vídeos</h2>
      <div className="video-wrapper">
        <iframe 
          className="video"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </section>
  );
};

export default Videos;
