import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/signup" />;
  }

  return children;
};

export default ProtectedRoute;

// If user logs out and manually types:
// /dashboard  we must block them for we use Route.jsx
