import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  FaBoxOpen,
  FaShoppingCart,
  FaMoneyBillAlt,
  FaComments,
  FaUsers,
} from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">Prime Electronics</div>
        <div className="menu">
          <Link to="/addcategory" className="menu-item">
            <IoIosAddCircleOutline className="icon" />
            Add Items
          </Link>
          <Link to="/manageproduct" className="menu-item">
            <FaBoxOpen className="icon" />
            Manage Products
          </Link>
          <Link to="/Manageorders" className="menu-item">
            <FaShoppingCart className="icon" />
            Manage Orders
          </Link>
          {/* <Link to="/manage-payment" className="menu-item">
            <FaMoneyBillAlt className="icon" />
            Manage Payment
          </Link> */}
          <Link to="/Managefeedback" className="menu-item">
            <FaComments className="icon" />
            Manage Feedback
          </Link>
          <Link to="/manage-users" className="menu-item">
            <FaUsers className="icon" />
            Manage Users
          </Link>
        </div>
      </div>
      <div className="content">
        <h1>Welcome to Prime Electronics</h1>
        <p>Here is your main content area.</p>
      </div>
    </div>
  );
};

export default Sidebar;
