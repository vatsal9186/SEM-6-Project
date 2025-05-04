/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./display.css";
import { FaTrash } from "react-icons/fa";
import { Items } from "../../Components/items/Items";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "https://via.placeholder.com/80x80.png?text=T-shirt",
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: "https://via.placeholder.com/80x80.png?text=Shirt",
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    image: "https://via.placeholder.com/80x80.png?text=Jeans",
  },
];

const Displayorder = () => {
  // const discount = subtotal * 0.2;
  // const deliveryFee = 15;
  // const total = subtotal - discount + deliveryFee;
  const [AddCart, setAddCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user._id;
      try {
        const response = await fetch(
          `http://localhost:5000/api/order/get-order`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: userId }),
          }
        );
        const data = await response.json();
        setAddCart(data);
        console.log("Products by category:", data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };
    fetchCartItems();
  }, []);

  const deleteItem = (id) => {
    console.log("hello", id);
    const updatedCart = AddCart.filter((item) => item._id !== id);
    setAddCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    const subtotal = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotal(subtotal);
  };

  console.log("hello", AddCart);

  return (
    <div className="cart-container fade-in">
      <h1 className="title slide-in-left">Your Orders</h1>
      <div className="cart-content">
        <div className="cart-items">
          {AddCart.map((order) =>
            order.productId.map((item) => (
              <div className="cart-item zoom-in" key={item._id}>
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p className="price">Rs.{item.price}</p>
                </div>
                <div className="item-actions">
                  <button className="delete-btn">Order Placed</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Displayorder;
