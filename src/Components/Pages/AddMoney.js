import React from "react";
import { Link } from "react-router-dom";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";

function AddMoney() {
  return (
    <div className="purchase-wrapper d-flex justify-content-center align-items-center">
      {/* <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav title="Add money to balance" />
      </div> */}
      <div className=" purchase d-flex flex-column">
      <form >
        <div className="form-group">
          <label htmlFor="amount" className="amount-label">
            Enter amount
          </label>
          <input
            type="text"
            name="amount"
            pattern="[0-9]"
            className="form-control"
            id="amount"
          />
        </div>
          <Button btn="Confirm" btnClass="button btn-large " />
       
      </form>
            </div>
    </div>
  );
}

export default AddMoney;
