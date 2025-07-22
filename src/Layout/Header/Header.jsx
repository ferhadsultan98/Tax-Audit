import React, { useState, useEffect, useRef } from "react";
import Hamburger from "hamburger-react";
import { FaChevronDown } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "./Header.scss";
import TaxLogo from "../../assets/tax.webp";

const Header = () => {
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
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src={TaxLogo} alt="Tax Logo" />
          </a>
        </div>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul className="navList">
            <li>
              <a href="/about" className="navLink" onClick={handleLinkClick}>
                About us
              </a>
            </li>
            <li className="services" ref={servicesRef}>
              <button
                className="navLink"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                Services
                <FaChevronDown
                  className={`chevron ${servicesDropdown ? "rotate" : ""}`}
                />
              </button>
              <div className={`dropdown ${servicesDropdown ? "active" : ""}`}>
                <a href="/service1" onClick={handleLinkClick}>
                  Audit Xidməti
                </a>
                <a href="/service2" onClick={handleLinkClick}>
                  Mühasibatlıq Xidməti
                </a>
                <a href="/service3" onClick={handleLinkClick}>
                  Vergi və Hüquq Xidməti
                </a>
                <a href="/service4" onClick={handleLinkClick}>
                  Konsaltinq Xidməti
                </a>
              </div>
            </li>
            <li>
              <a href="/blog" className="navLink" onClick={handleLinkClick}>
                Blog
              </a>
            </li>
            <li>
              <a href="/faq" className="navLink" onClick={handleLinkClick}>
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="navLink" onClick={handleLinkClick}>
                Contact
              </a>
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
                <a href="#" onClick={handleLinkClick}>
                  AZ
                </a>
                <a href="#" onClick={handleLinkClick}>
                  RU
                </a>
                <a href="#" onClick={handleLinkClick}>
                  EN
                </a>
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

      {/* Mobile menu overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;
