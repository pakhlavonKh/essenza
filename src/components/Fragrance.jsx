import React from "react";
import { useInView } from "./UserInView";
import { useTranslation } from 'react-i18next';

const FragranceSection = () => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const { t } = useTranslation();

  const fragrances = [
  {
    name: t("fragrance.items.1.name"),
    description: t("fragrance.items.1.description"),
    image: "../assets/fruit-fr.svg",
  },
  {
    name: t("fragrance.items.2.name"),
    description: t("fragrance.items.2.description"),
    image: "../assets/spice-fr.svg",
  },
  {
    name: t("fragrance.items.3.name"),
    description: t("fragrance.items.3.description"),
    image: "../assets/flower-fr.svg",
  },
  {
    name: t("fragrance.items.4.name"),
    description: t("fragrance.items.4.description"),
    image: "./assets/citrus-fr.svg",
  },
];

  return (
    <section className="fragrance-section">
      <h2>{t("fragrance.title")}</h2>
      <div ref={ref} className={`fragrance-grid fade-up ${inView ? "show" : ""}`} >
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
