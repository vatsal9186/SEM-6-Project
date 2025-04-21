/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import arrowicon from '../../assets/arrowicon.png';
import './BreadCrums.css';

const BreadCrums = (props) => {
    const { Product } = props;
    console.log(Product);
  return (
    <>
    <div className='breadcrum'>
        HOME <img src={arrowicon} alt="" />
        SHOP <img src={arrowicon} alt="" />
        {/* {Product.category}<img src={arrowicon} alt="" />{Product.name} */}
    </div>
    </>
  )
}

export default BreadCrums
