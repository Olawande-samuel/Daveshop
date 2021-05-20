import React, { useState, useEffect, useContext } from "react";
import SubNav from "../Reusables/SubNav";
import Add from "../../Images/Icons/Add.svg";
import Search from "../../Images/Icons/Search.png";
import axios from "axios";

import { Link } from "react-router-dom";
import Loading, { MiniLoading } from "../Reusables/Loading";
import UserContext from "../../Context/User/userContext";
import NumModal from "../NumModal";

function Wallet() {
  return <MyWallet />;
}

export const MyWallet = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(true);
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
  const [balance, setBalance] = useState(0);

  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
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
  useEffect(() => {
    let mounted = true;

    axios
      .get(process.env.REACT_APP_END_POINT, { params: balanceLoad })
      .then((res) => {
        console.log(res);
        if (mounted) {
          setBalLoading(false);
          if (res.data.response === balanceLoad.action) {
            setBalance(res.data.walletbalance_th);
            setLoading(false);
          }
        }
      })
      .catch((err) => console.log(err));

    axios
      .get(process.env.REACT_APP_END_POINT, {
        params: historyLoad,
      })
      .then((response) => {
        if (mounted) {
          setLoading(false);
          setData(response.data);
        }
        console.log(response);
      })
      .catch((err) => console.log(err));

    return () => {
      mounted = false;
    };
  }, []);

  console.log(data.length);
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
  return isLoading === true ? (
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
            <div className=" transaction-header">
              <p>Recent Transaction</p>
            </div>
            <img src={Search} alt="search" />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="search"
              className="form-control"
              id="search"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          {data.length < 1  ? (
            <div className="bottom text-center">No recent transactions</div>
          ) : (
          <div className="bottom">
            {data
              .filter((item) =>
                item.type.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((datum) => (
                <div
                  className="d-flex justify-content-around align-items-center mb-3"
                  key={datum.id}
                >
                  <div className="icon-wrapper">
                    <img src={changeImage(datum.type)} alt="logo" />
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
                        Successful
                      </div>
                    </div>
                    <div className="bottom-details  d-flex justify-content-between align-items-center">
                      <div style={{ fontSize: "12px" }}>
                        <small>
                          {new Date(datum.date * 1000).toDateString()}
                        </small>{" "}
                        <small>
                          {new Date(datum.date * 1000).toLocaleTimeString()}
                        </small>
                      </div>
                      <div style={{ fontSize: "14px" }}>
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
