import React from "react";
import { Redirect, Route } from "react-router";
// import UserContext from "../../Context/User/userContext";


export const PrivateRoute = ({ component: Component, ...rest }) => {
  const item = localStorage.getItem("log");
  const unString = JSON.parse(item);
  // const userContext = useContext(UserContext);
  const auth = true
  return (
    <Route
      {...rest}
      render={
        (props) =>
        unString !== null? <Component {...props} /> : <Redirect to="/login" />
        // auth === true? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
