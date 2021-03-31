import React, { useState } from "react";
import SubNav from "../Reusables/SubNav";
import Add from "../../Images/Icons/Add.svg";
import Login from "./Login";

function Wallet() {
  const [isAuth, setIsAuth] = useState(false);

  return <MyWallet />;
  // if (isAuth) {
  // } else {
  // 	return <Login/>
  // }
}

export const MyWallet = () => {
  return (
    <div className="purc ">
      <div className="purchase-nav px-3 py-2 border">
        <SubNav />
      </div>

      <div className="purchase">
        <div className="wallet-wrapper bg-dark">
          <div className="left">
            <p>Current balance</p>
            <p>
              #<span>5000</span>
            </p>
          </div>
          <div className="right">
            <p>Add money</p>
            <i>
              <img src={Add} alt="top up account" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wallet;
