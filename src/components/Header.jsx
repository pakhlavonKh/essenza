import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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

      <Link to="/" className="header-logo-link">
        <img
          src="/assets/essenza_white.png"
          alt="logo"
          className="header-logo"
        />
      </Link>

      <div className="mobile-menu">
        <nav className="mobile-navigation">
          <Link to="/" onClick={() => setIsOpen(false)}>
            {t("home")}
          </Link>
          <Link to="/catalog" onClick={() => setIsOpen(false)}>
            {t("catalog")}
          </Link>
          <a href="/#about" onClick={() => setIsOpen(false)}>
            {t("about")}
          </a>
          <a href="/#contact" onClick={() => setIsOpen(false)}>
            {t("contact")}
          </a>
        </nav>
        <LanguageSwitcher
          className="mobile-lang-switcher"
          onLangChange={() => setIsOpen(false)}
        />
      </div>

      <nav className="navigation">
        <Link to="/">{t("home")}</Link>
        <Link to="/catalog">{t("catalog")}</Link>
        <a href="/#about">{t("about")}</a>
        <a href="/#contact">{t("contact")}</a>
      </nav>

      <LanguageSwitcher />
    </header>
  );
}

export default Header;
