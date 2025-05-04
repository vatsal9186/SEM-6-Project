import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Manageorders.css";

const Manageorders = () => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/order/allorders");
      if (response.data.success) {
        setOrders(response.data.data || []);
      }
    } catch (error) {
      console.error("Error occurred while fetching orders:", error);
      setOrders([]);
    }
  };

  // const handleDelete = (id) => {
  //   console.log("Delete order with ID:", id);
  // };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order-container">
      <h1 className="order-title">All Orders</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>User ID</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile</th>
            {/* <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-orders">No orders available</td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.productId.join(", ")}</td>
                <td>{order.userId}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>{order.mobile}</td>
                {/* <td>
                  <button
                    className="action-button delete-button"
                    onClick={() => handleDelete(order.id)}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Manageorders;
