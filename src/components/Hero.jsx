import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const timerRef = useRef(null);

  const hero_img = "../assets/hero-mobile.PNG";

  const hero_bg = "../assets/bg1.PNG";

  const slides = [
    {
      id: 1,
      bottle: "../assets/cellImage_0_9.png",
      perfumeTitle:"Tom Ford",
    },
    {
      id: 2,
      bottle: "../assets/cellImage_0_23.png",
      perfumeTitle:"Creed",
    },
    {
      id: 3,
      bottle: "../assets/cellImage_0_81.png",
      perfumeTitle:"Bvlgari",
    },
    {
      id: 4,
      bottle: "../assets/cellImage_0_2.png",
      perfumeTitle:"Chanel",
    },
  ];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  // useEffect(() => {
  //   const handleResize = () => setIsMobile(window.innerWidth <= 768);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

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
      <div className="mobile-img">
        <img src={hero_img} alt="" />
      </div>
      </div>

      <div className="bg-carousel">
          <div
            className="bg-slide" 
            style={{ backgroundImage: `url(${hero_bg})`  }}
          >
            <div className="overlay">
              <h3>{t("heroTitle")}</h3>
              <p>{t("heroSubtitle")}</p>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Hero;