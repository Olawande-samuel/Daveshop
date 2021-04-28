import React, { useState, useEffect, useContext } from "react";
import SubNav from "../Reusables/SubNav";
import Add from "../../Images/Icons/Add.svg";
import Search from "../../Images/Icons/Search.png";
import axios from "axios";

import { Link } from "react-router-dom";
import  { MiniLoading } from "../Reusables/Loading";

// import { usePaystackPayment } from "react-paystack";
import UserContext from "../../Context/User/userContext";
import NumModal from "../NumModal";

function Wallet() {
  return <MyWallet />;
}

export const MyWallet = () => {
  const [show, setShow] = useState(false);
  // const [isLoading, setLoading] = useState(false);
  const [miniLoading, setMiniLoading] = useState(false);
  const [balLoading, setBalLoading] = useState(false);
  //state for data gotten from server
  const [data, setData] = useState([]);
  const handleClose = () => {
    setShow(false);
  };
  //Get userToken from localstorage
  const item = localStorage.getItem("user");
  const unStringed = JSON.parse(item);
  const userToken = unStringed.usertoken;

  const [user, FetchedUser] = useContext(UserContext);
  console.log(user);
  const [balance, setBalance] = useState(0);

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
    // setLoading(true);
    setBalLoading(true);
    axios
      .get("http://backend.datashopng.com", { params: balanceLoad })
      .then((res) => {
        console.log(res);
        setBalLoading(false);
        if (res.data.response === balanceLoad.action) {
          setBalance(res.data.walletbalance_th);
          // setLoading(false);
        }
      });
  };

  const getRecentTransaction = () => {
    setMiniLoading(true);
    axios
      .get("http://backend.datashopng.com", {
        params: historyLoad,
      })
      .then((response) => {
        setData(response.data);
        setMiniLoading(false);
        console.log(response);
      });
    };
    console.log(data);

  useEffect(() => {
    // getRecentTransaction();
    checkBalance();
    getRecentTransaction();
    // let mounted = true;
    // if (mounted) {
    // }
    // return function cleanup() {
    //   mounted = false;
    // };
  }, []);

  const changeImage = (image) => {
    switch (image) {
      case "credit":
        return "../Assets/Icons/Top-up-icon.png";
        break;
      case "data":
        return "../Assets/Icons/Data-icon.png";
        break;
      case "airtime":
        return "../Assets/Icons/Airtime-icon.png";
        break;
      case "cable":
        return "../Assets/Icons/Airtime-icon.png";
        break;
      default:
        break;
    }
  };
  return (
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
              {balLoading === true ? (
                <MiniLoading />
              ) : (
                <p className="balance">
                  #<span>{balance}</span>
                </p>
              )}
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
                    setShow(true);
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
          {miniLoading === true ? (
            <MiniLoading />
          ) : (
            <div className="bottom">
              {data.map((datum) => (
                <div
                  className="d-flex justify-content-around align-items-center mb-3"
                  key={datum.id}
                >
                  <div className="icon-wrapper">
                    <img src={changeImage(datum.type)} alt="" />
                  </div>
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
                        {/* {datum.response} */} Successful
                      </div>
                    </div>
                    <div className="bottom-details  d-flex justify-content-between align-items-center">
                      <div style={{fontSize: '12px'}}> 
                        <small>{new Date(datum.date * 1000).toDateString()}</small> {" "}
                      <small>{new Date(datum.date * 1000).toLocaleTimeString()}</small></div>
                      <div style={{fontSize: '14px'}}>
                        <span>#</span>
                        {datum.walletbalance_th}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <NumModal show={show} handleClose={handleClose} />
    </div>
  );
};
export default Wallet;
