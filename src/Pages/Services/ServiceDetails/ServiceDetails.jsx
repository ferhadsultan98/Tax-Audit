import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ServiceDetails.scss";
import {
  FileCheck,
  Calculator,
  Scale,
  Lightbulb,
  BookOpen,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../Components/Breadcrumb/Breadcrumb";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import ServiceDetailsImage from '../../../assets/af1.jpg'

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { serviceId } = useParams();

  const servicesData = {
    audit: {
      icon: FileCheck,
      title: t('serviceDetailsSection.audit.title'),
      subtitle: t('serviceDetailsSection.audit.subtitle'),
      description: t('serviceDetailsSection.audit.description'),
      features: [
        {
          title: t('serviceDetailsSection.audit.features.0.title'),
          description: t('serviceDetailsSection.audit.features.0.description'),
        },
        {
          title: t('serviceDetailsSection.audit.features.1.title'),
          description: t('serviceDetailsSection.audit.features.1.description'),
        },
        {
          title: t('serviceDetailsSection.audit.features.2.title'),
          description: t('serviceDetailsSection.audit.features.2.description'),
        },
        {
          title: t('serviceDetailsSection.audit.features.3.title'),
          description: t('serviceDetailsSection.audit.features.3.description'),
        },
      ],
      benefits: [
        t('serviceDetailsSection.audit.benefits.0'),
        t('serviceDetailsSection.audit.benefits.1'),
        t('serviceDetailsSection.audit.benefits.2'),
        t('serviceDetailsSection.audit.benefits.3'),
        t('serviceDetailsSection.audit.benefits.4'),
        t('serviceDetailsSection.audit.benefits.5'),
      ],
    },
    valuation: {
      icon: Calculator,
      title: t('serviceDetailsSection.valuation.title'),
      subtitle: t('serviceDetailsSection.valuation.subtitle'),
      description: t('serviceDetailsSection.valuation.description'),
      features: [
        {
          title: t('serviceDetailsSection.valuation.features.0.title'),
          description: t('serviceDetailsSection.valuation.features.0.description'),
        },
        {
          title: t('serviceDetailsSection.valuation.features.1.title'),
          description: t('serviceDetailsSection.valuation.features.1.description'),
        },
      ],
      benefits: [
        t('serviceDetailsSection.valuation.benefits.0'),
        t('serviceDetailsSection.valuation.benefits.1'),
        t('serviceDetailsSection.valuation.benefits.2'),
        t('serviceDetailsSection.valuation.benefits.3'),
        t('serviceDetailsSection.valuation.benefits.4'),
        t('serviceDetailsSection.valuation.benefits.5'),
      ],
    },
    "tax-legal": {
      icon: Scale,
      title: t('serviceDetailsSection.tax-legal.title'),
      subtitle: t('serviceDetailsSection.tax-legal.subtitle'),
      description: t('serviceDetailsSection.tax-legal.description'),
      features: [
        {
          title: t('serviceDetailsSection.tax-legal.features.0.title'),
          description: t('serviceDetailsSection.tax-legal.features.0.description'),
        },
        {
          title: t('serviceDetailsSection.tax-legal.features.1.title'),
          description: t('serviceDetailsSection.tax-legal.features.1.description'),
        },
        {
          title: t('serviceDetailsSection.tax-legal.features.2.title'),
          description: t('serviceDetailsSection.tax-legal.features.2.description'),
        },
      ],
      benefits: [
        t('serviceDetailsSection.tax-legal.benefits.0'),
        t('serviceDetailsSection.tax-legal.benefits.1'),
        t('serviceDetailsSection.tax-legal.benefits.2'),
        t('serviceDetailsSection.tax-legal.benefits.3'),
        t('serviceDetailsSection.tax-legal.benefits.4'),
        t('serviceDetailsSection.tax-legal.benefits.5'),
      ],
    },
    consulting: {
      icon: Lightbulb,
      title: t('serviceDetailsSection.consulting.title'),
      subtitle: t('serviceDetailsSection.consulting.subtitle'),
      description: t('serviceDetailsSection.consulting.description'),
      features: [
        {
          title: t('serviceDetailsSection.consulting.features.0.title'),
          description: t('serviceDetailsSection.consulting.features.0.description'),
        },
        {
          title: t('serviceDetailsSection.consulting.features.1.title'),
          description: t('serviceDetailsSection.consulting.features.1.description'),
        },
        {
          title: t('serviceDetailsSection.consulting.features.2.title'),
          description: t('serviceDetailsSection.consulting.features.2.description'),
        },
      ],
      benefits: [
        t('serviceDetailsSection.consulting.benefits.0'),
        t('serviceDetailsSection.consulting.benefits.1'),
        t('serviceDetailsSection.consulting.benefits.2'),
        t('serviceDetailsSection.consulting.benefits.3'),
        t('serviceDetailsSection.consulting.benefits.4'),
        t('serviceDetailsSection.consulting.benefits.5'),
      ],
    },
    accounting: {
      icon: BookOpen,
      title: t('serviceDetailsSection.accounting.title'),
      subtitle: t('serviceDetailsSection.accounting.subtitle'),
      description: t('serviceDetailsSection.accounting.description'),
      features: [
        {
          title: t('serviceDetailsSection.accounting.features.0.title'),
          description: t('serviceDetailsSection.accounting.features.0.description'),
        },
        {
          title: t('serviceDetailsSection.accounting.features.1.title'),
          description: t('serviceDetailsSection.accounting.features.1.description'),
        },
        {
          title: t('serviceDetailsSection.accounting.features.2.title'),
          description: t('serviceDetailsSection.accounting.features.2.description'),
        },
      ],
      benefits: [
        t('serviceDetailsSection.accounting.benefits.0'),
        t('serviceDetailsSection.accounting.benefits.1'),
        t('serviceDetailsSection.accounting.benefits.2'),
        t('serviceDetailsSection.accounting.benefits.3'),
        t('serviceDetailsSection.accounting.benefits.4'),
        t('serviceDetailsSection.accounting.benefits.5'),
      ],
    },
    hr: {
      icon: Users,
      title: t('serviceDetailsSection.hr.title'),
      subtitle: t('serviceDetailsSection.hr.subtitle'),
      description: t('serviceDetailsSection.hr.description'),
      features: [
        {
          title: t('serviceDetailsSection.hr.features.0.title'),
          description: t('serviceDetailsSection.hr.features.0.description'),
        },
        {
          title: t('serviceDetailsSection.hr.features.1.title'),
          description: t('serviceDetailsSection.hr.features.1.description'),
        },
        {
          title: t('serviceDetailsSection.hr.features.2.title'),
          description: t('serviceDetailsSection.hr.features.2.description'),
        },
        {
          title: t('serviceDetailsSection.hr.features.3.title'),
          description: t('serviceDetailsSection.hr.features.3.description'),
        },
        {
          title: t('serviceDetailsSection.hr.features.4.title'),
          description: t('serviceDetailsSection.hr.features.4.description'),
        },
      ],
      benefits: [
        t('serviceDetailsSection.hr.benefits.0'),
        t('serviceDetailsSection.hr.benefits.1'),
        t('serviceDetailsSection.hr.benefits.2'),
        t('serviceDetailsSection.hr.benefits.3'),
        t('serviceDetailsSection.hr.benefits.4'),
        t('serviceDetailsSection.hr.benefits.5'),
      ],
    },
  };

  const service = servicesData[serviceId] || servicesData["audit"];

  return (
    <section className="serviceDetails">
      {/* Hero Section */}
      {/* <div className="detailsHero">
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
                <h3>{t('serviceDetailsSection.floatingCard.title')}</h3>
                <p>{t('serviceDetailsSection.floatingCard.description')}</p>
              </div>
            </div>
            <Breadcrumb/>
          </div>
        </div>
      </div> */}
      <SectionHeader
        label={service.title}
        title={service.subtitle}
        description={service.description}
      />

      <div className="featuresSection">
        <div className="featuresContainer">
          <div className="serviceSectionHeader">
            <h2>{t('serviceDetailsSection.featuresSection.title')}</h2>
            <p>{t('serviceDetailsSection.featuresSection.description')}</p>
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

      <div className="benefitsSection">
        <div className="benefitsContainer">
          <div className="benefitsContent">
            <div className="benefitsText">
              <h2>{t('serviceDetailsSection.benefitsSection.title')}</h2>
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
                <img
                  src={ServiceDetailsImage}
                  alt={t('serviceDetailsSection.benefitsSection.imageAlt')}
                />
              </div>
              <div className="statsOverlay">
                <div className="statItem">
                  <h4>{t('serviceDetailsSection.statsOverlay.clients.value')}</h4>
                  <p>{t('serviceDetailsSection.statsOverlay.clients.description')}</p>
                </div>
                <div className="statItem">
                  <h4>{t('serviceDetailsSection.statsOverlay.successRate.value')}</h4>
                  <p>{t('serviceDetailsSection.statsOverlay.successRate.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ctaSection">
        <div className="ctaContainer">
          <h2>{t('serviceDetailsSection.cta.title')}</h2>
          <p>
            {t('serviceDetailsSection.cta.description', { serviceTitle: service.title.toLowerCase() })}
          </p>
          <div className="ctaButtons">
            <Link to="/contact" className="ctaButton primary">
              {t('serviceDetailsSection.cta.buttons.consultation')}
              <ArrowRight size={20} />
            </Link>
            <a href="tel:+994125626613" className="ctaButton secondary">
              <Phone size={20} />
              {t('serviceDetailsSection.cta.buttons.call')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;