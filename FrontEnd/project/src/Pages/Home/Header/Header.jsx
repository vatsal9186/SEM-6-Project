/* eslint-disable no-unused-vars */
import p1 from "./logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const productList = [
  { id: 1, name: "TV", category: "Electronics"},
  { id: 2, name: "Refrigerator", category: "Appliances"},
  { id: 3, name: "Laptop", category: "Electronics" },
  { id: 4, name: "Mobile", category: "Electronics"},
  { id: 5, name: "AC", category: "Appliances" },
  { id: 6, name: "Washing Machine", category: "Appliances" },
];


function Header() {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const results = productList.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  }, [query]);

  return (
    <>
    
    <header className="header">
      <div className="top-bar">
        <div className="logo">
          <img src={p1} alt="ecomall" className="Main_img" />
        </div>
        <div className="search-container" >
          <div className="category-dropdown">
            <button className="dropdown-btn">All Categories</button>
            <ul className="dropdown-list">
              <li><Link to="/TV">TV</Link></li>
              <li><Link to="/Refrigerator">Refrigerator</Link></li>
              <li><Link to="/Laptops">Laptop</Link></li>
              <li><Link to="/Mobile">SmartPhone</Link></li>
              <li><Link to="/AC">AC</Link></li>
              <li><Link to="/Wash">Washing Machine</Link></li>
            </ul>
          </div>
          <input
            type="text"
            className="search-bar"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>
        <div className="account-info">
          <Link to="/login" className="login">
            <FaUser className="icon" /> <span>Login</span>
          </Link>
          <Link to="/cart" className="cart">
            <FaShoppingCart className="icon" />
            <span className="cart-text">My Cart</span>
            {/* <span className="cart-price">$0.00</span>
             */}
          </Link>
        </div>
      </div>

      

      <nav className="nav-bar">
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Cont">Contact Us</Link></li>
          <li><Link to="/Checkout">Checkout</Link></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;
