import React from 'react';
import './SecondSection.scss';
import { FaArrowRight } from 'react-icons/fa6';
import LogoAbout from '../../../assets/taxgreen.png';
import { useTranslation } from 'react-i18next';

const HomeAbout = () => {
  const { t } = useTranslation();

  return (
    <section className="homeAbout">
      <div className="aboutContainer">
        <div className="aboutContent">
          <div className="textSide">
            <span className="labelText">{t('home.homeAbout.who_we_are')}</span>
            <h2 className="aboutTitle">
              {t('home.homeAbout.professional_audit')}{' '}
              <span className="highlightText">{t('home.homeAbout.consulting_services')}</span>
            </h2>
            <p className="aboutDesc">{t('home.homeAbout.about_description')}</p>
            <div className="aboutStats">
              <div className="statBox">
                <h3>450+</h3>
                <p>{t('home.homeAbout.happy_clients')}</p>
              </div>
              <div className="statBox">
                <h3>98%</h3>
                <p>{t('home.homeAbout.success_rate')}</p>
              </div>
              <div className="statBox">
                <h3>15+</h3>
                <p>{t('home.homeAbout.years_experience')}</p>
              </div>
            </div>
            <a href="/about" className="aboutBtn">
              {t('home.homeAbout.learn_more')}
              <i>
                <FaArrowRight />
              </i>
            </a>
          </div>
          <div className="imageSide">
            <div className="imageBox">
              <img src={LogoAbout} alt={t('home.homeAbout.office_building_alt')} />
              <div className="imageOverlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;