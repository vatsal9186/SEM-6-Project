/* eslint-disable no-unused-vars */
import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <section className="about-section">
      <div className="about-item">
        <h2>Who We Are</h2>
        <p>
          At PrimeElectronics, we are passionate about delivering the latest and most reliable electronic products. Our team is dedicated to providing exceptional customer service and expert advice.
        </p>
      </div>
      <div className="about-item">
        <h2>Our History</h2>
        <p>
          Established with a vision to innovate, PrimeElectronics has been serving tech enthusiasts for years. We started small but grew rapidly, becoming a trusted name in the industry.
        </p>
      </div>
      <div className="about-item">
        <h2>Our Mission</h2>
        <p>
          Our mission is to bring cutting-edge technology to our customers while ensuring affordability and quality. We aim to enhance lives with every product we offer.
        </p>
      </div>
    </section>
  );
};

export default Content;