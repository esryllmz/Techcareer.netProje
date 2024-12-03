import React from 'react';
import '../styles/Komunite.css';

const Komunite = () => {
  return (
    <div className="komunite-container">
      <div className="komunite-header">
        <h1 className="komunite-title">
          Teknoloji Tutkunlarının <span className="highlight">Komünite</span> Noktası
        </h1>
        <p className="komunite-description">
          Teknoloji Komünitesi ile hayalindeki işi bulabilir, kendini geliştirecek
          eğitimlere katılabilir ve teknoloji uzmanlarıyla tanışabilirsin!
        </p>
        <a href="https://www.techcareer.net/community" className="komunite-link">
          <button className="komunite-button">Keşfet</button>
        </a>
      </div>

      <div className="komunite-cards">
        <div className="komunite-card">
          <img
            src="img/icon-community.svg"
            alt="Topluluk"
            className="komunite-card-image"
          />
          <h3 className="komunite-card-title">170+</h3>
          <p className="komunite-card-description">Topluluğumuz bulunmakta</p>
        </div>

        <div className="komunite-card">
          <img
            src="img/icon-community2.svg"
            alt="Etkinlik"
            className="komunite-card-image"
          />
          <h3 className="komunite-card-title">100+</h3>
          <p className="komunite-card-description">Etkinlik gerçekleştirdik</p>
        </div>

        <div className="komunite-card">
          <img
            src="img/icon-community3.svg"
            alt="Eğitim"
            className="komunite-card-image"
          />
          <h3 className="komunite-card-title">455+</h3>
          <p className="komunite-card-description">Eğitim gerçekleştirdik</p>
        </div>
      </div>
    </div>
  );
};

export default Komunite;
