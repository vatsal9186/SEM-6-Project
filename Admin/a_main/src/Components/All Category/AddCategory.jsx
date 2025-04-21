import React, { useState } from "react";
// import "./AddCategory.css";
import "./AddCaterory.css"

const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    specs: "",
    price: "",
    image: null,
    additional: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  };

  return (
    <div className="product-form-container">
      <h2 className="form-title">Upload Product Details</h2>
      <form className="product-form">
        {/* Image Upload */}
        <div className="form-group image-upload">
          <label>Upload Image</label>
          <input type="file" onChange={handleImageUpload} />
          {formData.image && <img src={formData.image} alt="Preview" className="image-preview" />}
        </div>

        {/* Name */}
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter product name" />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select a category</option>
            <option value="Electronics">TV</option>
            <option value="Electronics">Mobile</option>
            <option value="Electronics">AC</option>
            <option value="Electronics">Laptop</option>
            <option value="Electronics">Refrigerator</option>
            <option value="Electronics">Washing Machine</option>
          </select>
        </div>

        {/* Specs */}
        <div className="form-group">
          <label>Specifications</label>
          <textarea name="specs" value={formData.specs} onChange={handleChange} placeholder="Enter specifications"></textarea>
        </div>

        {/* Price */}
        <div className="form-group">
          <label>Price</label>
          <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Enter price" />
        </div>

        {/* Additional Details */}
        <div className="form-group">
          <label>Additional Information</label>
          <textarea name="additional" value={formData.additional} onChange={handleChange} placeholder="Enter additional details"></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCategory;