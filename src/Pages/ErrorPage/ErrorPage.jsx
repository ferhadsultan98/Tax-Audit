import React from 'react';
import './ErrorPage.scss';
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="errorSection">
      <div className="errorWrapper">
        <div className="errorContent">
          <div className="errorImageWrapper">
            <FaExclamationTriangle className="errorIcon" />
            <div className="errorText">
              <h2>404 - Page Not Found</h2>
              <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
              <Link to="/" className="backButton">
                <FaArrowLeft className="backIcon" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;