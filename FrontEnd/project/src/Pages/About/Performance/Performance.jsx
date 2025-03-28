/* eslint-disable no-unused-vars */
import React from 'react';
import './Performance.css';
import i from './team.jpg';

const images = [
  {
    image: i,
  }
];

const Performance = () => {
  return (
    <section className="performance-section">
      <div className="text-content">
        <h5>Our Commitment</h5>
        <h2>We Believe In Excellence</h2>
        <p>
          At PrimeElectronics, we are dedicated to providing top-quality electronic products.
          Our team works tirelessly to ensure the highest standards in design and performance.
          We believe in constant innovation and customer satisfaction.
        </p>
      </div>
      <div className="image-content">
        <img src={images[0].image} alt="Meeting at PrimeElectronics" />
      </div>
    </section>
  );
};

export default Performance;