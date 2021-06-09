import React, { useEffect, useState } from "react";
import Purchase from "../Reusables/interactive";
import { Amount } from "../Reusables/Amount";
import SubNav from "../Reusables/SubNav";
import axios from "axios";

function Airtime({ id }) {
  const [data, setData] = useState({
    network: "",
    phoneNumber: "",
    amount: "",
    // id: { id },
    id: "1",
    action: "11",
    apptoken: process.env.REACT_APP_APP_TOKEN,
  });

  //     axios
  //       .post(process.env.REACT_APP_END_POINT, formData, {
  //         headers: {
  //           "content-type": "multipart/form-data",
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data.data);
  //         if (mounted) {
  //           setFetchedResult(res.data.data.sub_services);
  //           setUnlock(true)
  //         }
  //       })
  //       .catch((err) => console.log(err));

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  console.log(data);
  const handleRadioClick = (e) => {
    console.log(e.target.id);
    setData({ ...data, network: e.target.value });
  };
  const handleChange = (e) => {
    setData({ ...data, phoneNumber: e.target.value });
  };
  const handleAmountChange = (e) => {
    console.log(e.target.id);
    setData({ ...data, Amount: e.target.value });
  };
  return (
    <div className="purchase-wrapper">
      <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav />
      </div>
      <div className="purchase">
        <Purchase
          header="Buy airtime"
          rest={
            <Amount
              amountValue={data.amount}
              handleAmountChange={handleAmountChange}
            />
          }
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
