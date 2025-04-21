/* eslint-disable no-unused-vars */
import "./Heroarea.css";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "./t_v.png";
import image2 from "./laptop.png";
import image4 from "./s25.png";
import image12 from "./Samsungs25.png";
import image5 from "./h_p.png";
import image6 from "./i16.png";
import image7 from "./Wash.png";
import image8 from "./hp.png";
import image10 from "./refri.png";
import image11 from "./AC.png";
import image from "./A_C.png";
import { Link } from "react-router-dom";

const Heroarea = () => {
  const [product, setProduct] = useState([]);

  const getTrendingProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/products/random/product"
      );
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch trending products:", error);
    }
  };

  useEffect(() => {
    getTrendingProducts();
  }, []);

  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login to add items to the cart.");
      return;
    }
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, product]));
    alert("Product added to cart successfully!");
  };

  return (
    <div className="trending-products-container">
      <h2 className="trending-title">Trending Products</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showIndicators={true}
        className="carousel-container"
      >
        <div className="product-group">
          <div className="products-wrapper">
            {product.map((product, idx) => (
              <div key={idx} className="product-card">
                <img src={product.image || image11} alt={product.name} className='product-image' />
                <div className="product-content">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <div className="price-section">
                    <span className="product-price">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.discount && (
                    <span className="discount">{product.discount}</span>
                  )}
                  <div className="action-buttons">
                    <button
                      className="add-to-cart"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                    
                    <Link to={`/Product/${product._id}`}>
                    <button className="buy-now">View Product</button>
                </Link>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Heroarea;
