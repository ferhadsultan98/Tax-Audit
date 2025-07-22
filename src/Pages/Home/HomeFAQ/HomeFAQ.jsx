import React, { useState } from 'react';
import './HomeFAQ.scss';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services does your company offer?",
      answer: "We offer comprehensive professional services including audit services (financial statement audits, special purpose audits, and other audit services), tax and legal services, consulting services, accounting services, and human resources services."
    },
    {
      id: 2,
      question: "What does your audit service cover?",
      answer: "Our audit services encompass a professional and objective service package aimed at ensuring your organization's financial transparency, risk management, and operational efficiency. We provide thorough examination and verification of financial statements in accordance with international auditing standards."
    },
    {
      id: 3,
      question: "What does your tax service cover?",
      answer: "We can support you in tax matters at both practical and strategic levels. Our goal is to minimize your company's tax risks, ensure full compliance with legislation, and optimize your tax burden while maximizing legitimate tax benefits."
    },
    {
      id: 4,
      question: "What is included in legal services?",
      answer: "Our legal services encompass professional support aimed at ensuring that businesses operate in compliance with legislation and in a legally secure manner. This includes corporate law, contract management, regulatory compliance, and legal risk assessment."
    },
    {
      id: 5,
      question: "Which industries do you serve?",
      answer: "Our audit, tax, and legal services are directed at businesses and individuals operating in various sectors. Services are customized and adapted to specific needs depending on the field of activity, including manufacturing, retail, technology, healthcare, and financial services."
    },
    {
      id: 6,
      question: "Is compliance with International Standards ensured?",
      answer: "Yes, our audit, tax, and legal services are carried out based on international standards and best practices. This means ensuring compliance with principles adopted in local legislation while maintaining the highest global professional standards."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="homeFAQ">
      <div className="faqContainer">
        <div className="faqHeader">
          <span className="sectionLabel">FAQ</span>
          <h2 className="sectionTitle">
            Frequently Asked Questions
          </h2>
          <p className="sectionDesc">
            Find answers to common questions about our professional services
          </p>
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
              <h3>Still have questions?</h3>
              <p>Can't find the answer you're looking for? Our team is here to help.</p>
              <a href="/contact" className="contactBtn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;