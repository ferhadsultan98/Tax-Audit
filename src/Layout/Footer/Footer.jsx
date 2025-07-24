import React from 'react';
import './Footer.scss';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Twitter, ChevronRight } from 'lucide-react';
import FooterLogo from '../../assets/taxgreen.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerContainer">
          <div className="footerGrid">
            <div className="footerColumn companyInfo">
              <div className="footerLogo">
                <img src={FooterLogo} alt="TACS Logo" />
              </div>
              <p className="companyDesc">
                Leading provider of professional audit, tax, and consulting services. 
                We help businesses achieve their goals through innovative solutions 
                and expert guidance.
              </p>
              <div className="socialLinks">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="footerColumn">
              <h3 className="columnTitle">Quick Links</h3>
              <ul className="footerLinks">
                <li>
                  <a href="/about">
                    <ChevronRight size={16} />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services">
                    <ChevronRight size={16} />
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/team">
                    <ChevronRight size={16} />
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/careers">
                    <ChevronRight size={16} />
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/blog">
                    <ChevronRight size={16} />
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footerColumn">
              <h3 className="columnTitle">Our Services</h3>
              <ul className="footerLinks">
                <li>
                  <a href="/services/audit">
                    <ChevronRight size={16} />
                    Audit & Assurance
                  </a>
                </li>
                <li>
                  <a href="/services/tax">
                    <ChevronRight size={16} />
                    Tax Advisory
                  </a>
                </li>
                <li>
                  <a href="/services/consulting">
                    <ChevronRight size={16} />
                    Business Consulting
                  </a>
                </li>
                <li>
                  <a href="/services/accounting">
                    <ChevronRight size={16} />
                    Accounting Services
                  </a>
                </li>
                <li>
                  <a href="/services/legal">
                    <ChevronRight size={16} />
                    Legal Services
                  </a>
                </li>
              </ul>
            </div>

            <div className="footerColumn">
              <h3 className="columnTitle">Contact Us</h3>
              <div className="contactInfo">
                <div className="contactItem">
                  <div className="iconBox">
                    <MapPin size={18} />
                  </div>
                  <div className="contactText">
                    <p>AZ 1069, Baku city, Nasimi district,</p>
                    <p>A. Salamzade str., 65A</p>
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
              <p>© {new Date().getFullYear()} TACS. All rights reserved.</p>
            </div>
            <div className="bottomLinks">
              <a href="/privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="/terms">Terms of Service</a>
            </div>
            <div className="createdBy">
              <p>Created by <a href="https://pmsystems.az" target="_blank" rel="noopener noreferrer">PM Systems</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;