import React, { useState, useContext } from "react";
import SubNav from "../Reusables/SubNav";
import Button from "../Reusables/Button";
import Eye from "../../Images/Icons/Eye.svg";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Loading from "../Reusables/Loading";
import AlertComp from "../Reusables/AlertComp";
import UserContext from "../../Context/User/userContext";


function Login() {
  const history = useHistory();
  const [user, FetchedUser] = useContext(UserContext);

  // state for toggle password and toggle remember me
  const [multiState, setMultiState] = useState({
    showPassword: "password",
  });
  //deconstructing the multistate object above
  const { showPassword } = multiState;

  // state for loading screen
  const [isLoading, setLoading] = useState(false);

  // state object for user details
  const [payload, setUser] = useState({
    email: "",
    pword: "",
    action: "04",
    apptoken: "KJB3J4BK3",
  });

  //state for checking localstorage for saved info on load
  const [isSaved /*, setIsSaved*/] = useState({
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
 
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...payload, [name]: value });
  };
  //******************Fetching user data*******************

  const getUser = () => {
    const formData = new FormData();
    formData.append("email", payload.email);
    formData.append("pword", payload.pword);
    formData.append("action", payload.action);
    formData.append("apptoken", payload.apptoken);

    axios
      .post(process.env.REACT_APP_END_POINT, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.response === payload.action) {
          setLoading(false);
          setLoginSuccessful(true);

          const userData = JSON.stringify(res.data);
          localStorage.setItem("user", userData);
          FetchedUser(res.data);

          history.push("/");
        } else {
          setLoading(false);
          setLoginSuccessful(true);
          setAlertValue({
            ...alertValue,
            value: res.data.message,
            type: "danger",
          });
          setTimeout(() => {
            setLoginSuccessful(false);
            console.log(payload, user);
          }, 5000);
          // alert(res.data.message)
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  //handling submit, import fetch function and save to local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, pword } = payload;
    if (email !== "" && pword !== "") {
      setLoading(true);
      getUser();
    } else {
      setLoading(false);
      alert("cannot submit");
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="purchase-wrapper">
      <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav />
      </div>
      <div className="purchase">
        <header>
          <h5 className="text-center text-decoration-none mt-3 font-weight-bolder" style={{color: "rgba(14, 73, 152, 1)"}}>
            Sign In
          </h5>
        </header>
        <form>
          {loginSuccessful === true && (
            <AlertComp variant={alertValue.type} alertText={alertValue.value} />
          )}
          {isSaved.saved === true ? (
            <div>
              <h5 className="text-center mt-3 mb-3" style={{color: "rgba(14, 73, 152, 1)"}}>Hello! Welcome back</h5>
              <p className="text-center mb-3" style={{color: "rgba(14, 73, 152, 1)"}}>{isSaved.userEmail}</p>
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
              value={payload.pword}
              name="pword"
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
          <Button
            btn="Login"
            btnClass="button btn-large mb-2"
            handleClick={handleSubmit}
          />
          <div className="bottom d-flex justify-content-between align-items-center">
          <p className="text-left mt-4" style={{fontSize: "14px"}}>
            New to Davepay?{" "}
            <div className="ml-2">
              <Link to="/sign-up">Sign up now</Link>
            </div>
          </p>

          <div className="forgot-password text-right">
            <Link to="/reset-password"style={{fontSize: "14px", fontWeight: "600"}}>
              Forgot password?
            </Link>
          </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
