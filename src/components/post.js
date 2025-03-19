import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const addUser = async (newUserData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/users",
      newUserData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw new Error("Failed to add user");
  }
};

function UserForm() {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8080/users");
      const users = response.data;
      const maxId = users.reduce((max, user) => Math.max(max, user.id), 0);
      const newId = maxId + 1;
      await addUser({ name, dateOfBirth, gender, password, email, mobileNumber, pinCode, city, state, country });
      Navigate("/");
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="post-container">
      <h4>Add a User detail here..</h4>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth">DOB : </label>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <div>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          id="mobileNumber"
          placeholder="Mobile"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        </div>
        <div>
        <input
          type="text"
          id="pinCode"
          placeholder="PinCode"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
        />
        </div>
        <div>
        <input
          type="text"
          placeholder="City"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        </div>
        <div>
        <input
          type="text"
          id="state"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        </div>
        <div>
        <input
          type="text"
          id="country"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add User"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
    </div>
  );
}

export default UserForm;