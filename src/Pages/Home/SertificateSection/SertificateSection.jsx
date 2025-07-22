import React, { useState } from 'react';
import './SertificateSection.scss';
import { Award, X, Download, ExternalLink } from 'lucide-react';

const SertificateSection = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  const awards = [
    {
      id: 1,
      title: 'ISO 9001:2015 Certification',
      category: 'Quality Management',
      year: '2024',
      description: 'International certification for quality management systems, demonstrating our commitment to consistent quality and continuous improvement.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=800&fit=crop',
      issuer: 'International Organization for Standardization'
    },
    {
      id: 2,
      title: 'Best Audit Firm of the Year',
      category: 'Excellence Award',
      year: '2024',
      description: 'Recognition for outstanding audit services and client satisfaction in the professional services industry.',
      image: 'https://images.unsplash.com/photo-1620283085068-5aab84e2db8e?w=600&h=800&fit=crop',
      issuer: 'National Accounting Association'
    },
    {
      id: 3,
      title: 'ACCA Approved Employer',
      category: 'Professional Development',
      year: '2023',
      description: 'Certified as an ACCA Approved Employer, recognizing our commitment to training and developing finance professionals.',
      image: 'https://images.unsplash.com/photo-1551836022-8b2858c9c69b?w=600&h=800&fit=crop',
      issuer: 'Association of Chartered Certified Accountants'
    },
    {
      id: 4,
      title: 'Digital Innovation Award',
      category: 'Technology',
      year: '2024',
      description: 'Award for implementing cutting-edge digital solutions in audit and financial advisory services.',
      image: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=600&h=800&fit=crop',
      issuer: 'Tech Excellence Awards'
    },
    {
      id: 5,
      title: 'Client Service Excellence',
      category: 'Customer Satisfaction',
      year: '2023',
      description: 'Recognition for maintaining exceptional client satisfaction ratings and service delivery standards.',
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&h=800&fit=crop',
      issuer: 'Business Excellence Institute'
    },
    {
      id: 6,
      title: 'ESG Leadership Certificate',
      category: 'Sustainability',
      year: '2024',
      description: 'Certification for leadership in Environmental, Social, and Governance practices and reporting.',
      image: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4?w=600&h=800&fit=crop',
      issuer: 'Global Sustainability Council'
    }
  ];

  const openModal = (award) => {
    setSelectedAward(award);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAward(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="homeAwards">
        <div className="awardsContainer">
          <div className="awardsHeader">
            <span className="sectionLabel">Recognition</span>
            <h2 className="sectionTitle">
              Our Awards & Certifications
            </h2>
            <p className="sectionDesc">
              Recognized for excellence in professional services and commitment to quality
            </p>
          </div>

          <div className="awardsGrid">
            {awards.map((award, index) => (
              <div 
                key={award.id} 
                className="awardCard"
                onClick={() => openModal(award)}
              >
                <div className="cardInner">
                  <div className="cardFront">
                    <div className="awardImage">
                      <img src={award.image} alt={award.title} />
                      <div className="imageOverlay">
                        <Award size={40} />
                      </div>
                    </div>
                    <div className="awardInfo">
                      <span className="awardCategory">{award.category}</span>
                      <h3 className="awardTitle">{award.title}</h3>
                      <span className="awardYear">{award.year}</span>
                    </div>
                  </div>
                  <div className="cardBack">
                    <div className="backContent">
                      <Award size={30} />
                      <h4>{award.title}</h4>
                      <p>Click to view details</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedAward && (
        <div className="awardModal" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className="modalBody">
              <div className="modalImage">
                <img src={selectedAward.image} alt={selectedAward.title} />
                <span className="modalCategory">{selectedAward.category}</span>
              </div>
              
              <div className="modalInfo">
                <h3 className="modalTitle">{selectedAward.title}</h3>
                <div className="modalMeta">
                  <span className="metaItem">
                    <Award size={16} />
                    {selectedAward.year}
                  </span>
                  <span className="metaItem">
                    <ExternalLink size={16} />
                    {selectedAward.issuer}
                  </span>
                </div>
                <p className="modalDesc">{selectedAward.description}</p>
                
                <div className="modalActions">
                  <button className="actionBtn primary">
                    <Download size={18} />
                    Download Certificate
                  </button>
                  <button className="actionBtn secondary">
                    <ExternalLink size={18} />
                    Verify Online
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SertificateSection;