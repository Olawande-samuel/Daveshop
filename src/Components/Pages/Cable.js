import React from "react";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";
import Startimes from "../../Images/Startimes.png";
function Cable() {
  // const [value, setValue] = useState("select");
  const handleChange = (e) => {
    console.log(e);
    console.log("done", e.target.value);
  };
  return (
    <div className="purchase-wrapper">
      <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav />
      </div>
      <div className="purchase border">
        
        <form className="form mt-5">
          <div className="form-group px-3 d-flex justify-content-between align-items-center cable-type-container">
            <label htmlFor="cableType">
              <img src={Startimes} alt="logo" />
            </label>
            <select
              name="cableType"
              id="cableType"
              className="form-control"
              onChange={handleChange}
            >
              <option value="startimes">Startimes</option>
              <option value="dstv">Dstv</option>
              <option value="gotv">Gotv</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Smart card number</label>
            <input type="text" name="cardNumber" className="form-control" placeholder="Enter smartcard number"/>
          </div>

          <Button btn="Next" btnClass="button btn-large" />
        </form>
      </div>
    </div>
  );
}

export default Cable;
