import React from "react";
import "./ErrorPage.scss";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ErrorBack from "../../assets/sectionHeaders.mp4";

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <section className="errorSection">
      <video
        className="errorBackgroundVideo"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={ErrorBack} type="video/mp4" />
      </video>
      <div className="errorWrapper">
        <div className="errorContent">
          <div className="errorImageWrapper">
            <FaExclamationTriangle className="errorIcon" />
            <div className="errorText">
              <h2>{t("errorSection.title")}</h2>
              <p>{t("errorSection.description")}</p>
              <Link to="/" className="backButton">
                <FaArrowLeft className="backIcon" />
                {t("errorSection.backButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;