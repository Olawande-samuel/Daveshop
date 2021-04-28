import React, {  useContext, createContext } from "react";
import { Redirect, Route } from "react-router";
import UserContext from "../../Context/User/userContext";
export const AuthContext = createContext();

export const ProvideAuth = ({ children }) => {
  return <AuthContext.Provider value={"auth"}>{children}</AuthContext.Provider>;
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // const test = true;
  const item = localStorage.getItem("user");
  const unString = JSON.parse(item);

  const userContext = useContext(UserContext);
  // const [user] = userContext;
  // console.log(user.message);
  return (
    <Route
      {...rest}
      render={
        (props) =>
        // unString.response === "04"? <Component {...props} /> : <Redirect to="/login" />
        unString !== null? <Component {...props} /> : <Redirect to="/login" />
        // test === true ? (<Component {...props} />) : (<Redirect to="/login" />)
      }
    />
  );
};
