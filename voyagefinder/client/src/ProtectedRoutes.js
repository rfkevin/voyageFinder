import React from "react";
import { Navigate, Outlet } from "react-router";
import {} from "./component/Auth/Auth";

const ProtedRoutes = () => {
  const storeUser = JSON.parse(localStorage.getItem("profile"));
  console.log(storeUser);
  if (storeUser) {
    return Object.keys(storeUser).length === 0 &&
      storeUser.constructor === Object ? (
      <Navigate to="/auth" />
    ) : (
      <Outlet />
    );
  } else {
    return <Navigate to="/auth" />;
  }
};

export default ProtedRoutes;
