import React from "react";

const fragrances = [
  {
    name: "Fruit fragrance",
    description: "Sweet, juicy, and playful with notes of fresh fruits.",
    image: "../assets/fruit-fr.svg",
  },
  {
    name: "Spice fragrance",
    description: "Warm, bold, and exotic with rich spice accords.",
    image: "../assets/spice-fr.svg",
  },
  {
    name: "Flower fragrance",
    description: "Romantic and elegant with flower notes.",
    image: "../assets/flower-fr.svg",
  },
  {
    name: "Citrus fragrance",
    description: "Bright, fresh, and uplifting with zesty citrus.",
    image: "./assets/citrus-fr.svg",
  },
];

const FragranceSection = () => {
  return (
    <section className="fragrance-section">
      <h2>Our Fragrances</h2>
      <div className="fragrance-grid">
        {fragrances.map((item, index) => (
          <div className="fragrance-item" key={index}>
            <img src={item.image} alt={item.name} className="fragrance-icon" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FragranceSection;
