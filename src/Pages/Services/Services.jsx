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
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'audit',
      icon: FileCheck,
      title: t('servicesSection.audit.title'),
      description: t('servicesSection.audit.description'),
      features: [
        t('servicesSection.audit.features.0'),
        t('servicesSection.audit.features.1'),
        t('servicesSection.audit.features.2'),
        t('servicesSection.audit.features.3')
      ],
      color: '#54e7b3'
    },
    {
      id: 'valuation',
      icon: Calculator,
      title: t('servicesSection.valuation.title'),
      description: t('servicesSection.valuation.description'),
      features: [
        t('servicesSection.valuation.features.0'),
        t('servicesSection.valuation.features.1')
      ],
      color: '#4fd1c5'
    },
    {
      id: 'tax-legal',
      icon: Scale,
      title: t('servicesSection.tax-legal.title'),
      description: t('servicesSection.tax-legal.description'),
      features: [
        t('servicesSection.tax-legal.features.0'),
        t('servicesSection.tax-legal.features.1'),
        t('servicesSection.tax-legal.features.2')
      ],
      color: '#38b2ac'
    },
    {
      id: 'consulting',
      icon: Lightbulb,
      title: t('servicesSection.consulting.title'),
      description: t('servicesSection.consulting.description'),
      features: [
        t('servicesSection.consulting.features.0'),
        t('servicesSection.consulting.features.1'),
        t('servicesSection.consulting.features.2')
      ],
      color: '#319795'
    },
    {
      id: 'accounting',
      icon: BookOpen,
      title: t('servicesSection.accounting.title'),
      description: t('servicesSection.accounting.description'),
      features: [
        t('servicesSection.accounting.features.0'),
        t('servicesSection.accounting.features.1'),
        t('servicesSection.accounting.features.2')
      ],
      color: '#2c7a7b'
    },
    {
      id: 'hr',
      icon: Users,
      title: t('servicesSection.hr.title'),
      description: t('servicesSection.hr.description'),
      features: [
        t('servicesSection.hr.features.0'),
        t('servicesSection.hr.features.1'),
        t('servicesSection.hr.features.2'),
        t('servicesSection.hr.features.3'),
        t('servicesSection.hr.features.4')
      ],
      color: '#285e61'
    }
  ];

  return (
    <section className="servicesPage">
      <SectionHeader
        label={t('servicesSection.sectionHeader.label')}
        title={t('servicesSection.sectionHeader.title')}
        description={t('servicesSection.sectionHeader.description')}
      />

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
                  {t('servicesSection.learnMore')}
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="servicesCTA">
        <div className="ctaContainer">
          <h2>{t('servicesSection.cta.title')}</h2>
          <p>{t('servicesSection.cta.description')}</p>
          <Link to="/contact" className="ctaButton">
            {t('servicesSection.cta.button')}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;