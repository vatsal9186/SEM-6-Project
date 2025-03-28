
/* eslint-disable no-unused-vars */
import './Heroarea.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './t_v.png';
import image2 from './laptop.png';
import image4 from './s25.png';
import image12 from './Samsungs25.png';
import image5 from './h_p.png';
import image6 from './i16.png';
import image7 from './Wash.png';
import image8 from './hp.png';
import image10 from './refri.png';
import image11 from './AC.png';
import image from './A_C.png';

const products = [
    {
        category: 'TV',
        title: 'LG TV 65 Inch LED 4K Ultra HD Smart TV',
        price: '₹60000',
        originalPrice: '₹70000',
        discount: '-15%',
        image: image1,
    },
    {
        category: 'Laptop',
        title: 'Asus VivoBook 15 Core i5 10th Gen - (8 GB/1 TB HDD/Windows 10 Home)',
        price: '₹50000',
        originalPrice: '₹60000',
        image: image2,
    },
    {
        category: 'Air Conditioner',
        title: 'Lloyd 1.5 Ton 5 Star Inverter Split AC',
        price: '₹40000',
        originalPrice: '₹50000',
        discount: '-26%',
        image: image11,
    },
    {
        category: 'Samsung Galaxy S25 Ultra',
        title: 'Samsung Galaxy S25 Ultra 5G',
        price: '₹110000',
        originalPrice: '₹120000',
        discount: '-3%',
        image: image12,
    },
    {
        category: 'HP Laptop',
        title: 'HP laptop i3-10th Gen',
        price: '₹40000',
        image: image5,
    },
    {
        category: 'iPhone 16',
        title: 'iPhone 16 Pro Max 512 GB',
        price: '₹160000',
        originalPrice: '₹190000',
        discount: '-10%',
        image: image6,
    },
    {
        category: 'Washing Machine',
        title: 'LG 6.5 kg Inverter Fully-Automatic Top Loading Washing Machine',
        price: '₹30000',
        originalPrice: '₹35000',    
        discount: '-20%',
        image: image7,
    },
    {
        category: 'Air Conditioner',
        title: 'Blue Star 1.5 Ton 3 Star, 60 Months Warranty, Wi-Fi Smart Inverter Split AC',
        price: '₹35000',
        originalPrice: '₹40000',
        discount: '-14%',
        image: image,
    },
    {
        category: 'Refrigerator',
        title: 'Samsung 192 L Direct Cool Single Door 4 Star Refrigerator',
        price: '₹95000',
        image: image10,
    }
];

const groupProducts = (products, itemsPerGroup) => {
    const grouped = [];
    for (let i = 0; i < products.length; i += itemsPerGroup) {
        grouped.push(products.slice(i, i + itemsPerGroup));
    }
    return grouped;
};

