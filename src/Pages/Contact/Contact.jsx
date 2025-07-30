import React, { useState } from "react";
import "./Contact.scss";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  MessageCircle,
  Headphones,
  Globe,
} from "lucide-react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "AZ 1069, Baku city, Nasimi district",
        "A. Salamzade str., 65A",
      ],
      color: "#54e7b3",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+994 12 562 66 13", "Mon-Fri: 9:00 AM - 6:00 PM"],
      color: "#4fd1c5",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["office@tacs.az", "support@tacs.az"],
      color: "#38b2ac",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 - 18:00", "Saturday - Sunday: Closed"],
      color: "#319795",
    },
  ];

  const reasons = [
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Always here to help with your queries",
    },
    {
      icon: MessageCircle,
      title: "Quick Response",
      description: "We respond within 24 hours",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide",
    },
  ];

  return (
    <section className="contactPage">
      {/* Hero Section */}
      {/* <div className="contactHero">
        <div className="heroContainer">
          <span className="heroLabel">Get In Touch</span>
          <h1 className="heroTitle">Contact Us</h1>
          <p className="heroDescription">
            We're here to help you with all your audit, tax, and consulting needs. 
            Reach out to us for professional assistance and expert guidance.
          </p>
        </div>
      </div> */}
      <SectionHeader
        label="Contact Us"
        title="Get In Touch"
        description="We're here to help you with all your audit, tax, and consulting needs. Reach out to us for professional assistance and expert guidance."
      />

      {/* Contact Info Cards */}
      <div className="contactCards">
        <div className="cardsContainer">
          <div className="cardsGrid">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="infoCard"
                style={{ "--card-color": info.color }}
              >
                <div className="cardIcon">
                  <info.icon size={30} />
                </div>
                <h3>{info.title}</h3>
                <div className="cardDetails">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="contactMain">
        <div className="mainContainer">
          <div className="contactGrid">
            {/* Contact Form */}
            <div className="contactForm">
              <div className="formHeader">
                <h2>Send Us a Message</h2>
                <p>
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>
              </div>

              <div className="form">
                <div className="formRow">
                  <div className="formGroup">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="formRow">
                  <div className="formGroup">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+994 XX XXX XX XX"
                    />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="audit">Audit Services</option>
                      <option value="tax">Tax Advisory</option>
                      <option value="consulting">Business Consulting</option>
                      <option value="accounting">Accounting Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="formGroup">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submitBtn"
                  onClick={handleSubmit}
                >
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="contactSidebar">
              {/* Map */}
              <div className="mapCard">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4284903321234!2d49.82659811526699!3d40.37719397936808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd9c2b3ef%3A0xbec3f6d3f2c9b7e4!2sA.Salamzade%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Why Choose Us */}
              <div className="whyCard">
                <h3>Why Contact Us?</h3>
                <div className="reasonsList">
                  {reasons.map((reason, index) => (
                    <div key={index} className="reasonItem">
                      <div className="reasonIcon">
                        <reason.icon size={20} />
                      </div>
                      <div className="reasonContent">
                        <h4>{reason.title}</h4>
                        <p>{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="socialCard">
                <h3>Connect With Us</h3>
                <div className="socialLinks">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
