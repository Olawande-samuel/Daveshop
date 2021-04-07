import React, { useState, useEffect } from "react";
import SubNav from "../Reusables/SubNav";
import Add from "../../Images/Icons/Add.svg";
import Search from "../../Images/Icons/Search.png";
import axios from "axios";
// import Login from "./Login";
import { Redirect, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import AddMethod from "./AddMethod";
import AddMoney from "./AddMoney";
import CardDetails from "./CardDetails";

function Wallet() {
  const [isAuth, setIsAuth] = useState(true);
  const [isSuccessful, setIsSuccessful] = useState(false);

  return (
    <Switch>
      <Route exact path="/user/wallet" component={MyWallet} />
      <Route path="/user/wallet/top-up" component={AddMethod} />
      <Route path="/user/wallet/amount" component={AddMoney} />
      <Route path="/user/wallet/card-details" component={CardDetails} />
    </Switch>
  )
}

export const MyWallet = () => {
  const [data, setData] = useState([]);

  const getRecentTransaction = () => {
    axios.get(" http://localhost:8000/transaction").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    getRecentTransaction();
  }, []);
  return (
    <div className="purchase-wrapper ">
      <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav />
      </div>

      <div className="purchase">
        <div className="wallet-wrapper bg-dark">
          <div className="wallet-left">
            <div>
              <p>Current balance</p>
            </div>
            <div>
              <p className="balance">
                #<span>5000</span>
              </p>
            </div>
          </div>
          <div className="wallet-right">
            <div>
              <p>Add money</p>
            </div>
            <i>
              <Link to="wallet/top-up">
                <img src={Add} alt="top up account" />
              </Link>
            </i>
          </div>
        </div>

        <div className="transaction-history">
          <div className="top d-flex justify-content-between align-items-center">
            <div className=" transaction-header  d-flex justify-content-between align-items-center">
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
