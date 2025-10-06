import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 1,
      bg: "../assets/bg1.webp",
      bgMobile: "../assets/bg1-mobile.webp",
      bottle: "../assets/cellImage_0_9.png",
      title: t("hero.slides.1.title"),
      perfumeTitle:"Tom Ford",
      subtitle: t("hero.slides.1.subtitle"),
    },
    {
      id: 2,
      bg: "../assets/bg2.webp",
      bgMobile: "../assets/bg2-mobile.webp",
      bottle: "../assets/cellImage_0_23.png",
      title: t("hero.slides.2.title"),
      perfumeTitle:"Creed",
      subtitle: t("hero.slides.2.subtitle"),
    },
    {
      id: 3,
      bg: "../assets/bg3.webp",
      bgMobile: "../assets/bg3-mobile.webp",
      bottle: "../assets/cellImage_0_81.png",
      title: t("hero.slides.3.title"),
      perfumeTitle:"Bvlgari",
      subtitle: t("hero.slides.3.subtitle"),
    },
    {
      id: 4,
      bg: "../assets/bg4.webp",
      bgMobile: "../assets/bg4-mobile.webp",
      bottle: "../assets/cellImage_0_2.png",
      title: t("hero.slides.4.title"),
      perfumeTitle:"Chanel",
      subtitle: t("hero.slides.4.subtitle"),
    },
  ];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero">
      <div className="contacts">
        <a href="tel:+998903525959"><FontAwesomeIcon icon={faPhone} /></a>
        <a href="mailto:essenzaperfumes17@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="https://t.me/essenza_perfume" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://www.instagram.com/essenza_parfumes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <div className="bottle-carousel">
        <div className="overlay-mobile">
          <h3>{slides[current].title}</h3>
          <p>{slides[current].subtitle}</p>
        </div>
        {slides.map((slide, index) => (
          <div key={slide.id} className={`bottle-slide ${index === current ? "active" : ""}`}>
            <img src={slide.bottle} alt={slide.perfumeTitle} className="bottle-img" />
            <h2 className="bottle-title">{slide.perfumeTitle}</h2>
          </div>
        ))}
      </div>

      <div className="bg-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`bg-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${isMobile ? slide.bgMobile : slide.bg})` }}
          >
            <div className="overlay">
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;