import React from 'react';
import { Routes, Route } from "react-router-dom";
import Side from '../SideBar/Side';
import AddCategory from '../All Category/AddCategory';
import Manageorders from '../All Category/Manageorders';
import "./D.css";
import Allproducts from '../All Category/Allproducts';
import Managefeedback from '../All Category/Managefeedback';
import Manageusers from '../All Category/Manageusers';
import Login from '../LoginForm/Login';
import Auth from '../AUTHENTICATION/Auth';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-layout">
      <Auth>
        <aside className="sidebar">
          <Side />
        </aside>
        </Auth>
        <main className="main-content">
          <div className="content-wrapper">
            <Routes>
              <Route path="/addcategory" element={<AddCategory />} />
              <Route path="/Manageorders" element={<Manageorders />} />
              <Route path="/Manageproduct" element={<Allproducts />} />
              <Route path="/Managefeedback" element={<Managefeedback />} />
              <Route path="/manage-users" element={<Manageusers/>} />
              <Route path="/Login" element={<Login />} />
              
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;