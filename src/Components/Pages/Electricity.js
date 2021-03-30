import React from "react";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";
import IBEDC from "../../Images/Ibedc.png";
function Electricity() {
  // const [value, setValue] = useState("select");
  const handleChange = (e) => {
    console.log(e);
    console.log("done", e.target.value);
  };
  return (
    <div className="purchase-wrapper">
      <div className="purchase border">
        <div className="header-wrapper border-bottom">
          <SubNav title="TV" />
        </div>
        <form className="form mt-5">
          <div className="form-group px-3 d-flex justify-content-between align-items-center cable-type-container">
            <label htmlFor="cableType">
              <img src={IBEDC} alt="logo" />
            </label>
            <select
              name="cableType"
              id="cableType"
              className="form-control"
              onChange={handleChange}
            >
              <option value="startimes">Ibadan electricity- prepaid</option>
              <option value="dstv">Dstv</option>
              <option value="gotv">Gotv</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Meter number</label>
            <input type="text" name="cardNumber" className="form-control" placeholder="Enter card number" />
          </div>

          <Button btn="Next" btnClass="button btn-large" />
        </form>
      </div>
    </div>
  );
}

export default Electricity;