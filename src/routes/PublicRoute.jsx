import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { authToken } = useAuth();
  return authToken ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
