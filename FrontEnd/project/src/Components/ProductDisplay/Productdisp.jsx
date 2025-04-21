
/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import React from "react";
import "./disp.css";

const Productdisp = (props) => {
  const { Product } = props;

  if (!Product) {
    return <div>Product data is not available.</div>; // Fallback for missing product data
  }

  console.log("hello", Product);

  const handleAddToCart = (id) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if(!user) {
        alert("Please login to add items to the cart.");
        return;
      }
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      localStorage.setItem("cartItems", JSON.stringify([...cartItems, Product]));
      alert("Product added to cart successfully!");
  }

  return (
    <div className="productdis" style={{ display: "flex" }}>
      <div className="productdis-left">
        <div className="productdis-img-list"></div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={Product.image} alt="" />
        </div>
      </div>
      <div className="productdis-right">
        <h1>{Product.name}</h1>

        <div className="product-price">₹{Product.price}</div>
        <div className="productdis-right-descr">{Product.additional}</div>
        <h2>About this Item</h2>
        <div className="productdis-right-descr more">
          Upgrade your lifestyle with smart home and personal electronics
          designed for convenience and efficiency. From washing machines for
          effortless laundry to refrigerators with advanced cooling, these
          appliances enhance daily living. Stay entertained with high-definition
          TVs, stay connected with feature-packed mobiles, and enjoy comfort
          with energy-efficient ACs. Whether for work or creativity, laptops
          offer seamless performance, bringing innovation and smart technology
          into your home.
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Productdisp;