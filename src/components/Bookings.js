import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Bookings() {
  // Replace with your component name
  const [booking, setBooking] = useState(null); // Initialize with null or []
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get("/bookings");
        setBooking(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;
  if (!booking) return <p>No coaches found.</p>;

  return (
    <>
    <div className="menuBar">
    <div className="add-user-button">
        <Link to="/">Home</Link>
      </div>
      <div className="add-user-button">
        <Link to="/addUser">AddUser</Link>
      </div>
      <div className="add-user-button">
        <Link to="/coaches">Coaches</Link>
      </div>
      </div>
    <div className="containers">
      {booking.map((item) => (
        <div className="coach-container" key={item.id}>
            <h1>AppointmentDate : {item.appointmentDate}</h1><br></br>
            Slot : {item.slot}<br></br>
            coachId : {item.coachId}<br></br>
            userId: {item.userId}<br></br>
          Id : {item.id}
        </div>
      ))}
    </div>
    </>
  );
}

export default Bookings;
