import React, { useState, useEffect } from "react";
import SubNav from "../Reusables/SubNav";
import Add from "../../Images/Icons/Add.svg";
import Search from "../../Images/Icons/Search.png";
import axios from "axios";
import { changeImage } from "../../Controller/controller";
import { Link } from "react-router-dom";
import Loading from "../Reusables/Loading";
import NumModal from "../NumModal";

function Wallet() {
  return <MyWallet />;
}

export const MyWallet = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);

  //state for data gotten from server
  const [data, setData] = useState([]);
  const handleClose = () => {
    setShow(false);
  };
  //Get userToken from localstorage
  const item = localStorage.getItem("user");
  const unStringed = JSON.parse(item);
  const userToken = unStringed.usertoken;

  const [balance, setBalance] = useState(0);
  const [display, setDisplay] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const balanceLoad = {
    action: "99",
    usertoken: userToken,
    apptoken: process.env.REACT_APP_APP_TOKEN,
  };
  const historyLoad = {
    action: "09",
    usertoken: userToken,
    apptoken: process.env.REACT_APP_APP_TOKEN,
  };
  
  //fetch balance and previous transaction from server;
  useEffect(() => {
    let mounted = true;
    const formData = new FormData();
    formData.append("usertoken", balanceLoad.usertoken);
    formData.append("action", balanceLoad.action);
    formData.append("apptoken", balanceLoad.apptoken);
    
    axios
      .post(process.env.REACT_APP_END_POINT, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res)
        
        if (mounted) {
          // setLoading(true)
          if (res.data.response === balanceLoad.action) {
            setBalance(res.data.balance_th);
            setLoading(false);
          }
        }
      })
      .catch((err) => alert(err.message));

  //   //Get previous transactions
  //   const HistoryFormData = new FormData();
  //   HistoryFormData.append("usertoken", historyLoad.usertoken);
  //   HistoryFormData.append("action", historyLoad.action);
  //   HistoryFormData.append("apptoken", historyLoad.apptoken);
  //   axios
  //     .post(process.env.REACT_APP_END_POINT, HistoryFormData, {
  //       headers: {
  //         "content-type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => {
  //       if (mounted) {
  //         setLoading(false);
  //         setData(response.data);
  //       }
       
  //     })
  //     .catch((err) => alert(err.message));

    return () => {
      mounted = false;
    };
  }, []);


  return isLoading === true ? (
    <Loading />
  ) : (
    <div className="purchase-wrapper ">
      <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav title={unStringed.fullname} />
      </div>

      <div className="purchase">
        <div className="wallet-wrapper " style={{background: "rgba(14, 73, 152, 1)"}}>
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
            <img
              src={Search}
              alt="search"
              onClick={() => {
                if (display === true) {
                  setDisplay(false);
                } else {
                  setDisplay(true);
                }
              }}
            />
          </div>
          {display && (
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
          )}
          {data.length === 0 ? (
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
