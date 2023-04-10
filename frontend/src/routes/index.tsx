import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Register from "../pages/Register";
import ProfileUser from "../pages/ProfileUser";
import ProfileAdmin from "../pages/ProfileAdmin";
import ResetPassword from "../pages/ResetPassword";
import ProtectedProfileAdmin from "../components/ProtectedProfileAdmin";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to={"/home"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/profileUser/:id" element={<ProfileUser />} />
      <Route element={<ProtectedProfileAdmin />}>
        <Route path="/profileAdmin/:id" element={<ProfileAdmin />} />
      </Route>
      <Route path="/resetPassword" element={<ResetPassword />} />
    </Routes>
  );
};

export default MyRoutes;
