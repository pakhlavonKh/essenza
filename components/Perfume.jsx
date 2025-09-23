import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const perfumes = [
  { id: 1, name: 'Rose Elegance', image: '/images/rose-elegance.jpg' },
  { id: 2, name: 'Citrus Bloom', image: '/images/citrus-bloom.jpg' },
  { id: 3, name: 'Vanilla Dream', image: '/images/vanilla-dream.jpg' },
  { id: 4, name: 'Ocean Mist', image: '/images/ocean-mist.jpg' },
  { id: 5, name: 'Amber Night', image: '/images/amber-night.jpg' },
  { id: 6, name: 'Jasmine Whisper', image: '/images/jasmine-whisper.jpg' },
  { id: 7, name: 'Sandalwood Spirit', image: '/images/sandalwood-spirit.jpg' },
  { id: 8, name: 'Lavender Fields', image: '/images/lavender-fields.jpg' },
];

const visibleCount = 4;

const PerfumeCarousel = () => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(visibleCount); // start at first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create cloned slides for infinite effect
  const slides = [
    ...perfumes.slice(-visibleCount), // prepend last N
    ...perfumes,                     // real slides
    ...perfumes.slice(0, visibleCount) // append first N
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
      // jumped to clone at end -> reset to real first
      setIsTransitioning(false);
      setIndex(visibleCount);
    }
    if (index < visibleCount) {
      // jumped to clone at start -> reset to real last
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
              <div key={i} className="carousel-item">
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
