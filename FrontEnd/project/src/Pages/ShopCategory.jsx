/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { all_prod } from '../assets/product';


import React from 'react'
import { Items } from '../Components/items/Items';
import './ShopCategory.css';
import Logo from './Home/LOGO/Logo';

export const ShopCategory = (props) => {
  return (
    <>
    <Logo />
      <div className="shop_cat_prod" style={{display: 'flex', flexWrap: 'wrap', background:' linear-gradient(to right, #a8c0ff, #3f2b96)' ,justifyContent: 'center', gap: '20px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', marginTop: '20px', marginBottom: '20px', marginLeft: '20px', marginRight: '20px'}}> 
        {
          all_prod.map((item, i) => {
              if(props.category === item.category){
                return(
                  <Items key={i} id={item.id} image={item.image} name={item.name} price={item.price} category={item.category} specs={item.specs} />
                );
              }
              else{
                return null;
              }
          })
        }
      </div>
    </>
  )
}

export default ShopCategory;