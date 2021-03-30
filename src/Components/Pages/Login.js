import React, { useState, useEffect } from "react";
import SubNav from "../Reusables/SubNav";
import Button from "../Reusables/Button";
import Eye from "../../Images/Icons/Eye.svg";
import { getUser } from "../Reusables/Amount";
import { Link, Redirect } from "react-router-dom";
import Loading from "../Reusables/Loading";

function Login() {
  // state for toggle password and toggle remember me
  const [multiState, setMultiState] = useState({
    showPassword: "password",
    rememberMe: false,
  });
  const {rememberMe, showPassword} = multiState
  


  //state for loading screen
  const [isFetching, setIsFetching] = useState(false);



  // state object for user details
  const [user, setUser] = useState({
    email: "",
    password: "",
  });



  //state for checking localstorage for saved info on load
  const [isSaved, setIsSaved] = useState({
    saved: false,
    userEmail: "",
  });



  //for remember me check button
  const rememberMeButton = () => {
    rememberMe === false ? setMultiState({...multiState, rememberMe: true}) : setMultiState({...multiState, rememberMe: false});
  };
  

  const checkStorage = () => {
    const use = localStorage.getItem("user");
    if (use !== null) {
      let data = JSON.parse(use);
      setIsSaved({ ...isSaved, userEmail: data, saved: true });
      setUser({ ...user, email: data });
    }
  };
  useEffect(() => {
    checkStorage();
  }, []);

  const handleChange = (e) => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  //handling submit, import fetch function and save to local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      getUser(isFetching, setIsFetching);
      const savedUser = JSON.stringify(user.email);
      if (rememberMe) {
        localStorage.setItem("user", savedUser);
      }
    } else {
      alert("cannot submit");
    }
  };

  if (rememberMe){
    return <Redirect to='/dashboard' />
  }
  return isFetching === true ? (
    <Loading />
  ) : (
    <div className="purchase-wrapper">
      <div className="purchase">
        <div className="header-wrapper my-3">
          <SubNav />
        </div>

        <form>
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
                value={user.email}
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
              value={user.password}
              name="password"
            />
            <i>
              <img
                src={Eye}
                className="unmask"
                alt="show password"
                onClick={() => {
                  if (showPassword === "password") {
                    setMultiState({...multiState, showPassword: "text"});
                  } else {
                    setMultiState({...multiState, showPassword: "password"});
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