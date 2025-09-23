// FragranceSection.jsx
import React from "react";
import perfume1 from "../public/assets/bottle1.jpg";
import perfume2 from "../public/assets/bottle2.jpg";
import perfume3 from "../public/assets/bottle3.jpg";
import perfume4 from "../public/assets/bottle3.jpg";

const fragrances = [
  { name: "Floral Essence", image: perfume1 },
  { name: "Citrus Burst", image: perfume2 },
  { name: "Woody Musk", image: perfume3 },
  { name: "Ocean Breeze", image: perfume4 },
];

const FragranceSection = () => {
  return (
    <section className="fragrance-section">
      <h2>Our Fragrances</h2>
      <div className="fragrance-grid">
        {fragrances.map((item, index) => (
          <div className="fragrance-item" key={index}>
            <img src={item.image} alt={item.name} className="fragrance-icon" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FragranceSection;
