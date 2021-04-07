import React, { useState, useEffect, useContext } from "react";
import SubNav from "../Reusables/SubNav";
import Button from "../Reusables/Button";
import Eye from "../../Images/Icons/Eye.svg";
import axios from "axios";
import { Link, Redirect, useHistory } from "react-router-dom";
import Loading from "../Reusables/Loading";
import User from "./Dashboard";
// import { UserContext } from "../Reusables/UserContext";
import AlertComp from "../Reusables/AlertComp";
import { AuthContext } from "../Reusables/Authenticate";

import UserContext from "../../Context/User/userContext";

function Login() {
  const history = useHistory();
  const userContext = useContext(UserContext);

  // state for toggle password and toggle remember me
  const [multiState, setMultiState] = useState({
    showPassword: "password",
    rememberMe: false,
  });
  //deconstructing the multistate object above
  const { rememberMe, showPassword } = multiState;

  //state for loading screen
  // const [isLoading, setIsLoading] = useState(false);

  // state object for user details
  const [payload, setUser] = useState({
    email: "",
    password: "",
  });

  //state for checking localstorage for saved info on load
  const [isSaved, setIsSaved] = useState({
    saved: false,
    userEmail: "",
  });
  // state for displaying alert
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  //holds alert values
  const [alertValue, setAlertValue] = useState({
    value: "",
    type: "",
  });
  //for remember me check button
  const rememberMeButton = () => {
    rememberMe === false
      ? setMultiState({ ...multiState, rememberMe: true })
      : setMultiState({ ...multiState, rememberMe: false });
  };

  //check auth
  const [isAuth, setIsAuth] = useState(false);

  //set userContext value

  const checkStorage = () => {
    const use = localStorage.getItem("user");
    if (use !== null) {
      let data = JSON.parse(use);
      setIsSaved({ ...isSaved, userEmail: data, saved: true });
      setUser({ ...payload, email: data });
    }
  };

  useEffect(() => {
    checkStorage();
  }, []);

  const handleChange = (e) => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...payload, [name]: value });
  };
  //******************Fetching user data*******************

  //handling submit, import fetch function and save to local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = payload;

    if (email && password) {
      userContext.getUser(payload);
      console.log(userContext);
      if (userContext) {
        console.log("found");
        history.push("/user");
      }

      const savedUser = JSON.stringify(payload.email);
      if (rememberMe) {
        localStorage.setItem("user", savedUser);
      }
    } else {
      alert("cannot submit");
    }
  };

  return userContext.loading === true ? (
    <Loading />
  ) : (
    <div className="purchase-wrapper">
      <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav />
      </div>
      <div className="purchase">
        <header>
          <h5 className="text-center text-decoration-none mt-3 font-weight-bolder">
            Sign In
          </h5>
        </header>
        <form>
          {loginSuccessful ? (
            <AlertComp variant={alertValue.type} alertText={alertValue.value} />
          ) : (
            ""
          )}
          {isSaved.saved === true ? (
            <div>
              <h5 className="text-center mt-3 mb-3">Hello! Welcome back</h5>
              <p className="text-center mb-3">{isSaved.userEmail}</p>
            </div>
          ) : (
            <div className="email">
              <input
                type="email"
                placeholder="Email"
                value={payload.email}
                onChange={handleChange}
                name="email"
                required
              />
            </div>
          )}

          <div className="password">
            <input
              type={showPassword}
              onChange={handleChange}
              placeholder="Enter your password"
              value={payload.password}
              name="password"
            />
            <i>
              <img
                src={Eye}
                className="unmask"
                alt="show password"
                onClick={() => {
                  if (showPassword === "password") {
                    setMultiState({ ...multiState, showPassword: "text" });
                  } else {
                    setMultiState({ ...multiState, showPassword: "password" });
                  }
                }}
              />
            </i>
          </div>
          <div className="remember">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="mb-3"
              onChange={rememberMeButton}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <Button
            btn="Login"
            btnClass="button btn-large mb-2"
            handleClick={handleSubmit}
          />
          <div className="forgot-password text-right">
            <Link to="/reset-password" className="text-right">
              Forgot password?
            </Link>
          </div>

          <p className="text-center mt-4">
            New to <strong>EAI</strong>?{" "}
            <span className="ml-2">
              <Link to="/sign-up">Sign up now</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