const Heroarea = () => {
    const groupedProducts = groupProducts(products, 3);

    return (
        <div className='trending-products-container'>
            <h2 className='trending-title'>Trending Products</h2>
            <Carousel 
                showThumbs={false} 
                showStatus={false} 
                infiniteLoop={true} 
                autoPlay={true} 
                interval={5000}
                showIndicators={true}
                className='carousel-container'
            >
                {groupedProducts.map((group, index) => (
                    <div key={index} className='product-group'>
                        <div className='products-wrapper'>
                            {group.map((product, idx) => (
                                <div key={idx} className='product-card'>
                                    <img src={product.image} alt={product.title} className='product-image' />
                                    <div className='product-content'>
                                        <h3 className='product-title'>{product.title}</h3>
                                        <p className='product-category'>{product.category}</p>
                                        <div className='price-section'>
                                            <span className='product-price'>{product.price}</span>
                                            {product.originalPrice && <span className='original-price'>{product.originalPrice}</span>}
                                        </div>
                                        {product.discount && <span className='discount'>{product.discount}</span>}
                                        <div className="action-buttons">
                                            <button className="add-to-cart">Add to Cart</button>
                                            <button className="buy-now">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Heroarea;









// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// import './Heroarea.css';
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import image1 from './t_v.png';
// import image2 from './laptop.png';
// import image4 from './s25.png';
// import image12 from './Samsungs25.png'
// import image5 from './hp.png';
// import image6 from './iphone16.png';
// import image7 from './Wash.png';
// import image8 from './hp.png';
// import image10 from './refri.png';
// // import image11 from './A_C.png'
// import image11 from './abcd.jpg'
// import image from './AC.png'

// const products = [
//     {
//         category: 'TV',
//         title: 'LG TV 65 Inch LED 4K Ultra HD Smart TV',
//         price: '₹60000',
//         originalPrice: '₹70000',
//         discount: '-15%',
//         image: image1,
//     },
//     {
//         category: 'Laptop',
//         title: 'Asus VivoBook 15 Core i5 10th Gen - (8 GB/1 TB HDD/Windows 10 Home)',
//         price: '₹50000',
//         originalPrice: '₹60000',
//         image: image2,
//     },
//     {
//         category: 'Air Conditionar',
//         title: 'Llo d 1.5 Ton 5 Star Inverter S lit AC (5 in 1 Convertible, Anti Corrosion Coating)',
//         price: '₹40000',
//         originalPrice: '₹50000',
//         discount: '-26%',
//         image: image11,
//     },
//     {
//         category: 'Samsung Galaxy S25 Ultra',
//         title: 'Samsung Galaxy S25 Ultra 5G',
//         price: '₹110000',
//         originalPrice: '₹120000',
//         discount: '-3%',
//         image: image12,
//     },
//     {
//         category: 'HP Laptop',
//         title: 'HP laptop i3-10th Gen',
//         price: '₹40000',
//         image: image5,
//     },
//     {
//         category: 'iPhone 16',
//         title: 'iphone 16 pro max 512 GB',
//         price: '₹160000',
//         originalPrice: '₹190000',
//         discount: '-10%',
//         image: image6,
//     },
//     {
//         category: 'Washing Machine',
//         title: 'LG 6.5 kg Inverter Fully-Automatic Top Loading Washing Machine',
//         price: '₹30000',
//         originalPrice: '₹35000',    
//         discount: '-20%',
//         image: image7,
//     },
//     {
//         category: 'Air Conditionar',
//         title: 'Godrej 1 Ton 5 Star, 5-in-l Convertible Cooling, Inverter Split AC',
//         price: '₹35000',
//         originalPrice: '₹40000',
//         discount: '-14%',
//         image: image,
//     },
//     {
//         category: 'Refrigerator',
//         title: 'Samsung 192 L Direct Cool Single Door 4 Star Refrigerator',
//         price: '₹95000',
//         image: image10,
//     }
// ];


// const groupProducts = (products, itemsPerGroup) => {
//     const grouped = [];
//     for (let i = 0; i < products.length; i += itemsPerGroup) {
//         grouped.push(products.slice(i, i + itemsPerGroup));
//     }
//     return grouped;
// };

// const Heroarea = () => {
//     const groupedProducts = groupProducts(products, 3); // Change to 3 for displaying three categories

//     return (
//         <div className='trending-products-container'>
//             <h2 className='trending-title'>Trending Products</h2>
//             <Carousel 
//                 showThumbs={false} 
//                 showStatus={false} 
//                 infiniteLoop={true} 
//                 autoPlay={true} 
//                 interval={5000}
//                 showIndicators={true}
//             >
//                 {groupedProducts.map((group, index) => (
//                     <div key={index} className='product-group'>
//                         <div className='products-wrapper'>
//                             {group.map((product, idx) => (
//                                 <div key={idx} className='product-card'>
//                                     <img src={product.image} alt={product.title} className='product-image' />
//                                     <div className='product-content'>
//                                         <h3 className='product-title'>{product.title}</h3>
//                                         <p className='product-category'>{product.category}</p>
//                                         <div className='price-section'>
//                                             <span className='product-price'>{product.price}</span>
//                                             {product.originalPrice && <span className='original-price'>{product.originalPrice}</span>}
//                                         </div>
//                                         {product.discount && <span className='discount'>{product.discount}</span>}
//                                         <div className="action-buttons">
//                                             <button className="add-to-cart">Add to Cart</button>
//                                             <button className="buy-now">Buy Now</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default Heroarea;




// import './Heroarea.css';
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import image1 from './t_v.png';
// import image2 from './laptop.png';
// import image4 from './s25.png';
// import image12 from './Samsungs25.png';
// import image5 from './hp.png';
// import image6 from './iphone16.png';
// import image7 from './Wash.png';
// import image8 from './hp.png';
// import image10 from './refri.png';
// import image11 from './abcd.jpg';
// import image from './AC.png';

// const products = [
//     {
//         category: 'TV',
//         title: 'LG TV 65 Inch LED 4K Ultra HD Smart TV',
//         price: '₹60000',
//         originalPrice: '₹70000',
//         discount: '-15%'
// ,        image: image1,
//     },
//     {
//         category: 'Laptop',
//         title: 'Asus VivoBook 15 Core i5 10th Gen - (8 GB/1 TB HDD/Windows 10 Home)',
//         price: '₹50000',
//         originalPrice: '₹60000',
//         image: image2,
//     },
//     {
//         category: 'Air Conditioner',
//         title: 'Lloyd 1.5 Ton 5 Star Inverter Split AC (5 in 1 Convertible, Anti Corrosion Coating)',
//         price: '₹40000',
//         originalPrice: '₹50000',
//         discount: '-26%'
// ,        image: image11,
//     },
//     {
//         category: 'Samsung Galaxy S25 Ultra',
//         title: 'Samsung Galaxy S25 Ultra 5G',
//         price: '₹110000',
//         originalPrice: '₹120000',
//         discount: '-3%'
// ,        image: image12,
//     },
//     {
//         category: 'HP Laptop',
//         title: 'HP laptop i3-10th Gen',
//         price: '₹40000',
//         image: image5,
//     },
//     {
//         category: 'iPhone 16',
//         title: 'iPhone 16 Pro Max 512 GB',
//         price: '₹160000',
//         originalPrice: '₹190000',
//         discount: '-10%'
// ,        image: image6,
//     },
//     {
//         category: 'Washing Machine',
//         title: 'LG 6.5 kg Inverter Fully-Automatic Top Loading Washing Machine',
//         price: '₹30000',
//         originalPrice: '₹35000',    
//         discount: '-20%'
// ,        image: image7,
//     },
//     {
//         category: 'Air Conditioner',
//         title: 'Godrej 1 Ton 5 Star, 5-in-1 Convertible Cooling, Inverter Split AC',
//         price: '₹35000',
//         originalPrice: '₹40000',
//         discount: '-14%'
// ,        image: image,
//     },
//     {
//         category: 'Refrigerator',
//         title: 'Samsung 192 L Direct Cool Single Door 4 Star Refrigerator',
//         price: '₹95000',
//         image: image10,
//     }
// ];

// const groupProducts = (products, itemsPerGroup) => {
//     const grouped = [];
//     for (let i = 0; i < products.length; i += itemsPerGroup) {
//         grouped.push(products.slice(i, i + itemsPerGroup));
//     }
//     return grouped;
// };

// const Heroarea = () => {
//     const groupedProducts = groupProducts(products, 3);

//     return (
//         <div className='trending-products-container'>
//             <h2 className='trending-title'>Trending Products</h2>
//             <Carousel 
//                 showThumbs={false} 
//                 showStatus={false} 
//                 infiniteLoop={true} 
//                 autoPlay={true} 
//                 interval={5000}
//                 showIndicators={true}
//                 className='carousel-container'
//             >
//                 {groupedProducts.map((group, index) => (
//                     <div key={index} className='product-group'>
//                         <div className='products-wrapper'>
//                             {group.map((product, idx) => (
//                                 <div key={idx} className='product-card'>
//                                     <img src={product.image} alt={product.title} className='product-image' />
//                                     <div className='product-content'>
//                                         <h3 className='product-title'>{product.title}</h3>
//                                         <p className='product-category'>{product.category}</p>
//                                         <div className='price-section'>
//                                             <span className='product-price'>{product.price}</span>
//                                             {product.originalPrice && <span className='original-price'>{product.originalPrice}</span>}
//                                         </div>
//                                         {product.discount && <span className='discount'>{product.discount}</span>}
//                                         <div className="action-buttons">
//                                             <button className="add-to-cart">Add to Cart</button>
//                                             <button className="buy-now">Buy Now</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

// export default Heroarea;




