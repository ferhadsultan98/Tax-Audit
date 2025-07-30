import React from "react";
import "./SecondSection.scss";
import { FaArrowRight } from "react-icons/fa6";
import LogoAbout from '../../../assets/taxgreen.png'

const HomeAbout = () => {
  return (
    <section className="homeAbout">
      <div className="aboutContainer">
        <div className="aboutContent">
          <div className="textSide">
            <span className="labelText">Who We Are</span>
            <h2 className="aboutTitle">
              Professional Audit &
              <span className="highlightText"> Consulting Services</span>
            </h2>
            <p className="aboutDesc">
              We provide comprehensive audit, accounting and consulting services
              in accordance with international standards. Our expert team
              ensures your business meets all regulatory requirements while
              optimizing financial performance.
            </p>
            <div className="aboutStats">
              <div className="statBox">
                <h3>250+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="statBox">
                <h3>98%</h3>
                <p>Success Rate</p>
              </div>
              <div className="statBox">
                <h3>12+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <a href="/about" className="aboutBtn">
              Learn More
              <i>
                <FaArrowRight />
              </i>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="imageSide">
            <div className="imageBox">
              <img
                src={LogoAbout}
                alt="Modern office building"
              />
              <div className="imageOverlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
