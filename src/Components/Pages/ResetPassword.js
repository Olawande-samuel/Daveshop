import axios from "axios";
import React, { useState } from "react";
import AlertComp from "../Reusables/AlertComp";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";
import Loading from "../Reusables/Loading";

function ResetPassword() {
  const [userDetails, setUserDetails] = useState({
    apptoken: process.env.REACT_APP_APP_TOKEN,
    action: "05",
    email: "",
  });
  const [passSent, setPassSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertValue, setAlertValue] = useState({
    value: "",
    type: "",
  });
  const postData = () => {
    if (userDetails.mail !== "") {
      setLoading(true);
      axios
        .get(process.env.REACT_APP_END_POINT, {
          params: userDetails,
        })
        .then((res) => {
          setLoading(false);
        

          if (res.data.response === userDetails.action) {
            setPassSent(true);
            setAlertValue({
              ...alertValue,
              value: "Password Reset Successful. Please check your email",
              type: "success",
            });
          } else {
            setPassSent(true);
            setAlertValue({
              ...alertValue,
              value: res.data.message,
              type: "danger",
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          alert('Network error')
        });
    } else {
      setPassSent(true);
      setAlertValue({
        ...alertValue,
        value: "Field cannot be empty",
        type: "danger",
      });
      setTimeout(() => {
        setPassSent(false);
      }, 3000);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    postData();
  };
  return loading === true ? (
    <Loading />
  ) : (
    <div className="purchase-wrapper">
      <div className="purchase">
        <div className="header-wrapper my-3" style={{ width: "100%" }}>
          <SubNav />
        </div>
        <h4 className="text-center my-3">Password Reset</h4>
        <form>
          {passSent === true && (
            <AlertComp variant={alertValue.type} alertText={alertValue.value} />
          )}
          <div className="d-flex flex-column">
            <label htmlFor="Email">Enter email address</label>
            <input
              type="email"
              name="Email"
              id="email"
              value={userDetails.email}
              onChange={(e) => {
                setUserDetails({ ...userDetails, email: e.target.value });
              }}
              placeholder="Enter your email"
            />
          </div>
          <Button
            handleClick={handleClick}
            btn="Submit"
            btnClass=" button lg-btn-screen"
          />
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
