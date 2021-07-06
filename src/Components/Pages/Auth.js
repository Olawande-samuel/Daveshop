import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import SubNav from "../Reusables/SubNav";
import Button from "../Reusables/Button";
import { buyData } from "../../Controller/controller";
import Loading from "../Reusables/Loading";
import AlertComp from "../Reusables/AlertComp";

function Auth() {
  const history = useHistory()
  const [token, setToken] = useState("");
  const [data, setData] = useState({
    action: "33",
    apptoken: process.env.REACT_APP_APP_TOKEN,
  });
  const [loading, setLoading] = useState(false);
  const [loadSuccessful, setLoadSuccessful] = useState(false);

  const [alertValue, setAlertValue] = useState({
    value: "",
    type: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    console.log(token)
    const formData = new FormData();
    formData.append("action", data.action);
    formData.append("apptoken", data.apptoken);
    formData.append("usertoken", token);
    setLoading(true);
    console.log(formData)
    buyData(formData)
      .then((res) => {
        console.log(res);
        if (res.data.response === data.action) {
          setLoading(false);
          setLoadSuccessful(true);
          setAlertValue({
            ...alertValue,
            value: res.data.message,
            type: "success",
          });
          setTimeout(() => {
            history.push('/login')
          }, 2500);
        } else {
          setLoadSuccessful(true);
          setLoading(false);
          setAlertValue({
            ...alertValue,
            value: res.data.message,
            type: "danger",
          });
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setToken(e.target.value);
  };
  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className="purchase-wrapper d-flex justify-content-center align-items-center">
        <div className="purchase-nav px-3 py-2 border-bottom">
          <SubNav title="Verify you account" />
        </div>
        <div className=" purchase d-flex flex-column">
          <form>
            {loadSuccessful === true && (
              <AlertComp
                variant={alertValue.type}
                alertText={alertValue.value}
              />
            )}
            <div className="form-group">
              <label htmlFor="amount" className="amount-label">
                Enter token
              </label>
              <input
                type="text"
                name="amount"
                className="form-control"
                id="amount"
                value={token}
                onChange={handleChange}
              />
            </div>
            <Button
              btn="Submit"
              btnClass="button btn-large"
              handleClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
