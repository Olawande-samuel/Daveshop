import React, { useState, useEffect, useContext } from "react";
import SubNav from "../Reusables/SubNav";
import Add from "../../Images/Icons/Add.svg";
import Search from "../../Images/Icons/Search.png";
import axios from "axios";

import { Link, Route, Switch } from "react-router-dom";
import Loading from "../Reusables/Loading";

// import { usePaystackPayment } from "react-paystack";
import UserContext from "../../Context/User/userContext";
import userEvent from "@testing-library/user-event";
import AddMoney from "./AddMoney";
import AddMethod from "./AddMethod";
import NumModal from "../NumModal";

function Wallet() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  return (
    <MyWallet />
  );
}

export const MyWallet = () => {
  const [ show, setShow]=useState(false);
  const [isLoading, setLoading] = useState(false);
  const [miniLoading, setMiniLoading] = useState(false);
  //state for data gotten from server
  const [data, setData] = useState([]);
const handleClose =()=>{
  setShow(false)
}
  //Get userToken from localstorage
  const item = localStorage.getItem("user");
  const unStringed = JSON.parse(item);
  const userToken = unStringed.usertoken;

  const [user, FetchedUser] = useContext(UserContext);
  console.log(user);
  const [balance, setBalance] = useState(0);
  
  
  //paystack tools
  const config = {
    reference: new Date().getTime(),
    email: user.email,
    amount: 5000,
    publicKey: process.env.REACT_APP_PUBLIC_KEY,
  };
  // update backend with loaded amount
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
  const historyLoad = {
    action: "09",
    usertoken: userToken,
    apptoken: "KJB3J4BK3",
  };
  //fetch balance and previous transaction from server;
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


  const getRecentTransaction = () => {
    setMiniLoading(true)
    axios
      .get("http://backend.datashopng.com", {
        params: historyLoad,
      })
      .then((response) => {
        console.log(response);
        setData(response.data);
        setMiniLoading(false)
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
                    setShow(true)
                    
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
                {miniLoading === true ? <Loading /> : 
          <div className="bottom">
            {data.map((datum) => (
              <div
                className="d-flex justify-content-around align-items-center mb-3"
                key={datum.id}
              >
                <div className="icon-wrapper">{
                    

                }</div>
                <div className="details-wrapper d-flex flex-column">
                  <div className="top-details d-flex justify-content-between align-items-center">
                    <div>{datum.type}</div>
                    <div
                      className={
                        datum.response === "Failed"
                          ? "text-danger"
                          : "text-info"
                      }
                    >
                      {datum.response}
                    </div>
                  </div>
                  <div className="bottom-details  d-flex justify-content-between align-items-center">
                    <div>{new Date(datum.date * 1000).toDateString()}</div>
                    <div>
                      <span>#</span>
                      {datum.walletbalance_th}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>}
        </div>
      </div>
      <NumModal show={show} handleClose={handleClose} />
    </div>
  );
};
export default Wallet;
