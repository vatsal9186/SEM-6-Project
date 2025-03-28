/* eslint-disable no-unused-vars */
import React from "react";
import "./loc.css";

const L = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12241.80609365385!2d72.78446658875787!3d24.02850800406621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d03efccd08c85%3A0x3ea6c477dff2cb24!2sSatlasana%2C%20Gujarat%20384330!5e1!3m2!1sen!2sin!4v1741065388650!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default L;
