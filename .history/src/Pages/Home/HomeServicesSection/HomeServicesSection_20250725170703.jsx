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
import HomeServices from './HomeServices.json';

const iconMap = {
  PieChart: PieChart,
  ClipboardCheck: ClipboardCheck,
  Calculator: Calculator,
  Shield: Shield,
  Coins: Coins,
  TrendingUp: TrendingUp
};

const HomeServicesSection = () => {
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
          {HomeServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="serviceCard">
                <div className="cardContent">
                  <div className="iconWrapper">
                    <Icon size={32} />
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
            );
          })}
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