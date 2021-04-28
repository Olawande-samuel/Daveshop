import React from "react";
import Button from "./Button";
import Glo from "../../Images/Icons/Glo.svg";
import Airtel from "../../Images/Icons/Airtel.svg";
import Mtn from "../../Images/Icons/Mtn.svg";
import NineMobile from "../../Images/Icons/Etisalat.svg";


function Purchase({
  header,
  rest,
  handleClick,
  handleRadioClick,
  handleChange,
  value,
}) {
  return (
    <div>
      
      <>
        <header>
          <h5 className="text-center">{header}</h5>
        </header>
        <form>
          <div className="phone">
            <label className="subheading" htmlFor="phone">
              Phone No
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter phone number"
              onChange={handleChange}
              value={value}
            />
          </div>
          <div className="network">
            <p className="subheading" htmlFor="network">
              Select network provider
            </p>
            <div className="network-wrap">
              <label htmlFor="airtel">
                <input
                  type="radio"
                  name="network"
                  id="airtel"
                  value="airtel"
                  onClick={handleRadioClick}
                />
                <img src={Airtel} alt="" />
              </label>
              <label htmlFor="glo">
                <input
                  type="radio"
                  name="network"
                  id="glo"
                  value="glo"
                  onClick={handleRadioClick}
                />
                <img src={Glo} alt="" />
              </label>
              <label htmlFor="mtn">
                <input
                  type="radio"
                  name="network"
                  id="mtn"
                  value="mtn"
                  onClick={handleRadioClick}
                />
                <img src={Mtn} alt="" />
              </label>
              <label htmlFor="nineMobile">
                <input
                  type="radio"
                  name="network"
                  id="nineMobile"
                  value="9mobile"
                  onClick={handleRadioClick}
                />
                <img src={NineMobile} alt="" />
              </label>
            </div>
          </div>
          {rest}
          <Button
            btnClass="button btn-large"
            btn="Proceed"
            handleClick={handleClick}
          />
        </form>
      </>
    </div>
  );
}

export default Purchase;
