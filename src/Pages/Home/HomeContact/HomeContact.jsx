import React from 'react';
import './HomeContact.scss';
import { MapPin, Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';

const HomeContact = () => {
  return (
    <section className="homeContact">
      <div className="contactContainer">
        <div className="contactContent">
          {/* Left Side - Text Content */}
          <div className="contactText">
            <span className="sectionLabel">Get In Touch</span>
            <h2 className="contactTitle">
              Let's Start a <span className="highlight">Conversation</span>
            </h2>
            <p className="contactDesc">
              Ready to take your business to the next level? Our expert team is here to provide 
              professional audit, tax, and consulting services tailored to your needs.
            </p>
            <div className="ctaButtons">
              <a href="/contact" className="ctaBtn primary">
                <MessageCircle size={20} />
                Contact Us
                <ArrowRight size={18} />
              </a>
              <a href="tel:+994125626613" className="ctaBtn secondary">
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>

          {/* Right Side - Contact Info Cards */}
          <div className="contactCards">
            <div className="infoCard">
              <div className="cardIcon">
                <Phone size={24} />
              </div>
              <div className="cardContent">
                <h4>Call Us</h4>
                <a href="tel:+994125626613">+994 12 562 66 13</a>
                <span className="availability">Mon-Fri, 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            <div className="infoCard">
              <div className="cardIcon">
                <Mail size={24} />
              </div>
              <div className="cardContent">
                <h4>Email Us</h4>
                <a href="mailto:office@tacs.az">office@tacs.az</a>
                <span className="availability">We reply within 24 hours</span>
              </div>
            </div>

            <div className="infoCard wide">
              <div className="cardIcon">
                <MapPin size={24} />
              </div>
              <div className="cardContent">
                <h4>Visit Our Office</h4>
                <p>AZ 1069, Baku city, Nasimi district, A. Salamzade str., 65A</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mapLink">
                  Get Directions
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="backgroundPattern">
          <div className="patternCircle circle1"></div>
          <div className="patternCircle circle2"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;