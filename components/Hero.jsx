import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    bg: "../assets/bg1.jpg",
    bottle: "../assets/bottle1.jpg",
    title: "Luxury Perfume",
    subtitle: "Discover your signature scent",
  },
  {
    id: 2,
    bg: "../assets/bg2.jpg",
    bottle: "../assets/bottle2.jpg",
    title: "Exclusive Collection",
    subtitle: "Timeless elegance in every bottle",
  },
  {
    id: 3,
    bg: "../assets/bg3.jpg",
    bottle: "../assets/bottle3.jpg",
    title: "Premium Quality",
    subtitle: "Crafted for the modern soul",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero">
      {/* Left column: contacts */}
      <div className="contacts">
        <a href="#">fb</a>
        <a href="#">ig</a>
        <a href="#">tg</a>
        <a href="#">ph</a>
      </div>

      {/* Middle column: Bottle carousel */}
      <div className="bottle-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`bottle-slide ${index === current ? "active" : ""}`}
          >
            <img src={slide.bottle} alt={slide.title} className="bottle-img" />
            <h2 className="bottle-title">{slide.title}</h2>
          </div>
        ))}

        <div className="arrows">
          <button onClick={handlePrev}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
      </div>

      {/* Right column: Background carousel */}
      <div className="bg-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`bg-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.bg})` }}
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
