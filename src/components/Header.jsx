import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // 👈 import
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

      {/* Logo */}
      <Link to="/" className="header-logo-link">
        <img src="/assets/essenza_white.png" alt="logo" className="header-logo" />
      </Link>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <nav className="mobile-navigation">
          <Link to="/" onClick={() => setIsOpen(false)}>{t("home")}</Link>
          <HashLink smooth to="/#about" onClick={() => setIsOpen(false)}>
            {t("about")}
          </HashLink>
          <Link to="/catalog" onClick={() => setIsOpen(false)}>{t("catalog")}</Link>
          <HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>
            {t("contact")}
          </HashLink>
        </nav>
        <LanguageSwitcher className="mobile-lang-switcher" />
      </div>

      {/* Desktop Navigation */}
      <nav className="navigation">
        <Link to="/">{t("home")}</Link>
        <HashLink smooth to="/#about">{t("about")}</HashLink>
        <Link to="/catalog">{t("catalog")}</Link>
        <HashLink smooth to="/#contact">{t("contact")}</HashLink>
      </nav>

      <LanguageSwitcher />
    </header>
  );
}

export default Header;
