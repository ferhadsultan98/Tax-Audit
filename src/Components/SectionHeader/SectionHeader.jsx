import React from "react";
import "./SectionHeader.scss";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import sectionHeaderVideo from "../../assets/sectionHeader.mp4";

const SectionHeader = ({ label, title, description, centered = true }) => {
  return (
    <div className={`sectionHeader ${centered ? "centered" : ""}`}>
      <video className="headerVideo" autoPlay loop muted playsInline>
        <source src={sectionHeaderVideo} type="video/mp4" />
      </video>
      <span className="headerLabel">{label}</span>
      <h2 className="headerTitle">{title}</h2>
      {description && <p className="headerDescription">{description}</p>}
      <Breadcrumb />
    </div>
  );
};

export default SectionHeader;
