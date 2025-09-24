import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="footer-contacts">
            <h3>Contact Us</h3>
            <ul>
                <li>
                    <a href="mailto:info@essenza.com">info@essenza.com</a>
                </li>
                <li>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                </li>
                <li>
                    123 Essenza St, City, Country
                </li>
            </ul>
        </div>
        <div className="footer-map">
            <h3>Location</h3>
            <iframe
                src="https://yandex.com.tr/map-widget/v1/org/globus_mall/108678379208/?ll=69.176044%2C41.271990&z=16"
                frameBorder="1"
                allowFullScreen="true"
                style={{ border: "none" }}
                title="Globus Mall Map"
                >
            </iframe>
            <p>Ташкент, ул. Заргарлик, 10А</p>
        </div>
        <div className="footer-copy">
            &copy; {new Date().getFullYear()} Essenza. All rights reserved.
        </div>
    </footer>
);

export default Footer;