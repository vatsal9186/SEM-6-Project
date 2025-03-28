/* eslint-disable no-unused-vars */
import React from 'react';
import './TeamSection.css';
import image1 from './CA.png';
import image2 from './Manager.png';
import image3 from './Elec.png';
import image4 from './AsstM.png';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Arjun Mehta",
      role: "Manager",
      img: image2,
    },
    {
      name: "Rishabh Shah",
      role: "Charted Accountant",
      img: image1,
    },
    {
      name: "Ravi Thakor",
      role: "Electrical Engineer",
      img: image3,
    },
    {
      name: "Rajesh Kumar",
      role: "Assistant Manager",
      img: image4,
    }
  ];

  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <hr />
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-links">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
