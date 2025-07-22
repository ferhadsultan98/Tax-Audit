import React from 'react';
import './SectionHeader.scss';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="componentSectionHeader">
      <div className="headerContent">
        <h2 className="headerTitle">{title}</h2>
        {subtitle && <p className="headerSubtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default SectionHeader;