import React from 'react';
import './HomeServicesSection.scss';
import { 
  PieChart, 
  ClipboardCheck, 
  Calculator, 
  Shield, 
  Coins, 
  TrendingUp,
  ArrowRight 
} from 'lucide-react';

const HomeServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: PieChart,
      title: 'Financial Consulting',
      description: 'Strategic financial planning and analysis to optimize your business performance and drive sustainable growth.',
      link: '/services/consulting'
    },
    {
      id: 2,
      icon: ClipboardCheck,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services ensuring compliance, transparency, and confidence in your financial reporting.',
      link: '/services/audit'
    },
    {
      id: 3,
      icon: Calculator,
      title: 'Tax Advisory',
      description: 'Expert tax planning and compliance services to minimize liabilities and maximize your financial efficiency.',
      link: '/services/tax'
    },
    // {
    //   id: 4,
    //   icon: Shield,
    //   title: 'Risk Management',
    //   description: 'Identify, assess, and mitigate business risks with our comprehensive risk management solutions.',
    //   link: '/services/risk'
    // },
    // {
    //   id: 5,
    //   icon: Coins,
    //   title: 'Corporate Finance',
    //   description: 'Strategic corporate finance advisory for mergers, acquisitions, and capital restructuring initiatives.',
    //   link: '/services/finance'
    // },
    // {
    //   id: 6,
    //   icon: TrendingUp,
    //   title: 'Business Analytics',
    //   description: 'Transform your data into actionable insights with our advanced business analytics and reporting services.',
    //   link: '/services/analytics'
    // }
  ];

  return (
    <section className="homeServices">
      <div className="servicesContainer">
        <div className="servicesHeader">
          <span className="labelText">What We Do</span>
          <h2 className="servicesTitle">
            Our Professional Services
          </h2>
          <p className="servicesSubtitle">
            We deliver comprehensive solutions tailored to meet your unique business needs
          </p>
        </div>

        <div className="servicesGrid">
          {services.map((service) => (
            <div key={service.id} className="serviceCard">
              <div className="cardContent">
                <div className="iconWrapper">
                  <service.icon size={32} />
                </div>
                <h3 className="serviceTitle">{service.title}</h3>
                <p className="serviceDesc">{service.description}</p>
                <a href={service.link} className="serviceLink">
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="hoverBg"></div>
            </div>
          ))}
        </div>

        <div className="servicesFooter">
          <a href="/services" className="allServicesBtn">
            View All Services
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;