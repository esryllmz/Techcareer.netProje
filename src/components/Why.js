import React from 'react';
import '../styles/Why.css';  

const Why = () => {
  return (
    <div className="container">
      
      <div className="left-section">
        <div className="header">
          <h1 className="title">Neden Techcareer.net ?</h1>
          <img src="img/why.png" alt="Laptop Illustration" className="illustration" />
        </div>
      </div>

     
      <div className="right-section">
        <div className="box">
          <img src="img/icon-hackathon 1.png" alt="Icon 1" className="icon" />
          <div className="box-content">
            <h5>Ücretsiz Etkinlikler ve Eğitimlerle Başla</h5>
            <p>
              Yolun başındasın ama en güzel aşamasındasın! Sektörün için gereken tüm becerileri ücretsiz
              etkinliklerle öğrenmeye başla. Teknoloji dünyasındaki en güncel konular hakkında eğitimlere
              katılarak yeteneklerini geliştir ve sektörde bir adım öne geç.
            </p>
          </div>
        </div>
        
        <div className="box">
          <div className="box-content">
            <h5>Kendini Kanıtla ve Komüniteyle Güçlen</h5>
            <p>
              Bootcamp, Hackathon ve Hiring Challenge etkinliklerine katılarak becerilerini geliştirme ve
              ödüller kazanma fırsatı yakala. Teknoloji Komünitesi ile tanış, kendini geliştirecek
              etkinliklere katıl ve güçlü bağlantılar kur.
            </p>
          </div>
          <img src="img/icon-hackathon 2.png" alt="Icon 2" className="icon" />
        </div>

        <div className="box">
          <img src="img/icon-hackathon 3.png" alt="Icon 3" className="icon" />
          <div className="box-content">
            <h5>Kariyer Yolculuğuna Rehberlik Et</h5>
            <p>
              Teknoloji pozisyonlarını keşfet, görevlerini öğren ve kariyer yolculuğunu planla. Sektörün lider
              teknoloji şirketleriyle tanışarak iş fırsatlarını yakala. Teknik sözlükle tüm terimleri
              öğrenerek güçlü bir başlangıç yap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
