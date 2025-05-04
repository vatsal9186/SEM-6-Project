import React, { useEffect, useState } from "react";
import "./Allproducts.css";
import axios from "axios";

const Allproducts = () => {
  const [productlist, setProductList] = useState([]);

  // Fetch all products from backend
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products/");
      setProductList(response.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProductList([]);
    }
  };

  // Delete product by ID
  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete("http://localhost:5000/api/products/remove", {
        data: { id: productId },
      });

      if (response.status === 200) {
        // console.log("Product deleted successfully");
        fetchAllProducts(); // Refresh the list
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="table-container">
      <h1 className="table-heading">Product List</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Specs</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productlist.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-data">No products available</td>
            </tr>
          ) : (
            productlist.map((product) => (
              <tr key={product._id}>
                <td>
                  <img src={product.image} alt={product.name} className="product-img" />
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.specs}</td>
                <td>Rs. {product.price}</td>
                <td>
                  <button
                    className="action-button delete-button"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Allproducts;
