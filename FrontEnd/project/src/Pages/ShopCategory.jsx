/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Items } from '../Components/items/Items';
import './ShopCategory.css';
import Logo from './Home/LOGO/Logo';

export const ShopCategory = (props) => {
  const [products, setProducts] = useState([]);

  const fetchProductsByCategory = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/category/${props.category}`);
      const data = await response.json();
      setProducts(data);
      console.log('Products by category:', data);
    } catch (error) {
      console.error('Error fetching category products:', error);
    }
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, [props.category]); // Fetch again if category changes

  return (
    <>
      <Logo />
      <div
        className="shop_cat_prod"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px',
        }}
      >
        {products.map((item, i) => (
          <Items
            key={item._id || i}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            category={item.category}
            specs={item.specs}
          />
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
