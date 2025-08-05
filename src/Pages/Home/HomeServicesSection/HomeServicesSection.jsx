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
import { useTranslation } from 'react-i18next';

const HomeServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: PieChart,
      title: t('home.homeServices.financial_consulting'),
      description: t('home.homeServices.financial_consulting_desc'),
      link: '/services/consulting'
    },
    {
      id: 2,
      icon: ClipboardCheck,
      title: t('home.homeServices.audit_assurance'),
      description: t('home.homeServices.audit_assurance_desc'),
      link: '/services/audit'
    },
    {
      id: 3,
      icon: Calculator,
      title: t('home.homeServices.tax_advisory'),
      description: t('home.homeServices.tax_advisory_desc'),
      link: '/services/tax'
    }
  ];

  return (
    <section className="homeServices">
      <div className="servicesContainer">
        <div className="servicesHeader">
          <span className="labelText">{t('home.homeServices.what_we_do')}</span>
          <h2 className="servicesTitle">
            {t('home.homeServices.our_professional_services')}
          </h2>
          <p className="servicesSubtitle">
            {t('home.homeServices.services_subtitle')}
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
                  {t('home.homeServices.learn_more')}
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="hoverBg"></div>
            </div>
          ))}
        </div>

        <div className="servicesFooter">
          <a href="/services" className="allServicesBtn">
            {t('home.homeServices.view_all_services')}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;