import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollButton.scss';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg className="progress-circle" viewBox="0 0 100 100">
        <circle
          className="progress-background"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#54e7b3"
          strokeWidth="5"
        />
        <circle
          className="progress"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="black"
          strokeWidth="5"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * scrollProgress) / 100}
        />
      </svg>
      <FaArrowUp className="arrow-icon" />
    </button>
  );
};

export default ScrollButton;