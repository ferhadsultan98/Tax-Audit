import React, { useState, useEffect } from "react";
import "./HeroSection.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HeroImage1 from "../../../assets/hero1.jpg";
import HeroImage2 from "../../../assets/hero2.jpg";
import HeroImage3 from "../../../assets/hero3.jpg";
import HeroImage4 from "../../../assets/hero4.jpg";

const HeroSection = () => {
  const slides = [
    {
      image: HeroImage1,
      title: "First Slide",
      description: "This is the first slide description.",
    },
    {
      image: HeroImage2,
      title: "Second Slide",
      description: "This is the second slide description.",
    },
    {
      image: HeroImage3,
      title: "Third Slide",
      description: "This is the third slide description.",
    },
    {
      image: HeroImage4,
      title: "Fourth Slide",
      description: "This is the fourth slide description.",
    },
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 600);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsTransitioning(false), 600);
      }, 300);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHoveringLeft && !isHoveringRight && !isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHoveringLeft, isHoveringRight, isTransitioning]);

  return (
    <section className="heroSection">
      <div className="sliderWrapper">
        <div
          className="arrow arrowLeft"
          onClick={prevSlide}
          onMouseEnter={() => setIsHoveringLeft(true)}
          onMouseLeave={() => setIsHoveringLeft(false)}
        >
          <i>
            <IoIosArrowBack />
          </i>
          {isHoveringLeft && (
            <div className="previewImageWrapper">
              <img
                src={slides[(currentSlide - 1 + slides.length) % slides.length].image}
                alt="Preview Left"
                className="previewImage"
              />
            </div>
          )}
        </div>
        <div className="heroSectionSliderContent">
          <div className="slideImageWrapper">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className={`slideImage ${isTransitioning ? "fade" : ""}`}
            />
            <div className={`bottomDesign ${isTransitioning ? "fade-out" : "fade-in"}`}>
              {/* <div className="slideText">
                <h2>{slides[currentSlide].title}</h2>
                <p>{slides[currentSlide].description}</p>
              </div> */}
            </div>
          </div>
        </div>
        <div
          className="arrow arrowRight"
          onClick={nextSlide}
          onMouseEnter={() => setIsHoveringRight(true)}
          onMouseLeave={() => setIsHoveringRight(false)}
        >
          <i>
            <IoIosArrowForward />
          </i>
          {isHoveringRight && (
            <div className="previewImageWrapper">
              <img
                src={slides[(currentSlide + 1) % slides.length].image}
                alt="Preview Right"
                className="previewImage"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;