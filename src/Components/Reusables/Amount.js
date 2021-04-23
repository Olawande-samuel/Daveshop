import React, { useContext, useState } from "react";
import { Radios } from "../Radios";
import axios from "axios";
import AlertComp from "./AlertComp";
import Arrow from "../../Images/Icons/Arrow.png";

export const Amount = ({ amountValue, handleAmountChange }) => {
  return (
    <div>
      <div className="amount">
        <label htmlFor="amount" className="subheading">
          Amount
        </label>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="Enter Amount... min(50)"
          value={amountValue}
          onChange={handleAmountChange}
        />
      </div>
    </div>
  );
};

export const Package = ({ choice, handleOption }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="data-choice-wrapper">
      <div
        className="selected border py-2 px-2"
        style={{ height: "41px", marginTop: "16px", marginBottom: "8px" }}
        onClick={handleClick}
      >
        <span className="mr-2  ">{choice}</span>
        <i>
          <img src={Arrow} alt="" />
        </i>
      </div>
      <div
        className={toggle ? "mb-2 radio-wrapper" : "no-height"}
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        {Radios.map((radio) => (
          <div className="radio" onClick={handleOption}>
            <label htmlFor={radio.id}>
              <div className="wrap">
                <div className="name">{radio.name}</div>
                <div className="price">
                  <span>#</span> {radio.price}
                </div>
              </div>
            </label>
            <input type="radio" name="data" id={radio.id} value={radio.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const postUser = (setFetch, newUser) => {
  setFetch(true);
  axios
    .post(`http://localhost:8000/users`, newUser)
    .then((response) => {
      if (response.status === 200) {
        setFetch(false);
        alert("success");
      } else if (response.status === 200) {
        alert("An error has occured");
        setFetch(false);
      }
    })
    .catch((err) => console.log(err));
};
