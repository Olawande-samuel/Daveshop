import React, { useEffect, useState } from "react";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";
import Startimes from "../../Images/Startimes.png";
import axios from "axios"
function Cable() {
  // const [value, setValue] = useState("select");


  const [data, setData] = useState({
    network: "",
    phoneNumber: "",
    amount: "",
    // id: { id },
    id: "2",
    action: "11",
    apptoken: process.env.REACT_APP_APP_TOKEN,
  });

  const [fetchedResult, setFetchedResult] = useState([]);

  useEffect(() => {
    let mounted = true;
    const formData = new FormData();
    formData.append("action", data.action);
    formData.append("apptoken", data.apptoken);
    formData.append("id", data.id);

    axios
      .post(process.env.REACT_APP_END_POINT, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        if (mounted) {
          setFetchedResult(res.data.data.sub_services);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      mounted = false;
    };
  }, []);
  const handleChange = (e) => {
    console.log(e);
    console.log("done", e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
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
            <input
              type="text"
              name="cardNumber"
              className="form-control"
              placeholder="Enter smartcard number"
            />
          </div>

          <Button
            btn="Next"
            btnClass="button btn-large"
            handleClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
}

export default Cable;
