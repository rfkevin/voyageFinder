import React from "react";
import { Navigate, Outlet} from "react-router";
import {} from "./component/Auth/Auth";

const ProtectedAdminRoutes = () => {
  const storeUser = JSON.parse(localStorage.getItem("profile"));
  console.log(storeUser)
  if (storeUser) {
    if (
      Object.keys(storeUser).length === 0 &&
      storeUser.constructor === Object
    ) {
      return <Navigate to="/auth" />;
    } else {
      if (storeUser.result.type === "AdminLevelAuthorisation") {
        return <Outlet/>;
      } else {
        return <Navigate to="/auth" />;
      }
    }
  } else {
    return <Navigate to="/auth" />;
  }
};

export default ProtectedAdminRoutes;
