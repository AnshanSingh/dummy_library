import React, { useState } from "react";
import axios from "axios";
import "./registermodel.css";

const RegisterModal = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });

      alert("Registration Successful!");
      closeModal();
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={closeModal}>
          ✖
        </button>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegisterModal;
