/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [total, setTotal] = useState(0);
  const user = JSON.parse(localStorage.getItem('user'));

  

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'India',
    city: '',
    state: '',
    address: '' // ✅ Added address
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = "Full name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Valid email is required";
    if (!formData.phone || !/^\+?[0-9\s-]+$/.test(formData.phone)) errors.phone = "Valid phone number required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.address) errors.address = "Address is required"; // ✅ Address validation
    return errors;
  };

  const handleSubmit = (e) => {
    console.log("hello", formData);
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const cartData = JSON.parse(localStorage.getItem('cartItems'));
      const productId = cartData.map(item => item._id);
      try{
        fetch('http://localhost:5000/api/order/create-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            productId,
            userId: user._id,
            mobile : formData.phone,
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          localStorage.removeItem('cartItems'); // Clear cart after successful order
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
      catch(err){
        console.log(err);
      }
      alert("Form submitted successfully!");
    }
  };

  useEffect(() => {
    
    setFormData(prev => ({ ...prev, fullName: user?.fullName || '', email: user?.email || '' , phone: user?.mobile || ''}));
    const cartData = localStorage.getItem('cartItems');
    if (cartData) {
      const parsedCartItems = JSON.parse(cartData);
      const subtotal = parsedCartItems.reduce((sum, item) => sum + item.price, 0);
      setTotal(subtotal);
      console.log(parsedCartItems);
    }
  }, []);

  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">
        <div className="checkout-content">
          <div className="shipping-section">
            <h2>Complete Your Order</h2>

            <form className="shipping-form" onSubmit={handleSubmit} noValidate>
              {[
                { label: 'Full Name', name: 'fullName', type: 'text' },
                { label: 'Email Address', name: 'email', type: 'email' },
                { label: 'Phone Number', name: 'phone', type: 'tel' }
              ].map(({ label, name, type }) => (
                <div className="form-group" key={name}>
                  <label>{label} *</label>
                  <input type={type} name={name} value={formData[name]} onChange={handleInputChange} />
                  {formErrors[name] && <span className="error">{formErrors[name]}</span>}
                </div>
              ))}

              {/* ✅ Address field added */}
              <div className="form-group">
                <label>Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                {formErrors.address && <span className="error">{formErrors.address}</span>}
              </div>

              <div className="address-group">
                {['city', 'state'].map(field => (
                  <div className="form-group" key={field}>
                    <label>{field[0].toUpperCase() + field.slice(1)} *</label>
                    <input type="text" name={field} value={formData[field]} onChange={handleInputChange} />
                    {formErrors[field] && <span className="error">{formErrors[field]}</span>}
                  </div>
                ))}
              </div>

              <button type="submit" className="pay-now-btn">Place Order</button>
            </form>
          </div>

          <div className="order-summary">
            <h3>Your Order</h3>
            <div className="order-items">
              <div className="order-item">
                {/* Placeholder for product items */}
              </div>
            </div>
            <div className="order-summary-total">
              <strong>Total</strong>
              <strong>Rs.{total}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
