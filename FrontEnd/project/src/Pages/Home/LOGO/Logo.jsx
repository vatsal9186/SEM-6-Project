/* eslint-disable no-unused-vars */
import React from 'react';
import { FaTv, FaMobileAlt, FaLaptop, FaSnowflake, FaBox, FaSoap } from 'react-icons/fa';
import './Logo.css';
import { Link } from 'react-router-dom';

const categories = [
    { name: 'TV', icon: <FaTv />, link: "/TV" },
    { name: 'Refrigerator', icon: <FaBox />, link: "/Refrigerator" },
    { name: 'AC', icon: <FaSnowflake />, link: "/AC" },
    { name: 'Mobile', icon: <FaMobileAlt />, link: "/Mobile" },
    { name: 'Laptop', icon: <FaLaptop />, link: "/Laptops" },
    { name: 'Washing Machine', icon: <FaSoap />, link: "/Wash" },
];

function Logo() {
    return (
        <div className="category-container">
            {categories.map((category, index) => (
                <Link to={category.link} key={index} className="category-card">
                    <div className="category-icon">{category.icon}</div>
                    <div className="category-name">{category.name}</div>
                </Link>
            ))}
        </div>
    );
}

export default Logo;
