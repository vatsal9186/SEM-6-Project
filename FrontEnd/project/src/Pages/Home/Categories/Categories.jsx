/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Categories.css';
import image from './rog.png';
import image1 from './mobile.png';
import image2 from './Tv.png';

const images = [
  {
    src: image,
    title: 'Laptops',
    description: 'High-performance laptops with amazing discounts.',
    price: '₹50,000'
  },
  {
    src: image1,
    title: 'Mobiles',
    description: 'Latest smartphones at unbeatable prices.',
    price: '₹20,000',
  },
  {
    src: image2,
    title: 'Smart TVs',
    description: 'Experience 4K UHD like never before.',
    price: '₹70,000'
  }
];

function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((item, index) => (
          <div
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={item.src} alt={item.title} className="carousel-image" />
            <div className="carousel-content">
              <span className="deal-badge">Weekend Deal</span>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p className="price">From {item.price}</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Categories;












// import React, { useEffect, useState } from 'react';
// import './Categories.css';
// import image from './rog.png';
// import image1 from './mobile.png';
// import image2 from './Tv.png';

// const images = [
//   {
//     src: image,
//     title: 'Laptops',
//     description: 'High performance laptops with amazing discounts.',
//     price: '₹50000'
//   },
//   {
//     src: image1,
//     title: 'Mobiles',
//     description: 'Latest smartphones at unbeatable prices.',
//     price: '₹20000'
//   },
//   {
//     src: image2,
//     title: 'Smart TVs',
//     description: 'Experience 4K UHD like never before.',
//     price: '₹700000'
//   }
// ];

// function Categories() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="carousel">
//       {images.map((item, index) => (
//         <div
//           className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
//           key={index}
//         >
//           <img src={item.src} alt={item.title} className="carousel-image" />
//           <div className="carousel-content">
//             <span className="deal-badge">Weekend Deal</span>
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>
//             <p>From <span className="price">{item.price}</span></p>
//             <button className="shop-now">Shop Now</button>
//           </div>
//         </div>
//       ))}

//       <div className="carousel-dots">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${index === currentIndex ? 'active' : ''}`}
//             onClick={() => goToSlide(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Categories;