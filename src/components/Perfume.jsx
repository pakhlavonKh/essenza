import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef();

  function getVisibleCount() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  }

  useEffect(() => {
    const handleResize = () => {
      const count = getVisibleCount();
      setVisibleCount(count);
      setCurrentIndex(0); // reset on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % perfumes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + perfumes.length) % perfumes.length);
  };

  // Calculate width for track and items
  const trackWidth = (perfumes.length / visibleCount) * 100;
  const translateX = (currentIndex / perfumes.length) * 100;

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
            ref={trackRef}
            style={{
              width: `${trackWidth}%`,
              transform: `translateX(-${translateX}%)`,
              transition: "transform 0.5s ease-in-out",
              display: "flex",
            }}
          >
            {perfumes.map((perfume) => (
              <div
                key={perfume.id}
                className="carousel-item"
                style={{ flex: `0 0 ${100 / perfumes.length}%` }}
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
