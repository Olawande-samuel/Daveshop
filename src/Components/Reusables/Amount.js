import React from "react";
import { Radios } from "../Radios";
import axios from "axios";

export const Amount = () => {
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
          placeholder="Enter Amount"
        />
      </div>
    </div>
  );
};

export const Package = () => {
  return (
    <div className="mb-2 radio-wrapper">
      {Radios.map((radio) => (
        <div className="radio">
          <label htmlFor={radio.id}>
            <div className="wrap">
              <div className="name">{radio.name}</div>
              <div className="price">
                <span>#</span> {radio.price}
              </div>
            </div>
          </label>
          <input type="radio" name="data" id="one" value={radio.price} />
        </div>
      ))}
    </div>
  );
};

export const getUser = async (newUser, setFetch) => {
  setFetch(true);
  axios
    .get("http://localhost:3000/users")
    .then((response) => {
      console.log(response);
      if (response.status >= 200 && response.statusText === "OK") {
        setFetch(false);
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

export const postUser = async (setFetch, newUser) => {
  setFetch(true);
  axios
    .post(`http://localhost:3000/users`, newUser)
    .then((response) => {
      console.log(response);
      if (response.status >= 200 && response.statusText === "Created") {
        setFetch(false);
        alert("success");
      } else if (response.status >= 200 && response.statusText === "OK") {
        alert("An error has occured");
        setFetch(false);
      }
      // console.log(res.json);
    })
    .catch((err) => console.log(err));
};
