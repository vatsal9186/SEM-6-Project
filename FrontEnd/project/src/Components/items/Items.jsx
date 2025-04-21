/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";


export const Items = (props) => {
  console.log(props);
  return (
    <>

      <div className="product-card">
        <div className="image-container">
          <Link to={`/Product/${props.id}`}>
            <img src={props.image} alt={props.name} className="product-image" />
          </Link>
        </div>
        <div className="product-info">
          <h3 className="product-name">{props.name}</h3>
          <p className="product-category">{props.category}</p>
          <p className="product-specs">{props.specs}</p>
          <p className="product-description">{props.description}</p>
          <div className="product-price">₹{props.price}</div>
        </div>
      </div>
    </>
  );
};

// Props Validation and Default Values
import PropTypes from "prop-types";

Items.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  specs: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Items.defaultProps = {
  image: "",
  name: "Unnamed Product",
  category: "Miscellaneous",
  specs: "N/A",
  description: "No description available",
  price: 0,
};
