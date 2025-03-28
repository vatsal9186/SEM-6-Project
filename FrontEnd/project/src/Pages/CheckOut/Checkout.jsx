/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [isDelivery, setIsDelivery] = useState(true);
  const [formData, setFormData] = useState({
    fullName: 'Brandon Johnson',
    email: 'brandonjohnson@gmail.com',
    phone: '+1 425 151 2318',
    country: 'United States',
    city: '',
    state: '',
    zipCode: ''
  });

  const cartItems = [
    { 
      name: 'DuoComfort Sofa Premium', 
      quantity: 1, 
      price: 20.00,
      image: '/path/to/sofa-image.jpg'
    },
    { 
      name: 'IronOne Desk', 
      quantity: 1, 
      price: 25.00,
      image: '/path/to/desk-image.jpg'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 5.00;
    const discount = 10.00;
    return subtotal + shipping - discount;
  };

  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">
        <h1 className="store-logo">FURNEST</h1>
        <div className="checkout-progress">
          <span className="progress-step active">Cart</span>
          <span className="progress-step active">Review</span>
          <span className="progress-step current">Checkout</span>
        </div>

        <div className="checkout-content">
          <div className="shipping-section">
            <h2>Checkout</h2>
            <div className="shipping-method">
              <button 
                className={`method-btn ${isDelivery ? 'active' : ''}`}
                onClick={() => setIsDelivery(true)}
              >
                🚚 Delivery
              </button>
              <button 
                className={`method-btn ${!isDelivery ? 'active' : ''}`}
                onClick={() => setIsDelivery(false)}
              >
                🏢 Pick up
              </button>
            </div>

            <form className="shipping-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone number *</label>
                <div className="phone-input">
                  <select className="country-code">
                    <option>🇺🇸 +1</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Country *</label>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div className="address-group">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter city"
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Enter state"
                  />
                </div>
                <div className="form-group">
                  <label>ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="Enter ZIP code"
                  />
                </div>
              </div>

              <div className="terms-agreement">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">I have read and agree to the Terms and Conditions</label>
              </div>
            </form>
          </div>

          <div className="cart-section">
            <h2>Review your cart</h2>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">1x</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>$45.00</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="summary-row discount">
                <span>Discount</span>
                <span>-$10.00</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            <div className="discount-input">
              <input type="text" placeholder="Discount code" />
              <button>Apply</button>
            </div>

            <button className="pay-now-btn">Pay Now</button>

            <div className="secure-checkout">
              🔒 Secure Checkout - SSL Encrypted
              <p>Ensuring your financial and personal details are secure during every transaction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;