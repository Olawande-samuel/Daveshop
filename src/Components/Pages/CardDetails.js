import React from "react";
import { Link } from "react-router-dom";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";

function CardDetails() {
  return (
    <>
      <div className="purchase-wrapper">
        <div className="purchase-nav px-3 py-2 border-bottom">
          <SubNav title="Add your card details" />
        </div>
        <form className="purchase">
          <div className="form-group">
            <label htmlFor="cardNumber" className="amount-label">
              Card number
            </label>
            <input
              type="text"
              name="CardNumber"
              pattern="[0-9]"
              className="form-control"
              id="cardNumber"
            />
          </div>

          <div className="bottom-form-wrapper d-flex justify-content-between align-items-center">
            <div className="form-group">
              <label htmlFor="Expiry" className="amount-label">
                Expiry date
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="Cvv" className="amount-label">
                CVV
              </label>
              <input
                type="text"
                name="Cvv"
                pattern="[0-9]"
                minLength="3"
                maxLength="3"
                className="form-control"
                id="Cvv"
                placeholder="Enter your CVV"
              />
            </div>
          </div>
          <Link to="/user/wallet/confirm">
          <Button btn="Confirm" btnClass="button btn-large" />
          </Link>
        </form>
      </div>
    </>
  );
}

export default CardDetails;
