import React, { useState } from "react";
import Purchase from "../Reusables/interactive";
import { Package } from "../Reusables/Amount";
import SubNav from "../Reusables/SubNav";

function Data({ choice }) {
  const [option, setChoice] = useState("Select Data Package");
  const handleOption = (e) => {
    setChoice(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault()
    console.log('clicked')
  };
  return (
    <div className="purchase-wrapper">
      <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav />
      </div>
      <div className="purchase">
        <Purchase handleClick={handleClick}
          header="Buy Data"
          rest={
            <Package
              choice={option}
              handleOption={handleOption}
              
            />
          }
        />
          </div>
    </div>
  );
}

export default Data;
