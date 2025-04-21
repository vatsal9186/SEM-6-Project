/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import About from './Pages/About/About';
// import Laptop from './Pages/Products/Products/Laptop';
import ShopCategory from './Pages/ShopCategory';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Contact from './Pages/Contactus/Contact';
import Cont from './Pages/Contactus/Contact/Cont';
import Products from './Pages/Products';
import MainCheckout from './Pages/CheckOut/MainCheckout';
import Regi from './Pages/Login/Regi';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import Displayorder from './Pages/productdisplay/display';








function App() {


  return (
    <>
      

    <Router>
      <Header />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Laptops' element={<ShopCategory category="Laptops" />} />
        <Route path='/Mobiles' element={<ShopCategory category="Mobiles"/> } />
        <Route path='/TV' element={<ShopCategory category="TV"/> } />
        <Route path='/AC' element={<ShopCategory category="AC"/> } />
        <Route path='/Wash' element={<ShopCategory category="Wash"/> } />
        <Route path='/Refrigerator' element={<ShopCategory category="Refrigerator"/> } />
        <Route path="/Cont" element={<Contact />}  />
        <Route path="/Product/:productId" element={<Products />} />
        <Route path='/Checkout' element={< MainCheckout/>} />
        <Route path='/Registration' element={<Regi />} />
        <Route path='/Login' element={<Login/>} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product" element={<Displayorder />} />

      </Routes>
      <Footer />
    </Router>



    </>
  )
}

export default App
