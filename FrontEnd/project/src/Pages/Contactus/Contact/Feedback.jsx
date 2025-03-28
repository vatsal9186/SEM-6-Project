/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./feed.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())) {
      newErrors.email = "Valid email is required";
    }
    if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.comments.trim()) newErrors.comments = "Feedback is required";
    if (charCount > 250) newErrors.comments = "Feedback cannot exceed 250 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "comments") {
      setCharCount(value.length);
      setErrors((prev) => ({
        ...prev,
        comments: value.length > 250 ? "Feedback cannot exceed 250 characters" : "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    console.log("Feedback Submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", phone: "", comments: "" });
    setErrors({});
    setCharCount(0);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-box">
        <h2>We Value Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "input-error" : ""}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="comments"
              placeholder="Share your feedback (Max 250 characters)"
              value={formData.comments}
              onChange={handleChange}
              className={errors.comments ? "input-error" : ""}
            />
            <div className="char-counter">{charCount}/250</div>
            {errors.comments && <span className="error-text">{errors.comments}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={charCount > 250}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;