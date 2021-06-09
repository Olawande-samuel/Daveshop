import React, { useState } from "react";
// import { Radios } from "../Radios";
import Arrow from "../../Images/Icons/Arrow.png";
import Cable from "../../Images/cable.svg";
import Data from "../../Images/Data.svg";
import Electricity from "../../Images/Electricity.svg";
import Airtime from "../../Images/Airtime.svg";

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
          placeholder="Enter Amount... min(#90)"
          value={amountValue}
          onChange={handleAmountChange}
        />
      </div>
    </div>
  );
};

export const Package = ({ choice, handleOption, dataOptions, Radios }) => {
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
          <div className="radio" id={radio.pid}>
            <label htmlFor={radio.id} id={radio.pid}>
              <div className="wrap">
                <div className="name">{radio.name}</div>
                <div className="price">
                  <span>#</span> {radio.reseller_price}
                </div>
              </div>
            </label>
            <input
              type="radio"
              name="data"
              id={radio.pid}
              value={radio.reseller_price}
              onClick={handleOption}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const servicesList = [
  {
    id: 1,
    logo: Airtime,
    title: "Buy Airtime",
    route: "/buy-airtime",
  },
  {
    id: 2,
    logo: Data,
    title: "Buy Data",
    route: "/buy-data",
  },
  {
    id: 3,
    logo: Cable,
    title: "Cable Subscription",
    route: "/pay-cable-bill",
  },
  {
    id: 4,
    logo: Electricity,
    title: "Electricity",
    route: "/pay-power-bill",
  },
];
