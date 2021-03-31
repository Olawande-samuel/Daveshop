import React from "react";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";

function AddMoney() {
  return (
    <div className="purchase-wrapper">
      <div className="purchase-nav px-3 py-2 border">
        <SubNav title="Add money to balance" />
      </div>
      <form className="purchase">
          <div className="form-group">
                <label htmlFor="amount" className="amount-label">Enter amount</label>
                <input type="text" name="amount" pattern="[0-9]" className="form-control" id="amount"/>
          </div>
          <Button btn="Confirm" btnClass="button btn-large" />
      </form>
    </div>
  );
}

export default AddMoney;
