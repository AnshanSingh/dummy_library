import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Language from "./pages/Language";
import About from "./pages/About";
import Home from "./components/home/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import RegisterModal from "./components/RegisterModal";
import ProtectedRoute from "./components/ProtectRoute";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    const visited = localStorage.getItem("visited");

    // Show only if not logged in AND first time
    // if (!token && !visited) {
    //   setShowModal(true);
    //   localStorage.setItem("visited", "true");
    // }
    const token = localStorage.getItem("token");

    if (!token) {
      setShowModal(true);
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar />

        {showModal && <RegisterModal closeModal={() => setShowModal(false)} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/language" element={<Language />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
