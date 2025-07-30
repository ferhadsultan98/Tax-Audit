import React from 'react';
import { Link } from 'react-router-dom';
import './Services.scss';
import { 
  FileCheck, 
  Calculator, 
  Scale, 
  Lightbulb, 
  BookOpen, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

const Services = () => {
  const services = [
    {
      id: 'audit',
      icon: FileCheck,
      title: 'Audit Services',
      description: 'Comprehensive audit solutions ensuring compliance with international and national standards',
      features: [
        'Audit of financial statements in accordance with international and national standards',
        'Special purpose audits (project, donor, internal needs)',
        'Verification and analysis of financial statements',
        'Audit recommendations and risk management'
      ],
      color: '#54e7b3'
    },
    {
      id: 'valuation',
      icon: Calculator,
      title: 'Valuation Services',
      description: 'Professional valuation and expertise services for accurate asset assessment',
      features: [
        'Professional valuation of property and other assets',
        'Expertise services for determining asset values'
      ],
      color: '#4fd1c5'
    },
    {
      id: 'tax-legal',
      icon: Scale,
      title: 'Tax and Legal Services',
      description: 'Expert tax planning and legal support to ensure full compliance',
      features: [
        'Tax planning, consulting and compliance services',
        'Preparation of legal documents and legal opinions',
        'Support during tax inspections and audits'
      ],
      color: '#38b2ac'
    },
    {
      id: 'consulting',
      icon: Lightbulb,
      title: 'Consulting Services',
      description: 'Strategic business consulting to optimize operations and improve performance',
      features: [
        'Strategic and operational consulting',
        'Improvement of internal management systems',
        'Business optimization advice'
      ],
      color: '#319795'
    },
    {
      id: 'accounting',
      icon: BookOpen,
      title: 'Accounting Services',
      description: 'Complete accounting solutions for efficient financial management',
      features: [
        'Organization of financial and tax accounting',
        'Preparation and submission of declarations',
        'Establishment and support of accounting systems'
      ],
      color: '#2c7a7b'
    },
    {
      id: 'hr',
      icon: Users,
      title: 'Human Resources Services',
      description: 'Comprehensive HR solutions to manage and develop your workforce',
      features: [
        'Recruitment and personnel documentation',
        'Development of HR policies',
        'Strategic HR services',
        'Health and safety',
        'Human Resources Audit'
      ],
      color: '#285e61'
    }
  ];

  return (
    <section className="servicesPage">
      {/* Hero Section */}
      {/* <div className="servicesHero">
        <div className="heroContainer">
          <span className="heroLabel">Our Services</span>
          <h1 className="heroTitle">Professional Solutions for Your Business</h1>
          <p className="heroDescription">
            We offer comprehensive professional services tailored to meet your business needs 
            and help you achieve sustainable growth
          </p>
        </div>
      </div> */}
     <SectionHeader
        label="Our Services"
        title="Professional Solutions for Your Business"
        description="We offer comprehensive professional services tailored to meet your business needs 
            and help you achieve sustainable growth"
      />

      {/* Services Grid */}
      <div className="servicesContent">
        <div className="servicesContainer">
          <div className="servicesGrid">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="serviceCard"
                style={{ '--service-color': service.color }}
              >
                <div className="cardHeader">
                  <div className="iconWrapper">
                    <service.icon size={32} />
                  </div>
                  <h3 className="serviceTitle">{service.title}</h3>
                </div>
                
                <p className="serviceDescription">{service.description}</p>
                
                <ul className="serviceFeatures">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/services/${service.id}`} 
                  className="serviceLink"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="servicesCTA">
        <div className="ctaContainer">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss how we can help your business thrive</p>
          <Link to="/contact" className="ctaButton">
            Get In Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;