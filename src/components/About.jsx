import React from 'react';

const compositionImages = [
  '../assets/bottle1.jpg',
  '../assets/bottle1.jpg',
  '../assets/bottle1.jpg'
];

const About = () => (
    <section className="about" id="about">
        <div className="about-text">
            <h2>About Us</h2>
            <p>
                Мы — официальный дистрибьютор французской компании Argeville в Узбекистане.
                Наша специализация — оптовые и крупнооптовые поставки высококачественных масляных духов и амбровой базы.
            </p>
            <p>


                Благодаря прямому сотрудничеству с производителем во Франции, мы гарантируем:
                подлинность и премиальное качество продукции,
                выгодные условия для партнёров,
                стабильные поставки и профессиональный сервис.
            </p>
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

export default About;