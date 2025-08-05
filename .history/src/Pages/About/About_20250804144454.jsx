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
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import HomeFAQ from '../Home/HomeFAQ/HomeFAQ';
import logoImage from '../../assets/tax.webp'; 
import translations from './translations';

const About = ({ language = 'en' }) => {
  const t = translations[language];

  const stats = [
    { number: t.stats[0].number, label: t.stats[0].label, icon: Award },
    { number: t.stats[1].number, label: t.stats[1].label, icon: Users },
    { number: t.stats[2].number, label: t.stats[2].label, icon: Briefcase },
  ];

  const sectors = [
    { name: t.sectors[0].name, icon: t.sectors[0].icon },
    { name: t.sectors[1].name, icon: t.sectors[1].icon },
    { name: t.sectors[2].name, icon: t.sectors[2].icon },
    { name: t.sectors[3].name, icon: t.sectors[3].icon },
    { name: t.sectors[4].name, icon: t.sectors[4].icon },
    { name: t.sectors[5].name, icon: t.sectors[5].icon },
  ];

  const values = [
    {
      icon: Heart,
      title: t.values[0].title,
      description: t.values[0].description
    },
    {
      icon: Award,
      title: t.values[1].title,
      description: t.values[1].description
    },
    {
      icon: TrendingUp,
      title: t.values[2].title,
      description: t.values[2].description
    },
    {
      icon: Shield,
      title: t.values[3].title,
      description: t.values[3].description
    }
  ];

  return (
    <section className="aboutSection">
      <SectionHeader
        label={t.label}
        title={t.title} 
        description={t.description}
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
                <h2>{t.mission.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: t.mission.description }} />
              </div>
              <div className="contentBlock">
                <h2>{t.team.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: t.team.description }} />
              </div>
              <div className="contentBlock">
                <h2>{t.approach.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: t.approach.description }} />
              </div>
            </div>
            <div className="aboutSidebar">
              <div className="sidebarCard">
                <h3>{t.sectorsHeader}</h3>
                <div className="sectorGrid">
                  {sectors.map((sector, index) => (
                    <div key={index} className="sectorItem">
                      <span className="sectorIcon">{sector.icon}</span>
                      <span className="sectorName">{sector.name}</span>
                    </div>
                  ))}
                </div>
                <p className="sectorDescription" dangerouslySetInnerHTML={{ __html: t.sectorsDescription }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="valuesSection">
        <div className="valuesContainer">
          <div className="valuesHeader">
            <h2>{t.valuesHeader.title}</h2>
            <p>{t.valuesHeader.description}</p>
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
            <h2>{t.cta.title}</h2>
            <p>{t.cta.description}</p>
            <div className="ctaButtons">
              <a href="/contact" className="ctaBtn primary">{t.cta.buttons.primary}</a>
              <a href="/services" className="ctaBtn secondary">{t.cta.buttons.secondary}</a>
            </div>
          </div>
        </div>
      </div>
      <HomeFAQ language={language} />
    </section>
  );
};

export default About;