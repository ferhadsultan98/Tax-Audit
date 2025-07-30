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
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeAccordions, setActiveAccordions] = useState({});

  const categories = [
    { id: "general", name: "General Questions", icon: HelpCircle, count: 3 },
    { id: "audit", name: "Audit Services", icon: MessageCircle, count: 3 },
    { id: "tax", name: "Tax & Legal", icon: MessageCircle, count: 2 },
    { id: "accounting", name: "Accounting", icon: MessageCircle, count: 4 },
    { id: "pricing", name: "Pricing & Billing", icon: MessageCircle, count: 3 },
  ];

  const faqData = {
    general: [
      {
        id: 1,
        question: "What services does your company offer?",
        answer:
          "We offer comprehensive professional services including audit services (financial statement audits, special purpose audits, and other audit services), tax and legal services, consulting services, accounting services, and human resources services.",
      },
      {
        id: 2,
        question: "Which industries do you serve?",
        answer:
          "Our audit, tax, and legal services are directed at businesses and individuals operating in various sectors. Services are customized and adapted to specific needs depending on the field of activity, including manufacturing, retail, technology, healthcare, and financial services.",
      },
      {
        id: 3,
        question: "Is compliance with International Standards ensured?",
        answer:
          "Yes, our audit, tax, and legal services are carried out based on international standards and best practices. This means ensuring compliance with principles adopted in local legislation while maintaining the highest global professional standards.",
      },
    ],
    audit: [
      {
        id: 9,
        question: "What does your audit service cover?",
        answer:
          "Our audit services encompass a professional and objective service package aimed at ensuring your organization's financial transparency, risk management, and operational efficiency. We provide thorough examination and verification of financial statements in accordance with international auditing standards.",
      },
      {
        id: 10,
        question: "What types of audit do you perform?",
        answer:
          "We perform various types of audits including: Financial statement audits (annual audits), Special purpose audits (project audits, donor-funded program audits), Internal audits, Compliance audits, Operational audits, and Due diligence reviews. Each audit type is conducted according to relevant standards and regulations.",
      },
      {
        id: 11,
        question: "How long does an audit typically take?",
        answer:
          "The duration of an audit depends on several factors including the size of the organization, complexity of operations, quality of records, and scope of the audit. A typical financial statement audit for a medium-sized company takes 2-4 weeks. We provide a detailed timeline during the planning phase.",
      },
    ],
    tax: [
      {
        id: 15,
        question: "What does your tax service cover?",
        answer:
          "We can support you in tax matters at both practical and strategic levels. Our goal is to minimize your company's tax risks, ensure full compliance with legislation, and optimize your tax burden while maximizing legitimate tax benefits.",
      },
      {
        id: 16,
        question: "What is included in legal services?",
        answer:
          "Our legal services encompass professional support aimed at ensuring that businesses operate in compliance with legislation and in a legally secure manner. This includes corporate law, contract management, regulatory compliance, and legal risk assessment.",
      },
    ],
    accounting: [
      {
        id: 20,
        question: "What accounting services do you provide?",
        answer:
          "Our accounting services include complete organization and maintenance of financial and tax accounting records, preparation and submission of all required declarations and reports, implementation of accounting systems, monthly/quarterly financial reporting, and ongoing bookkeeping support.",
      },
      {
        id: 21,
        question: "Can you help set up our accounting system?",
        answer:
          "Yes, we provide comprehensive accounting system implementation including software selection based on your needs, chart of accounts design, workflow and process development, staff training, and ongoing support. We work with various accounting software platforms.",
      },
      {
        id: 22,
        question: "Do you offer outsourced accounting services?",
        answer:
          "Yes, we offer complete outsourced accounting solutions where we handle all your accounting needs remotely. This includes daily bookkeeping, financial reporting, tax compliance, payroll processing, and management reporting. This allows you to focus on your core business activities.",
      },
      {
        id: 23,
        question: "How do you ensure data security?",
        answer:
          "We take data security very seriously. Our measures include encrypted data transmission, secure cloud storage, restricted access controls, regular backups, confidentiality agreements, and compliance with data protection regulations. Your financial information is always protected.",
      },
    ],
    pricing: [
      {
        id: 24,
        question: "How are your services priced?",
        answer:
          "Our pricing is based on several factors including scope of services, complexity of work, time requirements, and expertise needed. We offer both fixed-fee and hourly billing options. After understanding your needs, we provide a detailed proposal with transparent pricing.",
      },
      {
        id: 25,
        question: "Do you offer package deals?",
        answer:
          "Yes, we offer bundled service packages that provide cost savings for clients who need multiple services. Common packages include audit + tax compliance, full outsourced accounting + tax, and comprehensive business advisory packages. These are customized based on your needs.",
      },
      {
        id: 26,
        question: "What payment terms do you offer?",
        answer:
          "We offer flexible payment terms to accommodate different client needs. Options include monthly retainers for ongoing services, progress billing for project-based work, and annual contracts with quarterly payments. We work with you to find suitable payment arrangements.",
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
      {/* Hero Section */}
      <SectionHeader
        label="salam"
        title="About Us"
        description="Discover our story and mission to create impactful solutions."
      />
      {/* <div className="faqHero">
        <div className="heroContainer">
          <span className="heroLabel">FAQ</span>
          <h1 className="heroTitle">Frequently Asked Questions</h1>
          <p className="heroDescription">
            Find answers to common questions about our services and how we can help your business
          </p>
          
   
          <div className="searchWrapper">
            <div className="searchBox">
              <Search size={20} />
              <input 
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Main FAQ Content */}
      <div className="faqContent">
        <div className="contentContainer">
          {/* Category Tabs */}
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

          {/* FAQ Grid */}
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
                  <h3>No results found</h3>
                  <p>
                    Try searching with different keywords or browse our
                    categories
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="faqSidebar">
              {/* Quick Stats */}
              <div className="statsCard">
                <h3>Quick Stats</h3>
                <div className="statsList">
                  <div className="statItem">
                    <span className="statNumber">19</span>
                    <span className="statLabel">Total Questions</span>
                  </div>
                  <div className="statItem">
                    <span className="statNumber">5</span>
                    <span className="statLabel">Categories</span>
                  </div>
                  <div className="statItem">
                    <span className="statNumber">24/7</span>
                    <span className="statLabel">Support Available</span>
                  </div>
                </div>
              </div>

              {/* Still Need Help */}
              <div className="helpCard">
                <div className="helpIcon">
                  <MessageCircle size={40} />
                </div>
                <h3>Still Need Help?</h3>
                <p>
                  Can't find the answer you're looking for? Our expert team is
                  here to help.
                </p>
                <div className="helpActions">
                  <a href="/contact" className="helpBtn primary">
                    Contact Us
                    <ChevronRight size={18} />
                  </a>
                  <a href="tel:+994125626613" className="helpBtn secondary">
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a href="mailto:office@tacs.az" className="helpBtn secondary">
                    <Mail size={18} />
                    Email Us
                  </a>
                </div>
              </div>

              {/* Popular Topics */}
              <div className="topicsCard">
                <h3>Popular Topics</h3>
                <div className="topicsList">
                  <button className="topicTag">#AuditProcess</button>
                  <button className="topicTag">#TaxCompliance</button>
                  <button className="topicTag">#Pricing</button>
                  <button className="topicTag">#International</button>
                  <button className="topicTag">#Accounting</button>
                  <button className="topicTag">#Consultation</button>
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
