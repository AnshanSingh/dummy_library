import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { MdOutlineLogin } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // redirect to home
    window.location.reload(); // force navbar re-render
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertairy">
      <div className="container-fluid d-flex justify-content-between">
        {/* left side navbar brand */}
        <Link to="/" className="navbar-brand text-white ms-3">
          <img src={logo} alt="main_logo" className="logo" />{" "}
          <span>BL SIR COACING & LIBRARY</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
            <Link
              to="/contact"
              state={{ type: "selected" }}
              className="nav-link text-white"
            >
              Selected
            </Link>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                About
              </Link>
            </li>
            {token ? (
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="nav-link text-white bg-transparent border-0"
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-white">
                    <MdOutlineLogin />
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/register" className="nav-link text-white">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
