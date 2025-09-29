import React, { useState, useRef, useEffect } from 'react';

const brands = [
  { id: 1, name: 'hfc', logo: '/assets/hfc.png' },
  { id: 2, name: 'ck', logo: '/assets/ck.png' },
  { id: 3, name: 'lv', logo: '/assets/lv.png' },
  { id: 4, name: 'tf', logo: '/assets/tf.png' },
  { id: 5, name: 'df', logo: '/assets/df.png' },
  { id: 6, name: 'pdm', logo: '/assets/pdm.png' },
  { id: 7, name: 'creed', logo: '/assets/creed.png' },
  { id: 8, name: 'penhaligons', logo: '/assets/penhaligons.png' },
  { id: 9, name: 'givenchy', logo: '/assets/givenchy.png' },
  { id: 10, name: 'ysl', logo: '/assets/ysl.png' },
  { id: 11, name: 'chanel', logo: '/assets/chanel.webp' },
  { id: 12, name: 'kilian', logo: '/assets/kilian.png' },
  { id: 13, name: 'dior', logo: '/assets/dior.png' },
];

const BrandCarousel = () => {
  const trackRef = useRef(null);

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(getVisibleCount());
  const [isTransitioning, setIsTransitioning] = useState(true);

  function getVisibleCount() {
    if (window.innerWidth < 768) return 2; 
    if (window.innerWidth < 1024) return 3; 
    return 5;                               
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
    ...brands.slice(-visibleCount),
    ...brands,
    ...brands.slice(0, visibleCount)
  ];

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
            <div
              key={i}
              className="carousel-item"
              style={{ flex: `0 0 ${100 / visibleCount}%` }} 
            >
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
