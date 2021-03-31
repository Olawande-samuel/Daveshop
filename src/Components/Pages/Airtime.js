import React from "react";
import Purchase from "../Reusables/interactive";
import { Amount } from "../Reusables/Amount";

function Airtime() {
  return (
    <div className="purchase-wrapper">
      <div className="purchase">
        <Purchase header="Buy airtime" rest={<Amount />} />
      </div>
    </div>
  );
}

export default Airtime;
