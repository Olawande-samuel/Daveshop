import React, { useEffect, useState } from "react";
import Purchase from "../Reusables/interactive";
import { Amount } from "../Reusables/Amount";
import SubNav from "../Reusables/SubNav";
import axios from "axios";
import { buyData } from "../../Controller/controller";
import AlertComp from "../Reusables/AlertComp";
import Loading from "../Reusables/Loading";

function Airtime({ id }) {
  const [data, setData] = useState({
    network: "",
    phoneNumber: "",
    amount: "",
    id: "",
    action: "14",
    apptoken: process.env.REACT_APP_APP_TOKEN,
  });
  const [alertValue, setAlertValue] = useState({
    value: "",
    type: "",
  });
  const [loadSuccessful, setLoadSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(data);
  const handleRadioClick = (e) => {
    console.log(e.target.id);
    setData({ ...data, network: e.target.value, id: e.target.id });
  };
  const handlePhoneChange = (e) => {
    setData({ ...data, phoneNumber: e.target.value });
  };
  const handleAmountChange = (e) => {
    setData({ ...data, amount: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.amount < 90) {
      alert("minimum amount is too low");
    } else {
      const formData = new FormData();
      formData.append("action", data.action);
      formData.append("apptoken", data.apptoken);
      formData.append("id", data.id);
      formData.append("phone", data.phoneNumber);
      formData.append("amount", data.amount);
      setLoading(true);
      buyData(formData)
        .then((res) => {
          console.log(res);

          if (res.data.response === data.action) {
            setLoading(false);
            setLoadSuccessful(true);
            setAlertValue({
              ...alertValue,
              value: res.data.message,
              type: "danger",
            });
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

          console.log(err);
        });
    }
  };
  return loading ? (
    <Loading />
  ) : (
    <div className="purchase-wrapper">
      <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav />
      </div>
      <div className="purchase">
        {loadSuccessful === true && (
          <AlertComp variant={alertValue.type} alertText={alertValue.value} />
        )}
        <Purchase
          header="Buy airtime"
          rest={
            <Amount
              amountValue={data.amount}
              handleAmountChange={handleAmountChange}
              minimumAmount="Enter Amount... minimum(#90)"
            />
          }
          value={data.phoneNumber}
          handleClick={handleSubmit}
          handleRadioClick={handleRadioClick}
          handleChange={handlePhoneChange}
        />
      </div>
    </div>
  );
}

export default Airtime;
