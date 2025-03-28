/* eslint-disable no-unused-vars */
import React from 'react';
import './cont.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Cont = () => {
  return (
    <>
    <div className="contact-container">
      <div className="contact-info">
        <h2>Do you have some questions?</h2>
        <p>We are at your disposal 7 days a week!</p>
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

      <div className="contact-form">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name *" required />
            <input type="email" placeholder="E-mail *" required />
          </div>
          <input type="text" placeholder="Subject *" required />
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="btn">SEND MESSAGE</button>
        </form>
        {/* <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> */}
      </div>
    </div>
    </>
  );
};

export default Cont;
