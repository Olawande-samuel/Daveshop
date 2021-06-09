import React from "react";
import { Redirect, Route } from "react-router";
// import UserContext from "../../Context/User/userContext";


export const PrivateRoute = ({ component: Component, ...rest }) => {
  const item = localStorage.getItem("user");
  const unString = JSON.parse(item);
  // const userContext = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={
        (props) =>
        unString !== null? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
