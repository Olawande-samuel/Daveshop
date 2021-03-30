import React from "react";
import Button from "./Button";
import Glo from "../../Images/Icons/Glo.svg";
import Airtel from "../../Images/Icons/Airtel.svg";
import Mtn from "../../Images/Icons/Mtn.svg";
import NineMobile from "../../Images/Icons/Etisalat.svg";
import SubNav from "./SubNav";

function Purchase({ header, rest }) {
  return (
    <div>
      <div>
        <SubNav />
      </div>
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
          />
        </div>
        <div className="network">
          <p className="subheading" htmlFor="network">
            Select network provider
          </p>
          <div className="network-wrap">
            <label htmlFor="glo">
              <input type="radio" name="network" id="glo" value="glo" />
              <img src={Airtel} alt="" />
            </label>
            <label htmlFor="airtel">
              <input type="radio" name="network" id="airtel" value="airtel" />
              <img src={Glo} alt="" />
            </label>
            <label htmlFor="mtn">
              <input type="radio" name="network" id="mtn" value="mtn" />
              <img src={Mtn} alt="" />
            </label>
            <label htmlFor="nineMobile">
              <input
                type="radio"
                name="network"
                id="nineMobile"
                value="9mobile"
              />
              <img src={NineMobile} alt="" />
            </label>
          </div>
        </div>
        {rest}
        <Button btnClass="button btn-large" btn="Proceed" />
      </form>
    </div>
  );
}

export default Purchase;
