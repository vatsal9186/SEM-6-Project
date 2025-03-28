/* eslint-disable no-unused-vars */
import React from 'react';
import './Companies.css';

const logos = [
  'Panasonic', 'SONY', 'ASUS', 'SAMSUNG', 'APPLE', 'OPPO'
];

function Companies() {
  return (
    <div className="logo-container">
      {logos.map((logo, index) => (
        <span key={index} className="logo-item">
          {logo}
        </span>
      ))}
    </div>
  );
}

export default Companies;
