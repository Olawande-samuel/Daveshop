import React, { useState } from "react";
import Purchase from "../Reusables/interactive";
import { Amount } from "../Reusables/Amount";

function Airtime() {
  const [data, setData] = useState({
    network: "",
    phoneNumber: "",
    Amount: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  const handleRadioClick = (e) => {
    // console.log(e.target.value);
    setData({ ...data, network: e.target.value });
  };
  const handleChange = (e) => {
    setData({ ...data, phoneNumber: e.target.value });
  };
  const handleAmountChange = (e) => {
    console.log(e.target.value)
    setData({...data, Amount: e.target.value})
  }
  console.log(data);
  return (
    <div className="purchase-wrapper">
      <div className="purchase">
        <Purchase
          header="Buy airtime"
          rest={<Amount amountValue={data.amount} handleAmountChange={handleAmountChange} />}
          value={data.phoneNumber}
          handleClick={handleClick}
          handleRadioClick={handleRadioClick}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Airtime;
