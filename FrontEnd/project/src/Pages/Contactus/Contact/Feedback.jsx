/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./feed.css";
import axios from "axios";

const Feedback = () => {
  const [feedBack, setFeedBack] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);

  const validateForm = () => {
    let newErrors = {};
    if (!feedBack.name.trim()) newErrors.name = "Name is required";
    if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(feedBack.email.trim())) {
      newErrors.email = "Valid email is required";
    }
    if (!feedBack.description?.trim()) newErrors.description = "Feedback is required";
    if (charCount > 250) newErrors.description = "Feedback cannot exceed 250 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedBack({ ...feedBack, [name]: value });

    if (name === "description") {
      setCharCount(value.length);
      setErrors((prev) => ({
        ...prev,
        description: value.length > 250 ? "Feedback cannot exceed 250 characters" : "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/feedback", feedBack);
      if (response.status === 201) {
        // alert("Thank you for your feedback!");
        setFeedBack({ name: "", email: "", description: "" });
        setCharCount(0);
        setErrors({});
      } else {
        alert(response.data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred while submitting feedback.");
    }
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
              value={feedBack.name}
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
              value={feedBack.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="description"
              placeholder="Share your feedback (Max 250 characters)"
              value={feedBack.description}
              onChange={handleChange}
              className={errors.description ? "input-error" : ""}
            />
            <div className="char-counter">{charCount}/250</div>
            {errors.description && <span className="error-text">{errors.description}</span>}
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
