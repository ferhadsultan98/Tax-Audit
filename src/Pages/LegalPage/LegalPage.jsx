import React, { useState } from 'react';
import './LegalPage.scss';
import { Shield, FileText, ChevronRight, Check, AlertCircle, Lock, Users, Globe, Mail } from 'lucide-react';

const LegalPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const navigationItems = [
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'terms', label: 'Terms of Service', icon: FileText }
  ];

  const privacySections = [
    {
      id: 1,
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number, etc.)',
        'Business information (Company name, registration number, tax identification)',
        'Financial information necessary for our services',
        'Usage data and analytics about how you interact with our services'
      ]
    },
    {
      id: 2,
      title: 'How We Use Your Information',
      content: [
        'To provide and maintain our audit, tax, and consulting services',
        'To notify you about changes to our services',
        'To provide customer support and respond to your requests',
        'To detect, prevent and address technical issues',
        'To comply with legal obligations and regulatory requirements'
      ]
    },
    {
      id: 3,
      title: 'Data Protection',
      content: [
        'We implement appropriate technical and organizational security measures',
        'All data is encrypted during transmission and storage',
        'Access to personal data is strictly limited to authorized personnel',
        'Regular security audits and assessments are conducted',
        'We maintain comprehensive data breach response procedures'
      ]
    },
    {
      id: 4,
      title: 'Your Rights',
      content: [
        'Right to access your personal data',
        'Right to rectification of inaccurate data',
        'Right to erasure (right to be forgotten)',
        'Right to restrict processing',
        'Right to data portability',
        'Right to object to processing'
      ]
    },
    {
      id: 5,
      title: 'Cookie Policy',
      content: [
        'We use cookies to enhance your experience on our website',
        'Essential cookies for website functionality',
        'Analytics cookies to understand usage patterns',
        'You can control cookie preferences through your browser settings'
      ]
    },
    {
      id: 6,
      title: 'Contact Information',
      content: [
        'For privacy-related inquiries: privacy@tacs.az',
        'Data Protection Officer: dpo@tacs.az',
        'Address: AZ 1069, Baku city, Nasimi district, A. Salamzade str., 65A',
        'Phone: +994 12 562 66 13'
      ]
    }
  ];

  const termsSections = [
    {
      id: 1,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using our services, you accept and agree to be bound by these Terms',
        'If you do not agree to these Terms, please do not use our services',
        'We reserve the right to update these Terms at any time',
        'Continued use of our services constitutes acceptance of updated Terms'
      ]
    },
    {
      id: 2,
      title: 'Services Description',
      content: [
        'Professional audit and assurance services',
        'Tax planning and compliance services',
        'Business consulting and advisory',
        'Accounting and bookkeeping services',
        'Human resources consulting',
        'All services are subject to applicable laws and regulations'
      ]
    },
    {
      id: 3,
      title: 'User Obligations',
      content: [
        'Provide accurate and complete information',
        'Maintain confidentiality of account credentials',
        'Comply with all applicable laws and regulations',
        'Not use services for any illegal or unauthorized purpose',
        'Promptly notify us of any unauthorized use'
      ]
    },
    {
      id: 4,
      title: 'Fees and Payment',
      content: [
        'Service fees are agreed upon in separate engagement letters',
        'Payment terms as specified in individual contracts',
        'Late payments may incur additional charges',
        'We reserve the right to suspend services for non-payment',
        'All fees are exclusive of applicable taxes unless stated otherwise'
      ]
    },
    {
      id: 5,
      title: 'Limitation of Liability',
      content: [
        'Services provided on an "as is" basis',
        'We do not guarantee specific outcomes or results',
        'Liability limited to the amount of fees paid for services',
        'No liability for indirect, incidental, or consequential damages',
        'Professional indemnity insurance maintained as per regulations'
      ]
    },
    {
      id: 6,
      title: 'Termination',
      content: [
        'Either party may terminate services with written notice',
        'Immediate termination for breach of terms',
        'Outstanding fees remain payable upon termination',
        'Return of client materials upon termination',
        'Confidentiality obligations survive termination'
      ]
    }
  ];

  const currentSections = activeTab === 'privacy' ? privacySections : termsSections;
  const lastUpdated = 'January 25, 2025';
  const effectiveDate = 'February 1, 2025';

  return (
    <section className="legalPages">
      {/* Hero Section */}
      <div className="legalHero">
        <div className="heroContainer">
          <div className="heroContent">
            <span className="heroLabel">Legal Information</span>
            <h1 className="heroTitle">
              {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h1>
            <p className="heroDescription">
              {activeTab === 'privacy' 
                ? 'Learn how we collect, use, and protect your personal information'
                : 'Understanding the terms and conditions of using our services'
              }
            </p>
            <div className="heroMeta">
              <span className="metaItem">
                <AlertCircle size={16} />
                Last Updated: {lastUpdated}
              </span>
              <span className="metaItem">
                <Check size={16} />
                Effective Date: {effectiveDate}
              </span>
            </div>
          </div>
          <div className="heroPattern"></div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="legalNav">
        <div className="navContainer">
          {navigationItems.map(item => (
            <button
              key={item.id}
              className={`navTab ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="legalContent">
        <div className="contentContainer">
          <div className="contentGrid">
            {/* Sidebar */}
            <aside className="contentSidebar">
              <div className="sidebarCard">
                <h3>Quick Navigation</h3>
                <nav className="sidebarNav">
                  {currentSections.map(section => (
                    <a 
                      key={section.id} 
                      href={`#section-${section.id}`}
                      className="navLink"
                    >
                      <ChevronRight size={16} />
                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="sidebarCard highlight">
                <Lock size={32} />
                <h4>Your Privacy Matters</h4>
                <p>We are committed to protecting your personal information and being transparent about our data practices.</p>
              </div>

              <div className="sidebarCard contact">
                <h4>Need Help?</h4>
                <p>If you have questions about our policies, please contact us:</p>
                <a href="mailto:legal@tacs.az" className="contactLink">
                  <Mail size={16} />
                  legal@tacs.az
                </a>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="contentMain">
              <div className="contentIntro">
                <p>
                  {activeTab === 'privacy'
                    ? 'At Tax, Audit and Consulting Services LLC, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.'
                    : 'These Terms of Service ("Terms") govern your use of the services provided by Tax, Audit and Consulting Services LLC ("TACS", "we", "us", or "our"). Please read these Terms carefully before using our services.'
                  }
                </p>
              </div>

              {currentSections.map(section => (
                <div key={section.id} id={`section-${section.id}`} className="contentSection">
                  <h2 className="sectionTitle">
                    <span className="sectionNumber">{section.id}.</span>
                    {section.title}
                  </h2>
                  <ul className="sectionContent">
                    {section.content.map((item, index) => (
                      <li key={index}>
                        <Check size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Additional Information */}
              <div className="additionalInfo">
                <div className="infoCard">
                  <Globe size={24} />
                  <div>
                    <h4>International Compliance</h4>
                    <p>Our policies comply with international data protection standards including GDPR requirements.</p>
                  </div>
                </div>
                <div className="infoCard">
                  <Users size={24} />
                  <div>
                    <h4>Client-Focused Approach</h4>
                    <p>We prioritize transparency and clarity in all our legal documentation and client communications.</p>
                  </div>
                </div>
              </div>

              {/* Agreement Section */}
              <div className="agreementSection">
                <h3>Your Agreement</h3>
                <p>
                  By using our services, you acknowledge that you have read and understood this 
                  {activeTab === 'privacy' ? ' Privacy Policy' : ' Terms of Service'} and agree to be bound by 
                  {activeTab === 'privacy' ? ' our data practices' : ' these terms'}.
                </p>
                <div className="updateNotice">
                  <AlertCircle size={20} />
                  <p>
                    We may update {activeTab === 'privacy' ? 'this Privacy Policy' : 'these Terms'} from 
                    time to time. We will notify you of any changes by posting the new policy on this page 
                    and updating the "Last Updated" date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalPage;