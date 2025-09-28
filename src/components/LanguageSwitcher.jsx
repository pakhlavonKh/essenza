import React, { useEffect, useState, useRef } from "react";
import i18next from "i18next";

const LANGS = [
  { code: "uz", label: "UZ", native: "UZ", dir: "ltr" },
  { code: "ru", label: "RU", native: "RU", dir: "ltr" },
  { code: "en", label: "EN", native: "EN", dir: "ltr" },
];

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang && LANGS.some((l) => l.code === urlLang)) return urlLang;
  const stored = localStorage.getItem("app.lang");
  if (stored && LANGS.some((l) => l.code === stored)) return stored;
  const nav = navigator.language.split("-")[0];
  if (LANGS.some((l) => l.code === nav)) return nav;
  return "en";
}

export default function LanguageSwitcher({ className = "", onLangChange }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(getInitialLang);
  const switcherRef = useRef(null);

  const current = LANGS.find((l) => l.code === lang);

  // Fix: only depend on 'lang' to avoid infinite loop
  useEffect(() => {
    const current = LANGS.find((l) => l.code === lang);
    i18next.changeLanguage(lang);
    localStorage.setItem("app.lang", lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", current?.dir || "ltr");
  }, [lang]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (switcherRef.current && !switcherRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <div className={`lang-switcher ${className}`} ref={switcherRef}>
      <button className="lang-button" onClick={() => setOpen((o) => !o)}>
        {current?.native}
      </button>

      {open && (
        <ul className="lang-menu">
          {LANGS.filter((l) => l.code !== lang).map((l) => (
            <li key={l.code}>
              <button
                className="lang-option"
                onClick={() => {
                  setLang(l.code);        // change language
                  setOpen(false);         // close dropdown
                  if (onLangChange) onLangChange(); // optional callback
                }}
              >
                {l.native}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
