import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { FaChevronDown } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "./Header.scss";
import TaxLogo from "../../assets/tax.webp";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setServicesDropdown(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdown(false);
    handleLinkClick();
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={TaxLogo} alt="Tax Logo" />
          </Link>
        </div>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul className="navList">
            <li>
              <Link to="/about" className="navLink" onClick={handleLinkClick}>
                {t("header.about_us")}
              </Link>
            </li>
            <li className="services" ref={servicesRef}>
              <button
                className="navLink"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                {t("header.services")}
                <FaChevronDown
                  className={`chevron ${servicesDropdown ? "rotate" : ""}`}
                />
              </button>
              <div className={`dropdown ${servicesDropdown ? "active" : ""}`}>
                <Link to="/services/audit" onClick={handleLinkClick}>
                  {t("header.services_dropdown.audit")}
                </Link>
                <Link to="/services/valuation" onClick={handleLinkClick}>
                  {t("header.services_dropdown.valuation")}
                </Link>
                <Link to="/services/tax-legal" onClick={handleLinkClick}>
                  {t("header.services_dropdown.tax_legal")}
                </Link>
                <Link to="/services/consulting" onClick={handleLinkClick}>
                  {t("header.services_dropdown.consulting")}
                </Link>
                <Link to="/services/accounting" onClick={handleLinkClick}>
                  {t("header.services_dropdown.accounting")}
                </Link>
                <Link to="/services/hr" onClick={handleLinkClick}>
                  {t("header.services_dropdown.humanresources")}
                </Link>
              </div>
            </li>
            <li>
              <Link to="/blog" className="navLink" onClick={handleLinkClick}>
                {t("header.blog")}
              </Link>
            </li>
            <li>
              <Link to="/faq" className="navLink" onClick={handleLinkClick}>
                {t("header.faq")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navLink" onClick={handleLinkClick}>
                {t("header.contact")}
              </Link>
            </li>
            <li className="language" ref={langRef}>
              <button
                className="langButton"
                onClick={() => setLangDropdown(!langDropdown)}
              >
                <i>
                  <TbWorld fontSize={30} />
                </i>
              </button>
              <div className={`langOptions ${langDropdown ? "active" : ""}`}>
                <Link to="#" onClick={() => changeLanguage("az")}>
                  AZ
                </Link>
                <Link to="#" onClick={() => changeLanguage("en")}>
                  EN
                </Link>
                <Link to="#" onClick={() => changeLanguage("ru")}>
                  RU
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        <div className="hamburger-wrapper">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            duration={0.4}
            distance="sm"
            color="#ffffff"
            rounded
          />
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;