import React from "react";
import { useLocation } from "react-router";
import {Navigate, Outlet} from "react-router-dom"
import {} from "./component/Auth/Auth";

const ProtectedAdminRoutes = () => {
  const storeUser = JSON.parse(localStorage.getItem("profile"));
  const location = useLocation();
  if (storeUser) {
    if (
      Object.keys(storeUser).length === 0 &&
      storeUser.constructor === Object
    ) {
      return <Navigate to="/auth" replace state={{from : location}}  />;
    } else {
      if (storeUser.result.type === "AdminLevelAuthorisation") {
        return <Outlet/>;
      } else {
        return <Navigate to="/auth"  replace state={{from : location}} />;
      }
    }
  } else {
    return <Navigate to="/auth"  replace state={{from : location}} />;
  }
};

export default ProtectedAdminRoutes;
