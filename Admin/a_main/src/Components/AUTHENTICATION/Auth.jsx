import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem('admin');

    if (!admin && location.pathname !== '/Login') {
      navigate('/Login'); // redirect to correct login route
    } else if (location.pathname === '/Login') {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location, navigate]);

  return <div>{showNav && children}</div>;
};

export default Auth;