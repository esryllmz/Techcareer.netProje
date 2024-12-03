import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Carousel.css';

const Carousel = () => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slides = [
        { url: "/hackathon", img: "img/1.webp", alt: "Hackathon Sayfası" },
        { url: "/survey", img: "img/2.webp", alt: "Yazılımcı Anketi" },
        { url: "/dictionary", img: "img/3.webp", alt: "Teknik Sözlük" },
        { url: "/courses", img: "img/4.webp", alt: "Kurslar" },
        { url: "/jobs", img: "img/5.webp", alt: "İş İlanları" },
        { url: "/career-opportunities", img: "img/6.webp", alt: "Kariyer Fırsatları" },
        { url: "/twitch", img: "img/7.webp", alt: "Twitch Kanalı" },
        { url: "/blog", img: "img/8.webp", alt: "Blog" },
        { url: "/report", img: "img/9.webp", alt: "Rapor" },
    ];

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-slide">
                        <Link to={slide.url}>
                            <img src={slide.img} alt={slide.alt} className="carousel-image" />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
