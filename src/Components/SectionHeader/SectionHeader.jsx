import React from 'react';
import './SectionHeader.scss';

const SectionHeader = ({ label, title, description, centered = true }) => {
  return (
    <div className={`sectionHeader ${centered ? 'centered' : ''}`}>
      <span className="headerLabel">{label}</span>
      <h2 className="headerTitle">{title}</h2>
      {description && <p className="headerDescription">{description}</p>}
    </div>
  );
};

export default SectionHeader;