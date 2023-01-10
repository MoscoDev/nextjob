import React from "react";
import { Route } from "react-router-dom";
import Job from "../Pages/Job";

const RouteGuard = ({ component: Component, ...rest }) => {
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? (flag = true) : (flag = false);

    return flag;
  }

  return (
    <Route
      path="nav"
      {...rest}
      render={(props) => (hasJWT() ? <Component {...props} /> : <Job />)}
    />
  );
};

export default RouteGuard;
