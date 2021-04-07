import React, { useState } from "react";
import Purchase from "../Reusables/interactive";
import { Package } from "../Reusables/Amount";

function Data({ choice }) {
  const [option, setChoice] = useState("Select Data Package");
  const handleOption = (e) => {
    setChoice(e.target.value);
  };
  const handleClick = () => {};
  return (
    <div className="purchase-wrapper">
      <div className="purchase">
        <Purchase
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
