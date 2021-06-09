import axios from "axios";
import React, { useContext, useState } from "react";
import UserContext from "../../Context/User/userContext";
import AlertComp from "../Reusables/AlertComp";
import Button from "../Reusables/Button";
import Loading from "../Reusables/Loading";
import SubNav from "../Reusables/SubNav";

function ChangePassword() {
  const [user] = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({
    confirm: "",
    old: "",
    new: "",
    action: "06",
    Apptoken: process.env.REACT_APP_APP_TOKEN,
    usertoken: user.usertoken,
  });

  const [passChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertValue] = useState({
    value: "",
    type: "",
  });
  const handleOldPassword = (e) => {
    setUserDetails({ ...userDetails, old: e.target.value });
  };
  const handleNewPassword = (e) => {
    setUserDetails({ ...userDetails, new: e.target.value });
  };
  const handleCpassword = (e) => {
    setUserDetails({ ...userDetails, confirm: e.target.value });
  };
  const handleSubmit = () => {
    if (userDetails.old && userDetails.new && userDetails.confirm) {
      setIsLoading(true);

      axios
        .get(process.env.REACT_APP_END_POINT, { params: userDetails })
        .then((res) => console.log(res));
    }
    alert("Fields cannot be empty");
  };
  return isLoading === true ? (
    <Loading />
  ) : (
    <div className="purchase-wrapper">
      <div className="purchase-nav px-3 py-2 border">
        <SubNav title="Reset Password" />
      </div>
      <div className="purchase">
        <form className="form">
          {passChange === true && (
            <AlertComp variant={alertValue.type} alertText={alertValue.value} />
          )}
          <p className="font-weight-bold">Change your password</p>

          <div className="password form-group">
            <input
              type="password"
              placeholder="Enter current password"
              value={userDetails.old}
              onChange={handleOldPassword}
              required
            />
          </div>
          <div className="Cpassword form-group">
            <input
              type="password"
              placeholder="Enter new password"
              value={userDetails.new}
              onChange={handleNewPassword}
              required
            />
          </div>
          <div className="Cpassword form-group">
            <input
              type="password"
              placeholder="Confirm password"
              value={userDetails.confirm}
              onChange={handleCpassword}
              required
            />
          </div>
          <Button
            btn="Change Password"
            btnClass="button btn-large"
            handleClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
