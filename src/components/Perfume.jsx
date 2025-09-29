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
  const trackRef = useRef();
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  function getVisibleCount() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  }

  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prepare slides with clones for infinite loop
  const slides = [
    ...perfumes.slice(-visibleCount),
    ...perfumes,
    ...perfumes.slice(0, visibleCount),
  ];

  const totalSlides = perfumes.length;

  const moveToIndex = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => moveToIndex(currentIndex + 1);
  const handlePrev = () => moveToIndex(currentIndex - 1);

  const handleTransitionEnd = () => {
    let index = currentIndex;

    if (index >= totalSlides) {
      index = 0;
    } else if (index < 0) {
      index = totalSlides - 1;
    }

    setIsTransitioning(false);
    setCurrentIndex(index);

    // Reset track position instantly without animation for looping effect
    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(-${((index + visibleCount) * 100) / slides.length}%)`;
    requestAnimationFrame(() => {
      trackRef.current.style.transition = "transform 0.5s ease-in-out";
    });
  };

  return (
    <section className="perfume-carousel">
      <h2>{t("perfume.title")}</h2>
      <div className="carousel-wrapper" style={{ display: "flex", alignItems: "center" }}>
        <button className="carousel-btn" onClick={handlePrev}>
          &#8592;
        </button>

        <div className="carousel-track-wrapper" style={{ overflow: "hidden", flex: 1 }}>
          <div
            className="carousel-track"
            ref={trackRef}
            style={{
              display: "flex",
              width: `${(slides.length * 100) / visibleCount}%`,
              transform: `translateX(-${((currentIndex + visibleCount) * 100) / slides.length}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((perfume, i) => (
              <div
                key={i}
                className="carousel-item"
                style={{
                  flex: `0 0 ${100 / slides.length}%`,
                  maxWidth: `${100 / visibleCount}%`,
                  boxSizing: "border-box",
                  padding: "0.5rem",
                }}
              >
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="perfume-img"
                  style={{ width: "100%", display: "block", borderRadius: "0.5rem" }}
                />
                <div className="perfume-name" style={{ textAlign: "center", marginTop: "0.5rem" }}>
                  {perfume.name}
                </div>
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
