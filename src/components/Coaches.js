import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Coaches() {
  // Replace with your component name
  const [coach, setCoach] = useState(null); // Initialize with null or []
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchCoaches = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get("/coaches");
        setCoach(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoaches();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;
  if (!coach) return <p>No coaches found.</p>;

  return (
    <>
    <div className="menuBar">
    <div className="add-user-button">
        <Link to="/">Home</Link>
      </div>
      <div className="add-user-button">
        <Link to="/Users">Users</Link>
      </div>
      <div className="add-user-button">
        <Link to="/booking">Bookings</Link>
      </div>
      </div>
    <div className="containers">
      {coach.map((item) => (
        <div className="coach-container" key={item.id}>
            <h1>Name : {item.name}</h1><br></br>
          Mobile : {item.mobileNumber}<br></br>
          Specialty : {item.specialty}<br></br>
          DOB: {item.dateOfBirth}<br></br>
          Id : {item.id}
        </div>
      ))}
    </div>
    </>
  );
}

export default Coaches;
