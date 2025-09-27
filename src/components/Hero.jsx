import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";

const slides = [
  {
    id: 1,
    bg: "../assets/bg1.jpg",
    bgMobile: "../assets/bg1-mobile.jpeg", // 👈 mobile version
    bottle: "../assets/cellImage_0_2.png",
    title: "Luxury Perfume",
    subtitle: "Discover your signature scent",
  },
  {
    id: 2,
    bg: "../assets/bg2.jpg",
    bgMobile: "../assets/bg2-mobile.jpeg",
    bottle: "../assets/cellImage_0_3.png",
    title: "Exclusive Collection",
    subtitle: "Timeless elegance in every bottle",
  },
  {
    id: 3,
    bg: "../assets/bg3.jpg",
    bgMobile: "../assets/bg3-mobile.jpeg",
    bottle: "../assets/cellImage_0_4.png",
    title: "Premium Quality",
    subtitle: "Crafted for the modern soul",
  },
  {
    id: 4,
    bg: "../assets/bg4.jpg",
    bgMobile: "../assets/bg4-mobile.jpeg",
    bottle: "../assets/cellImage_0_5.png",
    title: "Premium Quality",
    subtitle: "Crafted for the modern soul",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  // Listen to resize to swap bg dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero">
      <div className="contacts">
        <a href="tel:+1234567890"><FontAwesomeIcon icon={faPhone} /></a>
        <a href="mailto:info@example.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <div className="bottle-carousel">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`bottle-slide ${index === current ? "active" : ""}`}>
            <img src={slide.bottle} alt={slide.title} className="bottle-img" />
            <h2 className="bottle-title">{slide.title}</h2>
          </div>
        ))}
        <div className="arrows">
          <button onClick={handlePrev}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
      </div>

      {/* Background Carousel */}
      <div className="bg-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`bg-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${isMobile ? slide.bgMobile : slide.bg})` }}
          >
            <div className="overlay">
              <h3>{slide.subtitle}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elegant notes crafted for modern souls.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
