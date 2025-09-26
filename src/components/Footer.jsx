import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <footer className="footer">
        <div className="footer-contacts">
            <h3>Contact Us</h3>
            <ul>
                <li>
                    <a href="mailto:essenzaperfumes17@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> essenzaperfumes17@gmail.com</a>
                </li>
                <li>
                    <a href="tel:+998903525959"><FontAwesomeIcon icon={faPhone} /> +998 (90) 352 59 59</a>
                </li>
                <li>
                    <a href="https://t.me/essenza_perfume"><FontAwesomeIcon icon={faTelegram} /> Telegram Essenza</a>
                </li>
                <li>
                    <a href="https://t.me/argeville_uzbekistan"><FontAwesomeIcon icon={faTelegram} /> Telegram Argivelle</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/essenza_parfumes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                </li>
            </ul>
        </div>
        <div className="footer-map">
            <h3>Location</h3>
            <iframe
                title= "Essenza Parfumes — Yandex map"
                src="https://yandex.com.tr/map-widget/v1/org/essenza_parfumes/11213988346/?ll=69.176044%2C41.271990&z=16"
                frameBorder="1"
                allowFullScreen={true}
                loading="lazy"
                />
            <p> Essenza Parfumes ул. Заргарлик, 10А</p>
        </div>
        <div className="footer-copy">
            &copy; {new Date().getFullYear()} Essenza. All rights reserved.
        </div>
    </footer>
);

export default Footer;