import React from "react";
import { Link } from "react-router-dom";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";

function Confirm() {
  return (
    <div className="purchase-wrapper">
      <div className="purchase-nav px-3 py-2 border">
        <SubNav title="OTP verification" />
      </div>
      <div className="purchase">
        <form>
          <p>Kindly enter the code your bank sent to you via sms</p>

          <div className="form-group">
            <label htmlFor="Code" className="amount-label">
              Enter Code
            </label>
            <input
              type="text"
              name="Code"
              pattern="[0-9]"
              minLength="6"
              maxLength="6"
              className="form-control"
              id="Code"
            />
          </div>
          <Button btn="Complete Verification" btnClass="button btn-large" />
        </form>
      </div>
    </div>
  );
}

export default Confirm;
