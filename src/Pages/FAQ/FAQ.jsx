import React, { useState } from "react";
import "./FAQ.scss";
import {
  Plus,
  Minus,
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const FAQ = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeAccordions, setActiveAccordions] = useState({});

  const categories = [
    { id: "general", name: t("faqSection.categories.general"), icon: HelpCircle, count: 2 },
    { id: "audit", name: t("faqSection.categories.audit"), icon: MessageCircle, count: 1 },
    { id: "tax", name: t("faqSection.categories.tax"), icon: MessageCircle, count: 3 },
  ];

  const faqData = {
    general: [
      {
        id: 1,
        question: t("faqSection.general.q1.question"),
        answer: t("faqSection.general.q1.answer"),
      },
      {
        id: 2,
        question: t("faqSection.general.q2.question"),
        answer: t("faqSection.general.q2.answer"),
      },
    ],
    audit: [
      {
        id: 3,
        question: t("faqSection.audit.q1.question"),
        answer: t("faqSection.audit.q1.answer"),
      },
    ],
    tax: [
      {
        id: 4,
        question: t("faqSection.tax.q1.question"),
        answer: t("faqSection.tax.q1.answer"),
      },
      {
        id: 5,
        question: t("faqSection.tax.q2.question"),
        answer: t("faqSection.tax.q2.answer"),
      },
      {
        id: 6,
        question: t("faqSection.tax.q3.question"),
        answer: t("faqSection.tax.q3.answer"),
      },
    ],
  };

  const toggleAccordion = (categoryId, questionId) => {
    setActiveAccordions((prev) => ({
      ...prev,
      [`${categoryId}-${questionId}`]: !prev[`${categoryId}-${questionId}`],
    }));
  };

  const filteredFAQs = () => {
    const categoryFAQs = faqData[activeCategory] || [];
    if (!searchTerm) return categoryFAQs;

    return categoryFAQs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <section className="faqPage">
      <SectionHeader
        label={t("faqSection.header.label")}
        title={t("faqSection.header.title")}
        description={t("faqSection.header.description")}
      />
      <div className="faqContent">
        <div className="contentContainer">
          <div className="categoryTabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`categoryTab ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <category.icon size={20} />
                <span className="tabName">{category.name}</span>
                <span className="tabCount">{category.count}</span>
              </button>
            ))}
          </div>
          <div className="faqGrid">
            <div className="faqList">
              {filteredFAQs().length > 0 ? (
                filteredFAQs().map((faq) => (
                  <div
                    key={faq.id}
                    className={`faqItem ${
                      activeAccordions[`${activeCategory}-${faq.id}`]
                        ? "active"
                        : ""
                    }`}
                  >
                    <button
                      className="faqQuestion"
                      onClick={() => toggleAccordion(activeCategory, faq.id)}
                    >
                      <h3>{faq.question}</h3>
                      <div className="iconWrapper">
                        {activeAccordions[`${activeCategory}-${faq.id}`] ? (
                          <Minus size={24} />
                        ) : (
                          <Plus size={24} />
                        )}
                      </div>
                    </button>
                    <div className="faqAnswer">
                      <div className="answerContent">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="noResults">
                  <HelpCircle size={48} />
                  <h3>{t("faqSection.noResults.title")}</h3>
                  <p>{t("faqSection.noResults.description")}</p>
                </div>
              )}
            </div>
            <aside className="faqSidebar">
              <div className="statsCard">
                <h3>{t("faqSection.sidebar.stats.title")}</h3>
                <div className="statsList">
                  <div className="statItem">
                    <span className="statNumber">6</span>
                    <span className="statLabel">{t("faqSection.sidebar.stats.totalQuestions")}</span>
                  </div>
                  <div className="statItem">
                    <span className="statNumber">3</span>
                    <span className="statLabel">{t("faqSection.sidebar.stats.categories")}</span>
                  </div>
                  <div className="statItem">
                    <span className="statNumber">24/7</span>
                    <span className="statLabel">{t("faqSection.sidebar.stats.support")}</span>
                  </div>
                </div>
              </div>
              <div className="helpCard">
                <div className="helpIcon">
                  <MessageCircle size={40} />
                </div>
                <h3>{t("faqSection.sidebar.help.title")}</h3>
                <p>{t("faqSection.sidebar.help.description")}</p>
                <div className="helpActions">
                  <a href="/contact" className="helpBtn primary">
                    {t("faqSection.sidebar.help.contact")}
                    <ChevronRight size={18} />
                  </a>
                  <a href="tel:+994125626613" className="helpBtn secondary">
                    <Phone size={18} />
                    {t("faqSection.sidebar.help.call")}
                  </a>
                  <a href="mailto:office@tacs.az" className="helpBtn secondary">
                    <Mail size={18} />
                    {t("faqSection.sidebar.help.email")}
                  </a>
                </div>
              </div>
              <div className="topicsCard">
                <h3>{t("faqSection.sidebar.topics.title")}</h3>
                <div className="topicsList">
                  <button className="topicTag">{t("faqSection.sidebar.topics.audit")}</button>
                  <button className="topicTag">{t("faqSection.sidebar.topics.taxCompliance")}</button>
                  <button className="topicTag">{t("faqSection.sidebar.topics.legalServices")}</button>
                  <button className="topicTag">{t("faqSection.sidebar.topics.internationalStandards")}</button>
                  <button className="topicTag">{t("faqSection.sidebar.topics.consulting")}</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;