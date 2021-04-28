import React, { useState } from "react";
import SubNav from "../Reusables/SubNav";
import Button from "../Reusables/Button";
import { Link, useHistory } from "react-router-dom";
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

  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    pword: "",
    cpword: "",
    phone: undefined,
    email: "",
    action: "01",
    apptoken: "KJB3J4BK3",
  });
  // console.log(fullName)
  // console.log(newUser)

  // console.log(newUser)
  const handleFirstName = (e) => {
    e.persist();
    setFullName((user) => ({
      ...fullName,
      firstName: e.target.value,
    }));
  };

  const handleLastName = (e) => {
    e.persist();
    setFullName((user) => ({
      ...fullName,
      lastName: e.target.value,
    }));
  };

  // console.log(fullName)
  const handleEmail = (e) => {
    e.persist();
    setNewUser((user) => ({
      ...newUser,
      email: e.target.value.toLowerCase(),
    }));
  };
  const handlePhoneNo = (e) => {
    e.persist();
    if (e.target.validity.valid) {
      setNewUser((user) => ({
        ...newUser,
        phone: e.target.value,
      }));
    }
  };
  const handlePassword = (e) => {
    e.persist();
    setNewUser((user) => ({
      ...newUser,
      pword: e.target.value,
    }));
  };
  const handleCPassword = (e) => {
    e.persist();
    setNewUser((user) => ({
      ...newUser,
      cpword: e.target.value,
      name: `${fullName.firstName} ${fullName.lastName}`,
    }));
  };

  // const clearInputs = () => {
  //   setNewUser((user) => ({
  //     ...newUser,
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     password: "",
  //   }));
  // };

  const signUpSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
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
          .get("http://backend.datashopng.com", { params: newUser })
          .then((res) => {
            console.log(res);
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
              onChange={handleEmail}
              required
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
              onChange={handlePhoneNo}
              required
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Enter your password"
              value={newUser.pword}
              onChange={handlePassword}
              required
            />
          </div>
          <div className="Cpassword">
            <input
              type="password"
              placeholder="Confirm password"
              value={newUser.cpword}
              onChange={handleCPassword}
              required
            />
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
