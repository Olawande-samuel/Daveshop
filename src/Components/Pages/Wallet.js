import React, { useState, useEffect, useContext } from "react";
import SubNav from "../Reusables/SubNav";
import Add from "../../Images/Icons/Add.svg";
import Search from "../../Images/Icons/Search.png";
import axios from "axios";

import { Link } from "react-router-dom";
import Loading from "../Reusables/Loading";

import { usePaystackPayment } from "react-paystack";
import UserContext from "../../Context/User/userContext";
import userEvent from "@testing-library/user-event";

function Wallet() {
  const [isSuccessful, setIsSuccessful] = useState(false);

  return <MyWallet />;
}

export const MyWallet = () => {
  const [isLoading, setLoading] = useState(false);
  //state for data gotten from server
  const [data, setData] = useState([]);
  const item = localStorage.getItem("user");
  const unStringed = JSON.parse(item);
  const userToken = unStringed.usertoken;

  const [user, FetchedUser]=useContext(UserContext);
  console.log(user)
  const [balance, setBalance] = useState(0);

  //fetch balance, email and previous transaction from server;

  //paystack tools
  const config = {
    reference: new Date().getTime(),
    email: user.email,
    amount: 5000,
    publicKey: process.env.REACT_APP_PUBLIC_KEY,
  };
  const payload = {
    type: "credit",
    apptoken: "KJB3J4BK3",
    amount: config.amount,
    usertoken: userToken,
    action: "07",
    log: `Wallet funded with ${config.amount} by ${unStringed.name}`,
  };
  const addMoneyToBackend = () => {
    axios
      .get("http://backend.datashopng.com", {
        params: payload,
      })
      .then((res) => console.log(res));
  };
  const balanceLoad = {
    action: "08",
    usertoken: userToken,
    apptoken: "KJB3J4BK3",
  };
  const checkBalance = () => {
    setLoading(true);
    axios
      .get("http://backend.datashopng.com", { params: balanceLoad })
      .then((res) => {
        console.log(res);
        if (res.data.response === balanceLoad.action) {
          setBalance(res.data.walletbalance_th);
          setLoading(false);
        }
      });
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    // alert(reference.status)
    // setBalance(balance+config.amount)
    addMoneyToBackend();
    console.log(reference);
  };
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);
  const getRecentTransaction = () => {
    axios.get(" http://localhost:8000/transaction").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    getRecentTransaction();
    checkBalance();
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="purchase-wrapper ">
      <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav title={unStringed.fullname} />
      </div>

      <div className="purchase">
        <div className="wallet-wrapper bg-dark">
          <div className="wallet-left">
            <div>
              <p>Current balance</p>
            </div>
            <div>
              <p className="balance">
                #<span>{balance}</span>
              </p>
            </div>
          </div>
          <div className="wallet-right">
            <div>
              <p>Add money</p>
            </div>
            <i>
              <Link>
                <img
                  src={Add}
                  alt="top up account"
                  onClick={() => {
                    initializePayment(onSuccess, onClose);
                  }}
                />
              </Link>
            </i>
          </div>
        </div>

        <div className="transaction-history">
          <div className="top d-flex justify-content-between align-items-center">
            <div className=" transaction-header d-flex justify-content-between align-items-center">
              <p>Recent Transaction</p>
            </div>
            <img src={Search} alt="search" />
          </div>

          <div className="bottom">
            {data.map((datum) => (
              <div
                className="d-flex justify-content-around align-items-center mb-3"
                key={datum.id}
              >
                <div className="icon-wrapper">
                  <img src={datum.image} alt="" />
                </div>
                <div className="details-wrapper d-flex flex-column">
                  <div className="top-details d-flex justify-content-between align-items-center">
                    <div>{datum.type}</div>
                    <div
                      className={`${
                        datum.response === "Failed"
                          ? "text-danger"
                          : "text-info"
                      }`}
                    >
                      {datum.response}
                    </div>
                  </div>
                  <div className="bottom-details  d-flex justify-content-between align-items-center">
                    <div>{datum.date}</div>
                    <div>
                      <span>#</span>
                      {datum.amount}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wallet;
