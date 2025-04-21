
/* eslint-disable no-unused-vars */
import React ,{ useEffect, useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaFacebook, FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import {Link} from "react-router-dom";
import './Footer.css';

export const Footer = () => {


   const [menu , setMenu] = useState();


  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li><Link to= {'/'} className="footer-link">Home</Link></li>
            <li><Link to= {'/About'} className="footer-link">About</Link></li>
            <li className="dropdown">
              {/* <a href="#" className="footer-link">Products</a> */}
              <Link to= "#" className="footer-link">Products</Link>
              <div className="dropdown-content">
              <li onClick={() => {setMenu("Tv")}}><Link to="/TV">TV</Link></li>
                  <li onClick={() => {setMenu("Refrigerator")}}><Link to="/Refrigerator">Refrigerator</Link></li>
                  <li onClick={() => {setMenu("Laptops")}}><Link to="/Laptops">Laptops</Link></li>
                  <li onClick={() => {setMenu("Mobile")}}><Link to="/Mobile">Mobile</Link></li>
                  <li onClick={() => {setMenu("Ac")}}><Link to="/AC">AC</Link></li>
                  <li onClick={() => {setMenu("Washing Machine")}}><Link to="/Wash">Washing Machine</Link></li>
              </div>
            </li>
            <li><a href={"/Cont"} className="footer-link">Contact Us</a></li>
            <li><a href="/login" className="footer-link">Login</a></li>
          </ul>
        </div>

        <div className="footer-info">
          <h2 className="footer-title">Prime Electronics</h2>
          <p className="footer-address">K.K Market, Opp of K.M Kothari High-School, SATLASANA</p>
          <p className="footer-contact">Phone: +91 6355591189</p>
          <p className="footer-contact">Email: hardikjadav1605@gmail.com</p>
          <div className="social-media">
            <a href="#" className="social-icon"><FaGoogle/><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><FaFacebook/><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><FaGithub/><i className="fab Fa-github"></i></a>
            <a href="#" className="social-icon"><FaLinkedin/><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><FaInstagram/><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PrimeElectronics. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
