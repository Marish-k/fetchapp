import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleCoachSignup = () => {
    navigate("/coaches");
  };

  const handleBooking = () => {
    navigate("/booking");
  };


  const handleUserSignup = () => {
    navigate("/addUser");
  };

  const handleUser = () => {
    navigate("/users");
  };

  return (
    <div>
      <div className="menuBar">
        <div className="add-user-button">
          <Link to="/Coaches">Coaches</Link>
        </div>
        <div className="add-user-button">
          <Link to="/Users">Users</Link>
        </div>
        <div className="add-user-button">
          <Link to="/booking">Bookings</Link>
        </div>
      </div>
      <div className="home-title">
        <h2> Welcome...! </h2>
        <p></p>

        <div className="container-wrapper">
          <div className="Coach-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              class="bi bi-person-check-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
              />
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <button onClick={handleCoachSignup}>Coaches</button>
          </div>
          <div className="User-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <button onClick={handleUserSignup}>Join as a User</button>
            <button onClick={handleUser}>User Details</button>
          </div>
          <div className="booking-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              class="bi bi-person-check-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
              />
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <button onClick={handleBooking}>Bookings</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
