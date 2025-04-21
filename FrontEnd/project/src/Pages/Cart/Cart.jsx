/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Cart.css';
import { FaTrash } from 'react-icons/fa';
import { Items } from '../../Components/items/Items';
import { useNavigate } from 'react-router-dom';

const cartItems = [
  {
    id: 1,
    name: 'Gradient Graphic T-shirt',
    size: 'Large',
    color: 'White',
    price: 145,
    image: 'https://via.placeholder.com/80x80.png?text=T-shirt',
  },
  {
    id: 2,
    name: 'Checkered Shirt',
    size: 'Medium',
    color: 'Red',
    price: 180,
    image: 'https://via.placeholder.com/80x80.png?text=Shirt',
  },
  {
    id: 3,
    name: 'Skinny Fit Jeans',
    size: 'Large',
    color: 'Blue',
    price: 240,
    image: 'https://via.placeholder.com/80x80.png?text=Jeans',
  },
];

const Cart = () => {
  
  // const discount = subtotal * 0.2;
  // const deliveryFee = 15;
  // const total = subtotal - discount + deliveryFee;
  const [AddCart, setAddCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();



  useEffect(() =>{
     const cartData = localStorage.getItem('cartItems');
     if(cartData) {
       const parsedCartItems = JSON.parse(cartData);
        setAddCart(parsedCartItems);
        const subtotal = parsedCartItems.reduce((sum, item) => sum + item.price, 0);
        setTotal(subtotal);
       // Assuming you want to set the cart items to state or do something with them
       console.log(parsedCartItems); // or setState(parsedCartItems)
     }

  },[])

  const deleteItem = (id) => {
    console.log("hello",id);
    const updatedCart = AddCart.filter(item => item._id !== id);
    setAddCart(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    const subtotal = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotal(subtotal);
  }

  return (
    <div className="cart-container fade-in">
      <h1 className="title slide-in-left">Your Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {AddCart.map((item) => (
            <div className="cart-item zoom-in" key={item.id}>
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h2>{item.name}</h2>
                {/* <p>Size: {item.size}</p>
                <p>Color: {item.color}</p> */}
                <p className="price">Rs.{item.price}</p>
              </div>
              <div className="item-actions">
                {/* <div className="quantity-selector">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div> */}
                <button onClick={()=>deleteItem(item._id)} className="delete-btn"><FaTrash /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary slide-in-right">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>Rs.{total}</span>
          </div>
          {/* <div className="summary-item">
            <span>Discount (-20%)</span>
            <span className="discount">-${discount}</span>
          </div> */}
          {/* <div className="summary-item">
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div> */}
          <hr />
          <div className="summary-item total">
            <span>Total</span>
            <span>Rs.{total}</span>
          </div>

          {/* <div className="promo-code">
            <input type="text" placeholder="Add promo code" />
            <button>Apply</button>
          </div> */}
          <button onClick={() => navigate("/Checkout") } className="checkout-btn bounce">Go to Checkout →</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
