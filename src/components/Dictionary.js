import React from 'react';
import '../styles/Dictionary.css';

const Dictionary = () => {
  return (
    <div className="dictionary-container">
      <div className="dictionary-image">
        <img
          src="img/sözlük.png" 
          alt="Astronot kaskı"
        />
      </div>
      <div className="dictionary-content">
        <h1 className="dictionary-title">
          Teknoloji <span className="highlight">Terimlerinin</span> Sihirli Dünyası
        </h1>
        <p>
          <a href="https://www.techcareer.net/dictionary" className="dictionary-link">
            Teknoloji alanına yabancı mısın?
          </a>
        </p>
        <p>
          Bu dünyada uzayı kaçırmamak için A'dan Z'ye tüm teknoloji terimlerinin
          tanımlarını senin için hazırladığımız teknoloji sözlüğünde bulabilirsin!
        </p>
        <div className="dictionary-action">
          <a href="https://www.techcareer.net/dictionary">
            <button className="dictionary-button">İncele</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
