import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
    const { t } = useTranslation();


    return (
        <header className="header">
            <img src="../public/assets/logo.jpg" alt="logo" />
            <nav className="">
                <a href="">{t("home")}</a>
                <a href="">{t("catalog")}</a>
                <a href="">{t("about")}</a>
                <a href="">{t("contact")}</a>
            </nav>
            <LanguageSwitcher />
        </header>
    )
}

export default Header;