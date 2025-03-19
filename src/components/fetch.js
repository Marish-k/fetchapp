import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Fetch() {
  const [users, setUsers] = useState(null); // Initialize with null or []
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  function handleSubmit(id) {
    navigate(`/updateUser/${id}`);
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:8080/users/${id}`);
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
      } catch (err) {
        console.error("Error deleting user:", err);
        alert("Failed to delete user. Please try again.");
      }
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;
  if (!users) return <p>No users found.</p>;

  return (
    <>
    <div className="menuBar">
      <div className="add-user-button">
        <Link to="/addUser">AddUser</Link>
      </div>
      <div className="add-user-button">
        <Link to="/Coaches">Coaches</Link>
      </div>
      <div className="add-user-button">
        <Link to="/booking">Bookings</Link>
      </div>
      </div>
      <div className="containers">
        {users.map((user) => (
          <div key={user.id} className="fetch-container">
            <h1>{user.name} </h1>
            <h2> ({user.id} )</h2>
            Date Of Birth : {user.dateOfBirth}<br />
            City : {user.city}<br />
            PinCode : {user.pinCode}<br />
            Gender : {user.gender}<br /><br />
            <button onClick={() => handleSubmit(user.id)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Fetch;