import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Manageusers.css";

const Manageusers = () => {
  const [users, setUsersList] = useState([]);

  // Fetch all users from API
  const fetchAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/userlist");
      if (response.data?.data) {
        setUsersList(response.data.data);
      } else {
        console.error("Failed to fetch users.");
        setUsersList([]);
      }
    } catch (error) {
      console.error("Error occurred while fetching users:", error);
      setUsersList([]);
    }
  };

  // Delete user by ID
  const handleDelete = async (userId) => {
    try {
      await axios.delete("http://localhost:5000/api/user/delete", {
        data: { id: userId },
      });
      console.log(`User with ID ${userId} deleted.`);
      fetchAllUsers(); // Refresh list
    } catch (error) {
      console.error("Error while deleting user:", error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="user-container">
      <h1 className="title">All Registered Users</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Manageusers;
