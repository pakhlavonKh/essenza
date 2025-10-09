import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { t } = useTranslation();
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isColored, setIsColored] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollDesktop = () => {
      const scrollY = window.scrollY;
      const hero = document.querySelector(".hero");
      if (!hero) {
        setIsFixed(scrollY > 100);
        return;
      }
      const rect = hero.getBoundingClientRect();
      setIsFixed(rect.bottom <= 0);
    };

    const handleScrollMobile = () => {
      const header = document.querySelector("header");
    console.log("⚠️ No <header> element found!");
      if (!header) return;

      const rect = header.getBoundingClientRect();console.log(
    "Header rect:",
    "top =", rect.top,
    "bottom =", rect.bottom,
    "height =", rect.height,
    "scrollY =", window.scrollY
  );
      if (rect.bottom < 0) {
    console.log("👉 Header is out of view → setting colored = true");
        setIsColored(true);
      } else {
        setIsColored(false);
      }
    };

    const onScroll = () => {
      if (window.innerWidth > 768) {
        handleScrollDesktop();
      } else {
        handleScrollMobile();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const goToSection = (id) => {
    if (window.location.pathname === "/") {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/"); 
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100); 
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
        className={`navigation__button ${isColored ? "colored": ""} `}
        aria-label="Toggle menu"
        
      >
        <span className={`navigation__icon ${isColored ? "colored": ""} `} />
      </label>
      <div className="navigation__background">&nbsp;</div>
        <nav className="mobile-navigation">
          <Link to="/" onClick={() => setIsOpen(false)}>
            {t("home")}
          </Link>
          <Link to="/catalog" onClick={() => setIsOpen(false)}>
            {t("catalogNav")}
          </Link>
          <a onClick={() => goToSection("about")}>
            {t("aboutUs")}
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
          src="/assets/essenza_black.png"
          alt="logo"
          className="header-logo"
        />
      </Link>

      <nav className={`navigation ${isFixed ? 'fixed' : ""}`}>
        <Link to="/">{t("home")}</Link>
        <Link to="/catalog">{t("catalogNav")}</Link>
        <a onClick={() => goToSection("about")}>
          {t("aboutUs")}
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
