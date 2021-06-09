import React, { useState } from "react";
import SubNav from "../Reusables/SubNav";
import Button from "../Reusables/Button";
import { Link, useHistory } from "react-router-dom";
import Eye from "../../Images/Icons/Eye.svg";
import Loading from "../Reusables/Loading";
import axios from "axios";
import AlertComp from "../Reusables/AlertComp";

function SignUp() {
  const history = useHistory();
  const [alertValue, setAlertValue] = useState({
    value: "",
    type: "",
  });
  const [signupSuccessful, setSignupSuccessful] = useState(false);
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });
  const [multiState, setMultiState] = useState({
    showPassword: "password",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    pword: "",
    cpword: "",
    phone: undefined,
    email: "",
    action: "01",
    apptoken: process.env.REACT_APP_APP_TOKEN,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };
  const handleFirstName = (e) => {
    setFullName({ ...fullName, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    setFullName({ ...fullName, lastName: e.target.value });
  };
  const handleCPassword = (e) => {
    setNewUser({
      ...newUser,
      cpword: e.target.value,
      name: `${fullName.firstName} ${fullName.lastName}`,
    });
  };

  const signUpSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", newUser.name);
    formData.append("pword", newUser.pword);
    formData.append("cpword", newUser.cpword);
    formData.append("phone", newUser.phone);
    formData.append("email", newUser.email);
    formData.append("action", newUser.action);
    formData.append("apptoken", newUser.apptoken);   

    if (newUser.pword !== newUser.cpword) {
      alert("passwords do not match");
    } else {
      if (
        newUser.name !== "" &&
        newUser.pword !== "" &&
        newUser.phone !== "" &&
        newUser.email !== ""
      ) {
        setIsLoading(true);
        axios
          .post(process.env.REACT_APP_END_POINT, formData, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((res) => {
            setIsLoading(false);
            setSignupSuccessful(true);
            if (res.data.response === newUser.action) {
              setAlertValue({
                ...alertValue,
                value: res.data.message,
                type: "success",
              });
              setTimeout(() => {
                history.push("/login");
              }, 2500);
            } else {
              setAlertValue({
                ...alertValue,
                value: res.data.message,
                type: "danger",
              });
            }
          })
          .catch((err) => {
            setIsLoading(false);
            setAlertValue({
              ...alertValue,
              value: "Network Error",
              type: "danger",
            })
            // console.log(err);
          });
      } else {
        alert("fields cannot be empty");
      }
    }
  };

  return isLoading === true ? (
    <Loading />
  ) : (
    <div className="purchase-wrapper">
      <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav />
      </div>
      <div className="purchase">
        <h5 className="text-center mt-3 mb-3">
          Welcome to <strong>Datashopng</strong>{" "}
        </h5>
        <p className="text-center mb-3">
          Sign up and recharge your line with ease
        </p>

        <form className="form">
          {signupSuccessful === true && (
            <AlertComp variant={alertValue.type} alertText={alertValue.value} />
          )}
          <div className="firstName">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={fullName.firstName}
              onChange={handleFirstName}
              required
            />
          </div>
          <div className="lastName">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={fullName.lastName}
              onChange={handleLastName}
              required
            />
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={handleChange}
              required
              name="email"
            />
          </div>
          <div className="number">
            <input
              type="tel"
              min="11"
              max="11"
              placeholder="Mobile Number"
              pattern="[0-9]*"
              value={newUser.phone}
              onChange={handleChange}
              required
              name="phone"
            />
          </div>
          <div className="password">
            <input
              type={multiState.showPassword}
              placeholder="Enter your password"
              value={newUser.pword}
              onChange={handleChange}
              required
              name="pword"
            />
            <i>
              <img
                src={Eye}
                className="unmask"
                alt="show password"
                onClick={() => {
                  if (multiState.showPassword === "password") {
                    setMultiState({ ...multiState, showPassword: "text" });
                  } else {
                    setMultiState({ ...multiState, showPassword: "password" });
                  }
                }}
              />
            </i>
          </div>
          <div className="password">
            <input
              type={multiState.showPassword}
              placeholder="Confirm password"
              value={newUser.cpword}
              name="cpword"
              onChange={handleCPassword}
              required
            />
            <i>
              <img
                src={Eye}
                className="unmask"
                alt="show password"
                onClick={() => {
                  if (multiState.showPassword === "password") {
                    setMultiState({ ...multiState, showPassword: "text" });
                  } else {
                    setMultiState({ ...multiState, showPassword: "password" });
                  }
                }}
              />
            </i>
          </div>

          <Button
            btn="Sign Up"
            btnClass="button btn-large mb-2"
            handleClick={signUpSubmit}
          />

          <p className="text-center mt-4">
            <strong>
              Already have an account?
              <span className="ml-2">
                <Link to="/login">Sign in now</Link>
              </span>
            </strong>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
