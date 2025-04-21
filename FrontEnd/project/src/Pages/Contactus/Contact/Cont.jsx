/* eslint-disable no-unused-vars */
import React from 'react';
import './cont.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Cont = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Got Questions?</h2>
        <p className="subtext">We re available 7 days a week!</p>
        <address>
          K.K Market, Opp of K.M Kothari High-School, SATLASANA<br />
          MEHSANA, GUJARAT <br />
          INDIA
        </address>
        <a href="mailto:Support1234@Ecomall.com" className="email">hardikjadav1605@gmail.com</a>
        <p className="phone">+91 6355591189</p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default Cont;
