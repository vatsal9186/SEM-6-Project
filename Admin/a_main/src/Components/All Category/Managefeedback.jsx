import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Managefeedback.css";

const Managefeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  // Fetch all feedback from backend
  const fetchAllFeedback = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/all");
      if (Array.isArray(response.data.data)) {
        setFeedbackList(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  // Delete feedback by ID
  const deleteFeedback = async (id) => {
    try {
      await axios.delete("http://localhost:5000/api/delete", {
        data: { id },
      });
      fetchAllFeedback(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  useEffect(() => {
    fetchAllFeedback();
  }, []);

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">User Feedback</h1>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {feedbackList.length > 0 ? (
            feedbackList.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => deleteFeedback(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-feedback">
                No feedback available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Managefeedback;
