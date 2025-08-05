import React from 'react';
import './About.scss';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  Building2,
  Briefcase,
  Shield,
  Heart
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import HomeFAQ from '../Home/HomeFAQ/HomeFAQ';
import logoImage from '../../assets/tax.webp'; 

const About = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const stats = [
    { number: t('aboutSection.stats.experience.number'), label: t('aboutSection.stats.experience.label'), icon: Award },
    { number: t('aboutSection.stats.clients.number'), label: t('aboutSection.stats.clients.label'), icon: Users },
    { number: t('aboutSection.stats.projects.number'), label: t('aboutSection.stats.projects.label'), icon: Briefcase },
  ];

  const sectors = [
    { name: t('aboutSection.sectors.oilGas'), icon: '🛢️' },
    { name: t('aboutSection.sectors.banking'), icon: '🏦' },
    { name: t('aboutSection.sectors.construction'), icon: '🏗️' },
    { name: t('aboutSection.sectors.retail'), icon: '🏭' },
    { name: t('aboutSection.sectors.transport'), icon: '🚛' },
    { name: t('aboutSection.sectors.technology'), icon: '💻' },
  ];

  const values = [
    {
      icon: Heart,
      title: t('aboutSection.values.clientCentered.title'),
      description: t('aboutSection.values.clientCentered.description')
    },
    {
      icon: Award,
      title: t('aboutSection.values.quality.title'),
      description: t('aboutSection.values.quality.description')
    },
    {
      icon: TrendingUp,
      title: t('aboutSection.values.development.title'),
      description: t('aboutSection.values.development.description')
    },
    {
      icon: Shield,
      title: t('aboutSection.values.ethics.title'),
      description: t('aboutSection.values.ethics.description')
    }
  ];

  return (
    <section className="aboutSection">
      <SectionHeader
        label={t('aboutSection.sectionHeader.label')}
        title={t('aboutSection.sectionHeader.title')}
        description={t('aboutSection.sectionHeader.description')}
      />
      <div className="statsSection">
        <div className="statsContainer">
          {stats.map((stat, index) => (
            <div key={index} className="statCard">
              <div className="statIcon">
                <stat.icon size={30} />
              </div>
              <h3 className="statNumber">{stat.number}</h3>
              <p className="statLabel">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="aboutMain">
        <div className="aboutContainer">
          <div className="aboutGrid">
            <div className="aboutContent">
              <div className="contentBlock">
                <h2>{t('aboutSection.mission.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('aboutSection.mission.description') }} />
              </div>
              <div className="contentBlock">
                <h2>{t('aboutSection.team.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('aboutSection.team.description') }} />
              </div>
              <div className="contentBlock">
                <h2>{t('aboutSection.approach.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('aboutSection.approach.description') }} />
              </div>
            </div>
            <div className="aboutSidebar">
              <div className="sidebarCard">
                <h3>{t('aboutSection.sectorsHeader')}</h3>
                <div className="sectorGrid">
                  {sectors.map((sector, index) => (
                    <div key={index} className="sectorItem">
                      <span className="sectorIcon">{sector.icon}</span>
                      <span className="sectorName">{sector.name}</span>
                    </div>
                  ))}
                </div>
                <p className="sectorDescription" dangerouslySetInnerHTML={{ __html: t('aboutSection.sectorsDescription') }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="valuesSection">
        <div className="valuesContainer">
          <div className="valuesHeader">
            <h2>{t('aboutSection.valuesHeader.title')}</h2>
            <p>{t('aboutSection.valuesHeader.description')}</p>
          </div>
          <div className="valuesGrid">
            {values.map((value, index) => (
              <div key={index} className="valueCard">
                <div className="valueIcon">
                  <value.icon size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="aboutCTA">
        <div className="ctaContainer">
          <div className="ctaContent">
            <h2>{t('aboutSection.cta.title')}</h2>
            <p>{t('aboutSection.cta.description')}</p>
            <div className="ctaButtons">
              <a href="/contact" className="ctaBtn primary">{t('aboutSection.cta.buttons.primary')}</a>
              <a href="/services" className="ctaBtn secondary">{t('aboutSection.cta.buttons.secondary')}</a>
            </div>
          </div>
        </div>
      </div>
      <HomeFAQ language={language} />
    </section>
  );
};

export default About;