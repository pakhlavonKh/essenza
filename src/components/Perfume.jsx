import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const perfumes = [
  { id: 1, name: "Bleu de Chanel", image: "../assets/cellImage_0_2.png" },
  { id: 2, name: "Egoiste Platinum", image: "../assets/cellImage_0_3.png" },
  { id: 3, name: "Cherry Smoke", image: "../assets/cellImage_0_4.png" },
  { id: 4, name: "Oud Wood", image: "../assets/cellImage_0_5.png" },
  { id: 5, name: "Black Orchid", image: "../assets/cellImage_0_6.png" },
  { id: 6, name: "Lost Cherry", image: "../assets/cellImage_0_7.png" },
  { id: 7, name: "Tobacco Vanille", image: "../assets/cellImage_0_8.png" },
  { id: 8, name: "Ombre Leather", image: "../assets/cellImage_0_9.png" },
];

const PerfumeCarousel = () => {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(getVisibleCount());
  const [lock, setLock] = useState(false);
  const { t } = useTranslation();

  function getVisibleCount() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  }

  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setIndex(newCount);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
    ...perfumes.slice(-visibleCount),
    ...perfumes,
    ...perfumes.slice(0, visibleCount),
  ];

  const handleNext = () => {
    if (lock) return;
    setLock(true);
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (lock) return;
    setLock(true);
    setIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (index >= perfumes.length + visibleCount) {
      setIndex(visibleCount);
    } else if (index < visibleCount) {
      setIndex(perfumes.length + visibleCount - 1);
    }
    setLock(false); 
  };

  return (
    <section className="perfume-carousel">
      <h2>{t("perfume.title")}</h2>
      <div className="carousel-wrapper">
        <button className="carousel-btn" onClick={handlePrev}>
          &#8592;
        </button>

        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${(index * 100) / visibleCount}%)`,
              transition: "transform 0.5s ease-in-out",
              display: "flex",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((perfume, i) => (
              <div
                key={i}
                className="carousel-item"
                style={{ flex: `0 0 ${100 / visibleCount}%` }}
              >
                <img src={perfume.image} alt={perfume.name} className="perfume-img" />
                <div className="perfume-name">{perfume.name}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn" onClick={handleNext}>
          &#8594;
        </button>
      </div>
      <Link to="/catalog">
        <button className="more-btn">{t("perfume.moreBtn")}</button>
      </Link>
    </section>
  );
};

export default PerfumeCarousel;
