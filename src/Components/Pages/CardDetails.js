import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";
import cable from "../../Images/cable.svg";
import { servicesList } from "../Reusables/Amount";
function CardDetails() {
  const data = {
    action: "11",
    id: "2",
    service_id: "5",
    apptoken: process.env.REACT_APP_APP_TOKEN,
    //
  };
  // airtime selection 11/1,
  // data selection 11/2,
  // cable selection 11/3
  // electricity selection 11/4

  useEffect(() => {
    let mounted = true;
    const formData = new FormData();
    formData.append("action", data.action);
    formData.append("apptoken", data.apptoken);
    formData.append("id", data.id);

    axios
      .post(process.env.REACT_APP_END_POINT, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    return () => {
      mounted = false;
    };
  }, []);
  const [inptValue, setInptValue] = useState("");

  const [List, setList] = useState([
    {
      id: "two",
      name: "200mb | 2 days",
      price: 200,
    },
    {
      id: "three",
      name: "350mb | 7 days",
      price: 300,
    },
    {
      id: "four",
      name: "1GB | 1 day",
      price: 300,
    },
  ]);
  const handleChange = (e) => {
    setInptValue(e.target.value);
  };

  const func = (id) => {
    if (id !== "four") return true;
    return false;
  };
  console.log(List);

  let real = "real";
  console.log(real.includes("r"));
  return (
    <>
      <div className="purchase-wrapper">
        <div className="purchase-nav px-3 py-2 border-bottom">
          <SubNav title="Add your card details" />
        </div>
        <img src={cable} alt="cable" />
        <form className="purchase">
          <div className="form-group">
            <label htmlFor="cardNumber" className="amount-label">
              Card number
            </label>
            <input
              type="text"
              name="CardNumber"
              pattern="[0-9]"
              className="form-control"
              id="cardNumber"
              value={inptValue}
              onChange={handleChange}
            />
          </div>
          <Button btn="Confirm" btnClass="button btn-large" />
        </form>
      </div>
    </>
  );
}

export default CardDetails;
