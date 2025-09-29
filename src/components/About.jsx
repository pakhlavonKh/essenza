import React from 'react';
import { useInView } from "./UserInView";
import { useTranslation } from 'react-i18next';

const compositionImages = [
  './assets/composition-1.webp',
  './assets/composition-2.webp',
  './assets/composition-3.webp'
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const { t } = useTranslation();

  return (
    <section ref={ref} className={`about fade-up ${inView ? "show" : ""}`} id="about">
        <div className="about-text">
            <h2>{t("about.title")}</h2>
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
        </div>
          <div className="composition">
            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Composition 1"
              className="composition__photo composition__photo--p1"
              src={compositionImages[0]}/>

            <img 
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Composition 2"
              className="composition__photo composition__photo--p2"
              src={compositionImages[1]}/>

            <img 
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Composition 3"
              className="composition__photo composition__photo--p3"
              src={compositionImages[2]}/>

          </div>
    </section>
  );
};

export default About;