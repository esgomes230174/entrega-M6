import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { UserContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const location = useLocation();
  const { selectedUser } = useContext(UserContext);
  const { selectedAnnouncement } = useContext(AnnouncementContext);
  return selectedUser || selectedAnnouncement ? (
    <Outlet />
  ) : (
    <Navigate to={"/home"} replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
