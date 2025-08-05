import React, { useState } from 'react';
import './HomeFAQ.scss';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HomeFAQ = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { id: 1, question: t('home.homeFaq.faq.1.question'), answer: t('home.homeFaq.faq.1.answer') },
    { id: 2, question: t('home.homeFaq.faq.2.question'), answer: t('home.homeFaq.faq.2.answer') },
    { id: 3, question: t('home.homeFaq.faq.3.question'), answer: t('home.homeFaq.faq.3.answer') },
    { id: 4, question: t('home.homeFaq.faq.4.question'), answer: t('home.homeFaq.faq.4.answer') },
    { id: 5, question: t('home.homeFaq.faq.5.question'), answer: t('home.homeFaq.faq.5.answer') },
    { id: 6, question: t('home.homeFaq.faq.6.question'), answer: t('home.homeFaq.faq.6.answer') },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="homeFAQ">
      <div className="faqContainer">
        <div className="faqHeader">
          <span className="sectionLabel">{t('home.homeFaq.sectionLabel')}</span>
          <h2 className="sectionTitle">{t('home.homeFaq.sectionTitle')}</h2>
          <p className="sectionDesc">{t('home.homeFaq.sectionDesc')}</p>
        </div>

        <div className="faqContent">
          <div className="faqAccordion">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`accordionItem ${activeIndex === index ? 'active' : ''}`}
              >
                <button
                  className="accordionHeader"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="questionWrapper">
                    <span className="questionNumber">0{faq.id}</span>
                    <h3 className="questionText">{faq.question}</h3>
                  </div>
                  <div className="iconWrapper">
                    {activeIndex === index ? (
                      <Minus size={24} />
                    ) : (
                      <Plus size={24} />
                    )}
                  </div>
                </button>
                <div className="accordionContent">
                  <div className="contentInner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faqSidebar">
            <div className="helpCard">
              <div className="helpIcon">
                <HelpCircle size={40} />
              </div>
              <h3>{t('home.homeFaq.helpCardTitle')}</h3>
              <p>{t('home.homeFaq.helpCardDesc')}</p>
              <a href="/contact" className="contactBtn">
                {t('home.homeFaq.contactBtn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;