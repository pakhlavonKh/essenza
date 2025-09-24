import React from 'react';

const compositionImages = [
  '../assets/bottle1.jpg',
  '../assets/bottle1.jpg',
  '../assets/bottle1.jpg'
];

const About = () => (
    <section className="about">
        <div className="about-text">
            <h2>About Us</h2>
            <p>
                Essenza is dedicated to delivering high-quality solutions tailored to your needs.
                Our team combines expertise and passion to help you achieve your goals.
            </p>
            <ul>
                <li>Experienced professionals</li>
                <li>Customer-focused approach</li>
                <li>Innovative solutions</li>
            </ul>
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