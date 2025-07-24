import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetails.scss';
import { 
  FileCheck, 
  Calculator, 
  Scale, 
  Lightbulb, 
  BookOpen, 
  Users,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

const ServiceDetails = () => {
  const { serviceId } = useParams(); // Extract serviceId from URL

  const servicesData = {
    'audit': {
      icon: FileCheck,
      title: 'Audit Services',
      subtitle: 'Ensuring Financial Transparency and Compliance',
      description: 'Our audit services provide comprehensive examination and verification of your financial statements, ensuring compliance with international and national standards while identifying opportunities for improvement.',
      features: [
        {
          title: 'Financial Statement Audit',
          description: 'Complete audit of financial statements in accordance with International Standards on Auditing (ISA) and national regulations, providing stakeholders with confidence in your financial reporting.'
        },
        {
          title: 'Special Purpose Audits',
          description: 'Customized audit solutions for specific needs including project audits, donor-funded program audits, and internal control assessments tailored to your requirements.'
        },
        {
          title: 'Financial Analysis & Verification',
          description: 'In-depth analysis and verification of financial data to ensure accuracy, identify discrepancies, and provide insights for better financial management.'
        },
        {
          title: 'Risk Management & Recommendations',
          description: 'Comprehensive risk assessment with practical recommendations to strengthen internal controls and improve operational efficiency.'
        }
      ],
      benefits: [
        'Enhanced credibility with stakeholders',
        'Improved internal controls',
        'Regulatory compliance assurance',
        'Risk identification and mitigation',
        'Operational efficiency improvements',
        'Better decision-making insights'
      ]
    },
    'valuation': {
      icon: Calculator,
      title: 'Valuation Services',
      subtitle: 'Professional Asset Valuation and Expertise',
      description: 'Our valuation services provide accurate and reliable assessments of your assets, helping you make informed decisions for transactions, financial reporting, and strategic planning.',
      features: [
        {
          title: 'Property Valuation',
          description: 'Professional valuation of real estate, commercial properties, and industrial assets using internationally recognized methodologies and standards.'
        },
        {
          title: 'Asset Value Expertise',
          description: 'Expert determination of fair market value for various assets including equipment, inventory, intangible assets, and business valuations.'
        }
      ],
      benefits: [
        'Accurate asset valuations',
        'Compliance with accounting standards',
        'Support for M&A transactions',
        'Insurance claim substantiation',
        'Tax planning optimization',
        'Investment decision support'
      ]
    },
    'tax-legal': {
      icon: Scale,
      title: 'Tax and Legal Services',
      subtitle: 'Expert Guidance for Compliance and Optimization',
      description: 'Navigate complex tax regulations and legal requirements with our comprehensive advisory services, ensuring compliance while optimizing your tax position.',
      features: [
        {
          title: 'Tax Planning & Consulting',
          description: 'Strategic tax planning to minimize liabilities, optimize tax positions, and ensure full compliance with local and international tax regulations.'
        },
        {
          title: 'Legal Documentation',
          description: 'Preparation of legal documents, contracts, and agreements with expert legal opinions to protect your business interests.'
        },
        {
          title: 'Audit Support',
          description: 'Professional representation and support during tax inspections, audits, and disputes with tax authorities.'
        }
      ],
      benefits: [
        'Tax optimization strategies',
        'Legal compliance assurance',
        'Risk mitigation',
        'Expert representation',
        'Cost-effective solutions',
        'Peace of mind'
      ]
    },
    'consulting': {
      icon: Lightbulb,
      title: 'Consulting Services',
      subtitle: 'Strategic Solutions for Business Excellence',
      description: 'Transform your business with our strategic consulting services, designed to optimize operations, improve performance, and drive sustainable growth.',
      features: [
        {
          title: 'Strategic Consulting',
          description: 'Development of comprehensive business strategies, market entry plans, and growth initiatives aligned with your vision and objectives.'
        },
        {
          title: 'Operational Excellence',
          description: 'Process optimization, efficiency improvements, and operational restructuring to enhance productivity and reduce costs.'
        },
        {
          title: 'Management Systems',
          description: 'Design and implementation of robust internal management systems, governance structures, and performance measurement frameworks.'
        }
      ],
      benefits: [
        'Improved operational efficiency',
        'Strategic clarity and direction',
        'Enhanced competitiveness',
        'Better resource utilization',
        'Sustainable growth strategies',
        'Performance optimization'
      ]
    },
    'accounting': {
      icon: BookOpen,
      title: 'Accounting Services',
      subtitle: 'Complete Financial Management Solutions',
      description: 'Streamline your financial operations with our comprehensive accounting services, ensuring accurate record-keeping and timely compliance with all regulatory requirements.',
      features: [
        {
          title: 'Financial & Tax Accounting',
          description: 'Complete organization and maintenance of financial and tax accounting records in compliance with national standards and regulations.'
        },
        {
          title: 'Declaration Services',
          description: 'Timely preparation and submission of all required tax declarations, financial reports, and regulatory filings.'
        },
        {
          title: 'System Implementation',
          description: 'Setup and ongoing support of accounting systems tailored to your business needs, including software selection and process design.'
        }
      ],
      benefits: [
        'Accurate financial records',
        'Timely regulatory compliance',
        'Reduced administrative burden',
        'Better financial visibility',
        'Cost-effective solutions',
        'Expert ongoing support'
      ]
    },
    'hr': {
      icon: Users,
      title: 'Human Resources Services',
      subtitle: 'Comprehensive HR Solutions for Your Business',
      description: 'Build and maintain a strong workforce with our full-spectrum HR services, from recruitment to strategic HR management and compliance.',
      features: [
        {
          title: 'Recruitment & Documentation',
          description: 'End-to-end recruitment services and complete personnel documentation management ensuring compliance with labor laws.'
        },
        {
          title: 'HR Policy Development',
          description: 'Creation of comprehensive HR policies, procedures, and employee handbooks aligned with best practices and legal requirements.'
        },
        {
          title: 'Strategic HR Services',
          description: 'Strategic workforce planning, organizational design, and talent management to align human capital with business objectives.'
        },
        {
          title: 'Health & Safety',
          description: 'Development and implementation of workplace health and safety programs ensuring compliance and employee wellbeing.'
        },
        {
          title: 'HR Audit',
          description: 'Comprehensive HR audits to assess compliance, identify risks, and recommend improvements in HR practices and procedures.'
        }
      ],
      benefits: [
        'Improved talent acquisition',
        'Legal compliance assurance',
        'Enhanced employee engagement',
        'Reduced HR risks',
        'Streamlined HR processes',
        'Strategic workforce alignment'
      ]
    }
  };

  const service = servicesData[serviceId] || servicesData['audit'];

  return (
    <section className="serviceDetails">
      {/* Hero Section */}
      <div className="detailsHero">
        <div className="heroContainer">
          <div className="heroContent">
            <div className="heroText">
              <div className="iconBox">
                <service.icon size={40} />
              </div>
              <h1>{service.title}</h1>
              <p className="subtitle">{service.subtitle}</p>
              <p className="description">{service.description}</p>
            </div>
            <div className="heroImage">
              <div className="imageWrapper">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop" alt={service.title} />
              </div>
              <div className="floatingCard">
                <div className="cardIcon">
                  <CheckCircle size={24} />
                </div>
                <h3>Trusted Partner</h3>
                <p>15+ years of excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="featuresSection">
        <div className="featuresContainer">
          <div className="servicesectionHeader">
            <h2>What We Offer</h2>
            <p>Comprehensive solutions tailored to your specific needs</p>
          </div>
          <div className="featuresGrid">
            {service.features.map((feature, index) => (
              <div key={index} className="featureCard">
                <div className="featureIcon">
                  <CheckCircle size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefitsSection">
        <div className="benefitsContainer">
          <div className="benefitsContent">
            <div className="benefitsText">
              <h2>Key Benefits</h2>
              <ul className="benefitsList">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>
                    <CheckCircle size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="benefitsImage">
              <div className="imageBox">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop" alt="Benefits" />
              </div>
              <div className="statsOverlay">
                <div className="statItem">
                  <h4>500+</h4>
                  <p>Happy Clients</p>
                </div>
                <div className="statItem">
                  <h4>98%</h4>
                  <p>Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ctaSection">
        <div className="ctaContainer">
          <h2>Ready to Get Started?</h2>
          <p>Let our experts help you achieve your business goals with professional {service.title.toLowerCase()}</p>
          <div className="ctaButtons">
            <Link to="/contact" className="ctaButton primary">
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
            <a href="tel:+994125626613" className="ctaButton secondary">
              <Phone size={20} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;