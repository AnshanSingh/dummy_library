import axios from "axios";
import { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import first from "../assets/first.jpg";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/register", {
        name: name,
        email: email,
        password: password,
      });

      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-button" onClick={() => navigate("/")}>
          ×
        </button>

        <div className="left">
          <img src={first} alt="register" />
        </div>

        <div className="right">
          <h2>Create Account</h2>

          <input
            type="text"
            placeholder="Enter Full Name"
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

          <button className="register-btn" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
