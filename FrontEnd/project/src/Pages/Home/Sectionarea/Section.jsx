/* eslint-disable no-unused-vars */
import './Section.css';
import React from 'react';

function Section() {
  const slides = [
    {
      tag: 'NEW PRODUCT',
      title: 'Release Date & Price',
      subtitle: "TODAY'S SUPER OFFER",
      bgColor: 'red-gradient'
    },
    {
      tag: 'BIG SALE',
      title: 'Biggest Discount',
      subtitle: 'UP TO 75% OFF',
      bgColor: 'purple-gradient'
    },
    {
      tag: 'WEEKEND DEAL',
      title: 'The Great Sale',
      subtitle: 'GIFT CARD ₹150',
      bgColor: 'yellow-gradient'
    },
    {
      tag: 'MONTH DEAL',
      title: 'Spring Clean Sale',
      subtitle: 'UP TO 45% OFF',
      bgColor: 'blue-gradient'
    }
  ];

  return (
    <div className="section-container">
      {slides.map((slide, index) => (
        <div key={index} className={`section-box ${slide.bgColor}`}>
          <div className="section-text">
            <span className="section-tag">{slide.tag}</span>
            <h2 className="section-title">{slide.title}</h2>
            <p className="section-subtitle">{slide.subtitle}</p>
            <button className="section-btn">Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section;






// import './Section.css';
// import React from 'react';
// import images from './smartphone.png';
// import images1 from './PC.png';
// import images2 from './refrigerator.png';
// import images3 from './wash.png';

// function Section() {
//   const slides = [
//     {
//         tag: 'NEW PRODUCT',
//         title: 'Release Date & Price',
//         subtitle: "TODAY'S SUPER OFFER",
//         image: images,
//         bgColor: 'red-gradient'
//     },
//     {
//         tag: 'BIG SALE',
//         title: 'Biggest Discount',
//         subtitle: 'UP TO 75% OFF',
//         image: images1,
//         bgColor: 'purple-gradient'
//     },
//     {
//         tag: 'WEEKEND DEAL',
//         title: 'The Great Sale',
//         subtitle: 'GIFT CARD $150',
//         image: images2,
//         bgColor: 'yellow-gradient'
//     },
//     {
//         tag: 'MONTH DEAL',
//         title: 'Spring Clean Sale',
//         subtitle: 'UP TO 45% OFF',
//         image: images3,
//         bgColor: 'blue-gradient'
//     }
// ];

//     return (
//         <>
//              <div className="section-container">
//             {slides.map((slide, index) => (
//                 <div key={index} className={`section-box ${slide.bgColor}`}>
//                     <div className="section-text">
//                         <span className="section-tag">{slide.tag}</span>
//                         <h2 className="section-title">{slide.title}</h2>
//                         <p className="section-subtitle">{slide.subtitle}</p>
//                         <button className="section-btn">Shop Now</button>
//                     </div>
//                     <img
//                         src={slide.image}
//                         alt={slide.title}
//                         className="section-image"
//                     />
//                 </div>
//             ))}
//         </div>
//         </>
//     );
// }

// export default Section;

