import React, { useState, useEffect } from "react";
import Button from "./Button";
import Glo from "../../Images/Icons/Glo.svg";
import Airtel from "../../Images/Icons/Airtel.svg";
import Mtn from "../../Images/Icons/Mtn.svg";
import NineMobile from "../../Images/Icons/Etisalat.svg";
import axios from "axios";

// TODO
/*
  pass fetchedDetails down as props
  map through it
*/
function Purchase({
  header,
  rest,
  handleClick,
  handleRadioClick,
  handleChange,
  value,
  fetchedDetails,
  access,
}) {
  const [data, setData] = useState({
    network: "",
    phoneNumber: "",
    amount: "",
    id: "1",
    action: "11",
    apptoken: process.env.REACT_APP_APP_TOKEN,
  });
  const [fetchedResult, setFetchedResult] = useState([]);
  const [unLock, setUnlock] = useState(false);
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
          setUnlock(true);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      mounted = false;
    };
  }, []);
  const changeImage = (image) => {
    switch (image) {
      case "Glo":
        return Glo;
      case "Airtel":
        return Airtel;
      case "MTN":
        return Mtn;
      case "9-Mobile":
        return NineMobile;
      default:
        break;
    }
  };
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
              {fetchedResult.map((item) => (
                <>
                  <label htmlFor={item.name} key={item.sid}>
                    <input
                      type="radio"
                      name="network"
                      id={item.sid}
                      value={item.name.toLowerCase()}
                      onClick={handleRadioClick}
                    />
                    <img
                      src={changeImage(item.name)}
                      alt={item.name.toLowerCase()}
                    />
                  </label>
                </>
              ))}
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
