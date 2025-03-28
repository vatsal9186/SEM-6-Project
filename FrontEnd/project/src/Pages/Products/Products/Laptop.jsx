/* eslint-disable react/prop-types */
// import { all_prod } from "../../../assets/product";

// const ProductCard = ({ product }) => {
//     return (
//       <div className="product-card">
//         <img src={product.image} alt={product.name} className="product-image" />
//         <h3 className="product-name">{product.name}</h3>
//         <p className="product-category">{product.category}</p>
//         <p className="product-specs">{product.specs}</p>
//         <p className="product-price">{product.price}</p>
//         <button className="add-to-cart">ADD TO CART</button>
//       </div>
//     );
//   };

// function Laptop(){
//     return(
//         <>
//             <div>
//                 <div className="product-grid">
//                     {all_prod.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                     ))}
//                 </div>
//                 <div className="pagination">
//                     <button className="prev-button disabled" disabled>1</button>
//                     <button className="next-button">2</button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Laptop;  


import { all_prod } from "../../../assets/product";
import './Laptop.css';

const ProductCard = ({ product }) => {
  return (
    <>
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.image || "/fallback-image.png"}
          alt={product.name || "No Name"}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name || "Unknown Product"}</h3>
        <p className="product-category">{product.category || "N/A"}</p>
        <p className="product-specs">{product.specs || "No specifications available"}</p>
        <p className="product-price">{product.price || "Price not available"}</p>
        {/* <button className="add-to-cart">ADD TO CART</button> */}
      </div>
    </div>
    </>
  );
};

function Laptop() {
  return (
    <>
    {/* <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> */}
    <div className="laptop-container">
      <h1 className="page-title">Explore Our Latest Laptops</h1>
      <p className="page-subtitle">Find the best laptop that suits your needs!</p>

      <div className="product-grid">
        {all_prod
          .filter((product) => product.category)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
    </>
  );
}

export default Laptop;
