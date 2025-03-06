import React from "react";
import { Navigate } from "react-router-dom";

// Utility to check if the user is authenticated
const isAuthenticated = () => {
  // Replace this with your actual authentication check logic
  return localStorage.getItem("token") !== null;
};

const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
