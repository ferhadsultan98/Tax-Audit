import React, { useState, useEffect } from "react";
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
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    emailjs.init("ov5Cz9eZ6rNC8SLrQ");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus("error");
      return;
    }
    setIsSubmitting(true);

    emailjs
      .send(
        "service_hod87kw",
        "template_wbgbpg4",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "ov5Cz9eZ6rNC8SLrQ"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setSubmitStatus("success");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending failed:", error);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contactSection.info.visit.title"),
      details: [
        t("contactSection.info.visit.details.0"),
        t("contactSection.info.visit.details.1"),
      ],
      color: "#54e7b3",
    },
    {
      icon: Phone,
      title: t("contactSection.info.call.title"),
      details: [
        t("contactSection.info.call.details.0"),
        t("contactSection.info.call.details.1"),
      ],
      color: "#4fd1c5",
    },
    {
      icon: Mail,
      title: t("contactSection.info.email.title"),
      details: [
        t("contactSection.info.email.details.0"),
        t("contactSection.info.email.details.1"),
      ],
      color: "#38b2ac",
    },
    {
      icon: Clock,
      title: t("contactSection.info.hours.title"),
      details: [
        t("contactSection.info.hours.details.0"),
        t("contactSection.info.hours.details.1"),
      ],
      color: "#319795",
    },
  ];

  const reasons = [
    {
      icon: Headphones,
      title: t("contactSection.reasons.support.title"),
      description: t("contactSection.reasons.support.description"),
    },
    {
      icon: MessageCircle,
      title: t("contactSection.reasons.response.title"),
      description: t("contactSection.reasons.response.description"),
    },
    {
      icon: Globe,
      title: t("contactSection.reasons.global.title"),
      description: t("contactSection.reasons.global.description"),
    },
  ];

  return (
    <section className="contactPage">
      <SectionHeader
        label={t("contactSection.header.label")}
        title={t("contactSection.header.title")}
        description={t("contactSection.header.description")}
      />

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

      <div className="contactMain">
        <div className="mainContainer">
          <div className="contactGrid">
            <div className="contactForm">
              <div className="formHeader">
                <h2>{t("contactSection.form.title")}</h2>
                <p>{t("contactSection.form.description")}</p>
              </div>

              <form className="form" onSubmit={handleSubmit}>
                <div className="formRow">
                  <div className="formGroup">
                    <label htmlFor="name">{t("contactSection.form.name")}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("contactSection.form.namePlaceholder")}
                      required
                    />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="email">{t("contactSection.form.email")}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("contactSection.form.emailPlaceholder")}
                      required
                    />
                  </div>
                </div>

                <div className="formRow">
                  <div className="formGroup">
                    <label htmlFor="phone">{t("contactSection.form.phone")}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t("contactSection.form.phonePlaceholder")}
                    />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="subject">{t("contactSection.form.subject")}</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{t("contactSection.form.subjectPlaceholder")}</option>
                      <option value="audit">{t("contactSection.form.subjectOptions.audit")}</option>
                      <option value="valuation">{t("contactSection.form.subjectOptions.valuation")}</option>
                      <option value="tax">{t("contactSection.form.subjectOptions.tax")}</option>
                      <option value="consulting">{t("contactSection.form.subjectOptions.consulting")}</option>
                      <option value="accounting">{t("contactSection.form.subjectOptions.accounting")}</option>
                      <option value="hr">{t("contactSection.form.subjectOptions.hr")}</option>
                    </select>
                  </div>
                </div>

                <div className="formGroup">
                  <label htmlFor="message">{t("contactSection.form.message")}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("contactSection.form.messagePlaceholder")}
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submitBtn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("contactSection.form.sending") : t("contactSection.form.send")}
                  <Send size={18} />
                </button>

                {submitStatus === "success" && (
                  <p className="successMessage">
                    {t("contactSection.form.successMessage")}
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="errorMessage">
                    {t("contactSection.form.errorMessage")}
                  </p>
                )}
              </form>
            </div>

            <div className="contactSidebar">
              <div className="mapCard">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4284903321234!2d49.82659811526699!3d40.37719397936808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd9c2b3ef%3A0xbec3f6d3f2c9b7e2!2sA.Salamzade%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="whyCard">
                <h3>{t("contactSection.sidebar.why.title")}</h3>
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

              {/* <div className="socialCard">
                <h3>{t("contactSection.sidebar.social.title")}</h3>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;