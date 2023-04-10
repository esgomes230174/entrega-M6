import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedProfileAdmin = () => {
  const location = useLocation();

  const token = localStorage.getItem("@user:token");
  const account = localStorage.getItem("@user:account");

  return token && account === "Anunciante" ? (
    <Outlet />
  ) : (
    <Navigate to={"/home"} replace state={{ from: location }} />
  );
};

export default ProtectedProfileAdmin;
