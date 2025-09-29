import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
    <footer className="footer" id="contact">
        <div className="footer-contacts">
            <h3>{t("footer.contactTitle")}</h3>
            <ul>
                <li>
                    <a href="mailto:essenzaperfumes17@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> <span>essenzaperfumes17@gmail.com</span> </a>
                </li>
                <li>
                    <a href="tel:+998903525959"><FontAwesomeIcon icon={faPhone} /><span> +998 (90) 352 59 59</span></a>
                </li>
                <li>
                    <a href="https://t.me/essenza_perfume"><FontAwesomeIcon icon={faTelegram} /><span> Telegram </span></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/essenza_parfumes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span> </a>
                </li>
            </ul>
        </div>
        <div className="footer-map">
            <h3>{t("footer.locationTitle")}</h3>
            <iframe
                title= "Essenza Parfumes — Yandex map"
                src="https://yandex.com.tr/map-widget/v1/org/essenza_parfumes/11213988346/?ll=69.176044%2C41.271990&z=16"
                frameBorder="1"
                allowFullScreen={true}
                loading="lazy"
                />
            <p>{t("footer.address")}</p>
        </div>
        <div className="footer-copy">
            &copy; {new Date().getFullYear()} Essenza. {t("footer.rights")}.
        </div>
    </footer>
    )
};

export default Footer;