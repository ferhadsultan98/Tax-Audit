import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import './About.scss';
import AboutImage from '../../assets/af1.jpg'

const About = () => {
  return (
    <div className="aboutSection">
      <SectionHeader 
        title="About Us" 
        subtitle="Discover our story and mission to create impactful solutions."
      />
      <div className="aboutContent">
        <div className="contentWrapper">
          <div className="textBlock">
            <p className="description">
              We are a passionate team dedicated to innovation and excellence. Our mission is to deliver cutting-edge solutions that empower businesses and individuals to achieve their goals. With a focus on creativity and collaboration, we strive to make a positive impact in everything we do.
            </p>
            <p className="description">
              Founded on the principles of integrity and quality, our journey began with a simple idea: to create meaningful experiences through technology. Join us as we continue to push boundaries and redefine what's possible.
            </p>
          </div>
          <div className="imageBlock">
            <img 
              src={AboutImage}
              alt="About Us" 
              className="aboutImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;