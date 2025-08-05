import React, { useState } from "react";
import "./SertificateSection.scss";
import { Award, X, Download, ExternalLink } from "lucide-react";
import Sertificate1 from "../../../assets/Sertificates/sertifikat1.jpg";
import Sertificate2 from "../../../assets/Sertificates/sertifikat2.jpg";
import Sertificate3 from "../../../assets/Sertificates/sertifikat3.jpg";
import Sertificate4 from "../../../assets/Sertificates/sertifikat4.jpg";
import { useTranslation } from "react-i18next";

const SertificateSection = () => {
  const { t } = useTranslation();
  const [selectedAward, setSelectedAward] = useState(null);

  const awards = [
    {
      id: 1,
      title: t('home.sertificateSection.iso_9001_title'),
      year: "2025",
      description: t('home.sertificateSection.iso_9001_description'),
      image: Sertificate1,
      issuer: "ANKA Global",
    },
    {
      id: 2,
      title: t('home.sertificateSection.iso_14001_title'),
      year: "2025",
      description: t('home.sertificateSection.iso_14001_description'),
      image: Sertificate2,
      issuer: "ANKA Global",
    },
    {
      id: 3,
      title: t('home.sertificateSection.iso_45001_title'),
      year: "2025",
      description: t('home.sertificateSection.iso_45001_description'),
      image: Sertificate3,
      issuer: "ANKA Global",
    },
    {
      id: 4,
      title: t('home.sertificateSection.icaze_title'),
      year: "2023",
      image: Sertificate4,
      issuer: "Azərbaycan Respublikasının Auditorlar Palatası",
    },
  ];

  const openModal = (award) => {
    setSelectedAward(award);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedAward(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section className="homeAwards">
        <div className="awardsContainer">
          <div className="awardsHeader">
            <span className="sectionLabel">{t('home.sertificateSection.section_label')}</span>
            <h2 className="sectionTitle">{t('home.sertificateSection.section_title')}</h2>
            <p className="sectionDesc">
              {t('home.sertificateSection.section_description')}
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
                      <p>{t('home.sertificateSection.click_to_view_details')}</p>
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
                {/* <span className="modalCategory">{selectedAward.category}</span> */}
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

               
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SertificateSection;