import React from 'react';
import './PartnerSection.scss';
import Partner1 from '../../../assets/Partners/1.png';
import Partner3 from '../../../assets/Partners/3.png';
import Partner4 from '../../../assets/Partners/4.png';
import Partner5 from '../../../assets/Partners/5.png';
import Partner6 from '../../../assets/Partners/6.png';
import Partner7 from '../../../assets/Partners/7.png';
import Partner8 from '../../../assets/Partners/8.png';
import Partner9 from '../../../assets/Partners/9.png';
import Partner11 from '../../../assets/Partners/11.png';
import Partner12 from '../../../assets/Partners/12.png';
import Partner14 from '../../../assets/Partners/14.png';
import Partner15 from '../../../assets/Partners/15.png';
import Partner17 from '../../../assets/Partners/17.png';
import Partner18 from '../../../assets/Partners/18.png';
import Partner19 from '../../../assets/Partners/19.png';
import Partner20 from '../../../assets/Partners/20.png';
import Partner21 from '../../../assets/Partners/21.png';
import Partner23 from '../../../assets/Partners/23.png';
import Partner24 from '../../../assets/Partners/24.png';
import Partner25 from '../../../assets/Partners/25.png';
import PartnerP1 from '../../../assets/Partners/p1.png';
import PartnerP2 from '../../../assets/Partners/p2.png';
import PartnerP3 from '../../../assets/Partners/p3.png';
import PartnerP4 from '../../../assets/Partners/p4.png';

const PartnerSection = () => {
  const partners = [
    { id: 1, name: 'Partner 1', logo: Partner1 },
    { id: 2, name: 'Partner 3', logo: Partner3 },
    { id: 3, name: 'Partner 4', logo: Partner4 },
    { id: 4, name: 'Partner 5', logo: Partner5 },
    { id: 5, name: 'Partner 6', logo: Partner6 },
    { id: 6, name: 'Partner 7', logo: Partner7 },
    { id: 7, name: 'Partner 8', logo: Partner8 },
    { id: 8, name: 'Partner 9', logo: Partner9 },
    { id: 9, name: 'Partner 11', logo: Partner11 },
    { id: 10, name: 'Partner 12', logo: Partner12 },
    { id: 11, name: 'Partner 14', logo: Partner14 },
    { id: 12, name: 'Partner 15', logo: Partner15 },
    { id: 13, name: 'Partner 17', logo: Partner17 },
    { id: 14, name: 'Partner 18', logo: Partner18 },
    { id: 15, name: 'Partner 19', logo: Partner19 },
    { id: 16, name: 'Partner 20', logo: Partner20 },
    { id: 17, name: 'Partner 21', logo: Partner21 },
    { id: 18, name: 'Partner 23', logo: Partner23 },
    { id: 19, name: 'Partner 24', logo: Partner24 },
    { id: 20, name: 'Partner 25', logo: Partner25 },
    { id: 21, name: 'Partner P1', logo: PartnerP1 },
    { id: 22, name: 'Partner P2', logo: PartnerP2 },
    { id: 23, name: 'Partner P3', logo: PartnerP3 },
    { id: 24, name: 'Partner P4', logo: PartnerP4 },
  ];

  return (
    <section className="partnerSection">
      <div className="partnerContainer">
        <div className="sectionHeader">
          <span className="sectionLabel">Our Partners</span>
          <h2 className="sectionTitle">Trusted by Leading Companies</h2>
        </div>
        <div className="sliderWrapper">
          <div className="sliderTrack">
            <div className="slideGroup">
              {partners.map((partner) => (
                <div key={partner.id} className="partnerItem">
                  <img src={partner.logo} alt={partner.name} />
                </div>
              ))}
            </div>
            <div className="slideGroup" aria-hidden="true">
              {partners.map((partner) => (
                <div key={`${partner.id}-duplicate`} className="partnerItem">
                  <img src={partner.logo} alt={partner.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;