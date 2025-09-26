import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const perfumes = [
  { id: 1, name: 'Rose Elegance', image: '../assets/cellImage_0_2.png' },
  { id: 2, name: 'Citrus Bloom', image: '../assets/cellImage_0_3.png' },
  { id: 3, name: 'Vanilla Dream', image: '../assets/cellImage_0_4.png' },
  { id: 4, name: 'Amber Night', image: '../assets/cellImage_0_5.png' },
  { id: 5, name: 'Jasmine Whisper', image: '../assets/cellImage_0_6.png' },
  { id: 6, name: 'Sandalwood Spirit', image: '../assets/cellImage_0_7.png' },
  { id: 7, name: 'Lavender Fields', image: '../assets/cellImage_0_8.png' },
  { id: 8, name: 'Ocean Mist', image: '../assets/cellImage_0_9.png' },
];

const PerfumeCarousel = () => {
  const trackRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(getVisibleCount());
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Function to determine visible count per breakpoint
  function getVisibleCount() {
    if (window.innerWidth < 768) return 1;  // 📱 mobile
    if (window.innerWidth < 1024) return 2; // 📲 tablet
    return 4;                               // 💻 desktop
  }

  // Update on resize
  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setIndex(newCount); // reset index properly
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create cloned slides for infinite effect
  const slides = [
    ...perfumes.slice(-visibleCount),
    ...perfumes,
    ...perfumes.slice(0, visibleCount)
  ];

  const handleNext = () => {
    setIndex(prev => prev + 1);
    setIsTransitioning(true);
  };

  const handlePrev = () => {
    setIndex(prev => prev - 1);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (index >= perfumes.length + visibleCount) {
      setIsTransitioning(false);
      setIndex(visibleCount);
    }
    if (index < visibleCount) {
      setIsTransitioning(false);
      setIndex(perfumes.length + visibleCount - 1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 20);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="perfume-carousel">
      <h2>Available Perfumes</h2>
      <div className="carousel-wrapper">
        <button className="carousel-btn" onClick={handlePrev}>&#8592;</button>

        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            ref={trackRef}
            style={{
              transform: `translateX(-${(index * 100) / visibleCount}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((perfume, i) => (
              <div
                key={i}
                className="carousel-item"
                style={{ flex: `0 0 ${100 / visibleCount}%` }} // adjust width dynamically
              >
                <img src={perfume.image} alt={perfume.name} className="perfume-img" />
                <div className="perfume-name">{perfume.name}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn" onClick={handleNext}>&#8594;</button>
      </div>

      <Link to="/catalog">
        <button className="more-btn">More</button>
      </Link>
    </section>
  );
};

export default PerfumeCarousel;
