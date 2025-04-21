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
        <Link to="/manage-orders" className="menu-item">
          <FaShoppingCart className="icon" />
          Manage Orders
        </Link>
        <Link to="/manage-payment" className="menu-item">
          <FaMoneyBillAlt className="icon" />
          Manage Payment
        </Link>
        <Link to="/manage-feedback" className="menu-item">
          <FaComments className="icon" />
          Manage Feedback
        </Link>
        <Link to="/manage-users" className="menu-item">
          <FaUsers className="icon" />
          Manage Users
        </Link>
        {/* <h1>hello hello hello</h1> */}
      </div>
    </div>
  );
};

export default Sidebar;