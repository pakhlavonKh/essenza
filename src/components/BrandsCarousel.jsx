import React, { useState, useRef, useEffect } from 'react';

const brands = [
  { id: 1, name: 'hfc', logo: '../public/assets/hfc.png' },
  { id: 2, name: 'ck', logo: '../public/assets/ck.png' },
  { id: 3, name: 'lv', logo: '../public/assets/lv.png' },
  { id: 4, name: 'tf', logo: '../public/assets/tf.png' },
  { id: 5, name: 'df', logo: '../public/assets/df.png' },
  { id: 6, name: 'pdm', logo: '../public/assets/pdm.png' },
  { id: 7, name: 'creed', logo: '../public/assets/creed.png' },
  { id: 8, name: 'penhaligons', logo: '../public/assets/penhaligons.png' },
  { id: 9, name: 'givenchy', logo: '../public/assets/givenchy.png' },
  { id: 10, name: 'ysl', logo: '../public/assets/ysl.png' },
  { id: 11, name: 'chanel', logo: '../public/assets/chanel.webp' },
  { id: 12, name: 'kilian', logo: '../public/assets/kilian.png' },
  { id: 13, name: 'dior', logo: '../public/assets/dior.png' },
];

const visibleCount = 4; 

const BrandCarousel = () => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(visibleCount);
  const [isTransitioning, setIsTransitioning] = useState(true);

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
