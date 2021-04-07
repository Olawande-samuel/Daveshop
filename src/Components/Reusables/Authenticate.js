import React, { useState, useContext, createContext } from "react";
import { Redirect, Route } from "react-router";
import UserContext from "../../Context/User/userContext";
;

export const AuthContext = createContext();
export const ProvideAuth = ({ children }) => {
  return <AuthContext.Provider value={"auth"}>{children}</AuthContext.Provider>;
};
const trial = true;
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const userContext = useContext(UserContext);
  console.log(userContext)
  return (
    <Route
      {...rest}
      render={(props) =>
        trial ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
