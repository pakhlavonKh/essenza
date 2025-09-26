import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
        <input
            type="checkbox"
            id="nav-toggle"
            className="navigation__checkbox"
            checked={isOpen}
            onChange={() => setIsOpen((v) => !v)}
        />
        <label
            htmlFor="nav-toggle"
            className="navigation__button"
            aria-label="Toggle menu"
        >
            <span className="navigation__icon" />
        </label>

        <img src="/assets/essenza_white.png" alt="logo" className="header-logo" />
        <div class="mobile-menu">
            <nav class="mobile-navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
            </nav>

            <LanguageSwitcher className="mobile-lang-switcher" />
        </div>
        {/* Navigation */}
        <nav className={`navigation`}>
            <a href="/">{t("home")}</a>
            <a href="/catalog">{t("catalog")}</a>
            <a href="/about">{t("about")}</a>
            <a href="/contact">{t("contact")}</a>
        </nav>

        <LanguageSwitcher />
    </header>
  );
}

export default Header;
