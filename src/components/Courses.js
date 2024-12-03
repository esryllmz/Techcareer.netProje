import React from 'react';
import '../styles/Courses.css';


function Courses() {
  const courses = [
    {
      id: 1,
      image: 'img/event3.png',
      title: 'React Native ile Mobil Uygulama Geliştirme',
      author: 'Hamit Mızrak',
      description: 'React Native, cross-platform mobil uygulama geliştirme framework\'üdür. Çalışmış olmanız faydalı olacaktır.',
      tags: ['React', 'Framework'],
      link: 'https://www.techcareer.net/courses/react-native-egitimi'
    },
    {
      id: 2,
      image: 'img/event1.png',
      title: 'Uygulamalarla SQL Eğitimi',
      author: 'Hamit Mızrak',
      description: 'SQL, veritabanı yönetimi ve veri sorgulama için kullanılan bir dildir. Bu eğitimde SQL\'in temel prensiplerini ve pratik uygulamalarını öğreneceksiniz.',
      tags: ['SQL', 'Veri Tabanı', 'SQL Server'],
      link: 'https://www.techcareer.net/courses/uygulamalarla-sql-egitimi'
    },
    {
      id: 3,
      image: 'img/event2.png',
      title: 'Unity ile Oyun Geliştirme',
      author: 'Ahmet Kaya',
      description: 'Unity, oyun geliştirmek için kullanılan güçlü ve esnek bir oyun motorudur. Bu eğitimde Unity\'nin temel prensiplerini ve pratik uygulamalarını öğreneceksiniz.',
      tags: ['Oyun Geliştirme', 'Unity', '2D', '3D'],
      link: 'https://www.techcareer.net/courses/unity-ile-oyun-gelistirme'
    },
  ];

  return (
    <div className="courses">
      <section className="education-cards">
        <h1>Eğitimlerle Geleceğini Şekillendir</h1>
        <div className="cards-container">
          {courses.map(({ id, image, title, author, description, tags, link }) => (
            <div className="card" key={id}>
              <div className="card-header">
                <img src={image} alt={title} className="card-image" />
              </div>
              <div className="card-body">
                <h3>{title}</h3>
                <p className="author">{author}</p>
                <p className="description">{description}</p>
                <div className="tags">
                  {tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                  ))}
                </div>
                <button
                  className="basla-btn"
                  onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
                >
                  Eğitime Başla
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="view-all"
          onClick={() => window.location.href = "https://www.techcareer.net/courses"}
        >
          Tümünü Gör
        </button>
      </section>
    </div>
  );
}

export default Courses;
