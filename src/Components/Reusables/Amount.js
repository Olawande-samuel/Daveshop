import React, { useContext } from "react";
import { Radios } from "../Radios";
import axios from "axios";
import AlertComp from "./AlertComp";


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

export const getUser = (setIsAuth, setFetch, User, setShowMessage) => {

  setFetch(true);
  axios
    .get("http://localhost:3000/users")
    .then((response) => {
      console.log(response);
      if (response.status === 200 && response.statusText === "OK") {
        setFetch(false);
        setShowMessage(true)

        setTimeout(() => {
          setShowMessage(false)
        }, 2000);
      }
      const data = response.data;
      console.log(data);
    })
    .catch((err) => console.log(err));
};

export const postUser =(setFetch, newUser) => {
  setFetch(true);
  axios
    .post(`http://localhost:3000/users`, newUser)
    .then((response) => {
      if (response.status === 200 ) {
        setFetch(false);
        alert("success");
      } else if (response.status === 200) {
        alert("An error has occured");
        setFetch(false);
      }
    })
    .catch((err) => console.log(err));
};
