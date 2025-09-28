import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { t } = useTranslation();
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log("Scroll event fired, scrollY:", scrollY);
      const hero = document.querySelector(".hero");
      if (!hero) {
        setIsFixed(scrollY > 100);
        return;
      }
      const rect = hero.getBoundingClientRect();
      console.log("Hero - top:", rect.top, "bottom:", rect.bottom, "height:", rect.height);
      setIsFixed(rect.bottom <= 0);
    };

    console.log("Adding scroll event listener");
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Helper to go to section
  const goToSection = (id) => {
    if (window.location.pathname === "/") {
      // Already on home → scroll directly
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home first, then scroll after short delay
      navigate("/"); 
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100); // small delay to let route change
    }
    setIsOpen(false);
  };

  return (
    
<>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
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
      <div className="navigation__background">&nbsp;</div>
        <nav className="mobile-navigation">
          <Link to="/" onClick={() => setIsOpen(false)}>
            {t("home")}
          </Link>
          <Link to="/catalog" onClick={() => setIsOpen(false)}>
            {t("catalog")}
          </Link>
          <a onClick={() => goToSection("about")}>
            {t("about")}
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            {t("contact")}
          </a>
        <LanguageSwitcher
          className="mobile-lang-switcher"
          onLangChange={() => setIsOpen(false)}
        />
        </nav>
      </div>
    <header className={`header ${isOpen ? "open" : ""}`}>

      <Link to="/" className="header-logo-link">
        <img
          src="/assets/essenza_white.png"
          alt="logo"
          className="header-logo"
        />
      </Link>

      <nav className={`navigation ${isFixed ? 'fixed' : ""}`}>
        <Link to="/">{t("home")}</Link>
        <Link to="/catalog">{t("catalog")}</Link>
        <a onClick={() => goToSection("about")}>
          {t("about")}
        </a>
        <a href="#contact">
          {t("contact")}
        </a>
      </nav>

      <LanguageSwitcher />
    </header>

    </>
  );
}

export default Header;
