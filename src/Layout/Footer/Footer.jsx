import React from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import FooterLogo from "../../assets/taxgreen.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerContainer">
          <div className="footerGrid">
            <div className="footerColumn companyInfo">
              <div className="footerLogo">
                <img src={FooterLogo} alt="TACS Logo" />
              </div>
              <p className="companyDesc">{t("footer.companyDesc")}</p>
            </div>

            <div className="footerColumn">
              <h3 className="columnTitle">{t("footer.quickLinks.title")}</h3>
              <ul className="footerLinks">
                <li>
                  <a href="/about">
                    <ChevronRight size={16} />
                    {t("footer.quickLinks.aboutUs")}
                  </a>
                </li>
                <li>
                  <a href="/services">
                    <ChevronRight size={16} />
                    {t("footer.quickLinks.ourServices")}
                  </a>
                </li>
                <li>
                  <a href="/faq">
                    <ChevronRight size={16} />
                    {t("footer.quickLinks.faq")}
                  </a>
                </li>
                <li>
                  <a href="/blog">
                    <ChevronRight size={16} />
                    {t("footer.quickLinks.blog")}
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <ChevronRight size={16} />
                    {t("footer.quickLinks.contact")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="footerColumn">
              <h3 className="columnTitle">{t("footer.services.title")}</h3>
              <ul className="footerLinks">
                <li>
                  <a href="/services/audit">
                    <ChevronRight size={16} />
                    {t("footer.services.auditAssurance")}
                  </a>
                </li>
                <li>
                  <a href="/services/tax">
                    <ChevronRight size={16} />
                    {t("footer.services.taxAdvisory")}
                  </a>
                </li>
                <li>
                  <a href="/services/consulting">
                    <ChevronRight size={16} />
                    {t("footer.services.businessConsulting")}
                  </a>
                </li>
                <li>
                  <a href="/services/accounting">
                    <ChevronRight size={16} />
                    {t("footer.services.accountingServices")}
                  </a>
                </li>
                <li>
                  <a href="/services/legal">
                    <ChevronRight size={16} />
                    {t("footer.services.legalServices")}
                  </a>
                </li>
                <li>
                  <a href="/services/hr">
                    <ChevronRight size={16} />
                    {t("footer.services.humanResources")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="footerColumn">
              <h3 className="columnTitle">{t("footer.contactUs.title")}</h3>
              <div className="contactInfo">
                <div className="contactItem">
                  <div className="iconBox">
                    <MapPin size={18} />
                  </div>
                  <div className="contactText">
                    <p>{t("footer.contactUs.address")}</p>
                  </div>
                </div>
                <div className="contactItem">
                  <div className="iconBox">
                    <Phone size={18} />
                  </div>
                  <div className="contactText">
                    <a href="tel:+994125626613">+994 12 562 66 13</a>
                  </div>
                </div>
                <div className="contactItem">
                  <div className="iconBox">
                    <Mail size={18} />
                  </div>
                  <div className="contactText">
                    <a href="mailto:office@tacs.az">office@tacs.az</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerContainer">
          <div className="bottomContent">
            <div className="copyright">
              <p>{t("footer.bottom.copyright")}</p>
            </div>
            <div className="createdBy">
              <p>
                {t("footer.bottom.createdBy")}{" "}
                <a href="https://pmsystems.az" target="_blank" rel="noopener noreferrer">
                  PM Systems
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;