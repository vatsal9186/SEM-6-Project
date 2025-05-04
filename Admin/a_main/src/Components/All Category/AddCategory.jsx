/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Add.css";
// import axios from "axios";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    specs: "",
    price: "",
    image: "",
    additional: "",
  });

  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSubmitError("");
  };

  const isValidImageURL = (url) => {
    const pattern = /^(https?:\/\/.*\.(png|jpg|jpeg|gif|webp|bmp))(?:\?.*)?$/i;
    return pattern.test(url);
  };

  const addProducts = async () => {
    try {
      // const payload = {
      //   image: formData.image,
      //   name: formData.name,
      //   category: formData.category,
      //   specs: formData.specs,
      //   price: formData.price,
      //   additional: formData.additional,
      // };

      // const response = await axios.post("http://localhost:5000/api/products", payload);
      fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((data) => {
              throw new Error(data.error || "Failed to submit product.");
            });
          }
          return res.json();
        })
        .then((data) => {
          alert("Product added successfully!");
          console.log("product add", data)
          // Optionally reset form here
        })
        .catch((err) => {
          console.error("Error submitting product:", err.message);
          setSubmitError(err.message);
        });
      

      // if (response.status === 201) {
      //   alert("Product added successfully!");
      //   setFormData({
      //     name: "",
      //     category: "",
      //     specs: "",
      //     price: "",
      //     image: "",
      //     additional: "",
      //   });
      // }
    } catch (error) {
      console.error("Product submission failed:", error);
      const msg =
        error.response?.data?.error || "Failed to submit product. Please try again.";
      setSubmitError(msg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProducts();
  };

  return (
    <div className="wrapper">
      <div className="product-form-container">
        <h2 className="form-title">Upload Product Details</h2>
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
            {formData.image && isValidImageURL(formData.image) && (
              <img
                src={formData.image}
                alt="Preview"
                className="image-preview"
              />
            )}
          </div>

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            {/* <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Enter category" /> */}
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Select a category</option>
              <option value="TV">TV</option>
              <option value="Mobiles">Mobile</option>
              <option value="AC">AC</option>
              <option value="Laptops">Laptop</option>
              <option value="Refrigerator">Refrigerator</option>
              <option value="Wash">Washing Machine</option>
            </select>
          </div>

          <div className="form-group">
            <label>Specifications</label>
            <textarea
              name="specs"
              value={formData.specs}
              onChange={handleChange}
              placeholder="Enter specifications"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </div>

          <div className="form-group">
            <label>Additional Information</label>
            <textarea
              name="additional"
              value={formData.additional}
              onChange={handleChange}
              placeholder="Enter additional details"
            ></textarea>
          </div>

          {submitError && <div className="submit-error">{submitError}</div>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
