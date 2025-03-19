import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    pinCode: "",
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/users/${id}`, userData);
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="post-container">
      <h2>Update User {id}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">DOB : </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth" // Added name attribute
            value={userData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender" // Added name attribute
            value={userData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email" // Added name attribute
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber" // Added name attribute
            value={userData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pinCode">PinCode:</label>
          <input
            type="text"
            id="pinCode"
            name="pinCode" // Added name attribute
            value={userData.pinCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city" // Added name attribute
            value={userData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state" // Added name attribute
            value={userData.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country" // Added name attribute
            value={userData.country}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}
export default Update;