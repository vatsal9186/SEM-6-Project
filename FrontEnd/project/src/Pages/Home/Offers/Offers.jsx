/* eslint-disable no-unused-vars */
import React from 'react';
import { Truck, RotateCw, Headphones, CreditCard } from 'lucide-react';
import './Offers.css';

const features = [
    {
      icon: <Truck className='icon' />, 
      title: 'FREE DELIVERY',
      description: 'Free shipping on all orders'
    },
    {
      icon: <RotateCw className='icon' />, 
      title: 'RETURNS',
      description: 'Back guarantee under 7 days'
    },
    {
      icon: <Headphones className='icon' />, 
      title: 'SUPPORT 24/7',
      description: 'Support online 24 hours a day'
    },
    {
      icon: <CreditCard className='icon' />, 
      title: 'PAYMENTS',
      description: '100% payment security'
    }
  ];

function Offers(){

    return(
        <div className='features-container'>
            {features.map((feature, index) => (
                <div key={index} className='feature-item'>
                <div className='icon-container'>{feature.icon}</div>
                <h3 className='title'>{feature.title}</h3>
                <p className='description'>{feature.description}</p>
                </div>
            ))}
        </div>
    );

}

export default Offers;