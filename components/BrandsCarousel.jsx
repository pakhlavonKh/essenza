import React, { useState, useRef, useEffect } from 'react';

const brands = [
  { id: 1, name: 'Chanel', logo: '/images/brand-chanel.png' },
  { id: 2, name: 'Dior', logo: '/images/brand-dior.png' },
  { id: 3, name: 'Gucci', logo: '/images/brand-gucci.png' },
  { id: 4, name: 'Prada', logo: '/images/brand-prada.png' },
  { id: 5, name: 'Versace', logo: '/images/brand-versace.png' },
  { id: 6, name: 'Tom Ford', logo: '/images/brand-tomford.png' },
];

const visibleCount = 4; // Number of logos visible at a time

const BrandCarousel = () => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(visibleCount);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Clone brands for infinite effect
  const slides = [
    ...brands.slice(-visibleCount),
    ...brands,
    ...brands.slice(0, visibleCount)
  ];

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
      setIsTransitioning(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (index >= brands.length + visibleCount) {
      setIsTransitioning(false);
      setIndex(visibleCount);
    }
    if (index < visibleCount) {
      setIsTransitioning(false);
      setIndex(brands.length + visibleCount - 1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 20);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="brand-carousel">
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
          {slides.map((brand, i) => (
            <div key={i} className="carousel-item">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
