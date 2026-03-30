import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import first from "../assets/first.jpg";
import "./register.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });

      // Store token
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
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
          <h2>Login Account</h2>
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

          <button className="register-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
