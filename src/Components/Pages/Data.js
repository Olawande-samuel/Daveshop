import React, { useEffect, useState } from "react";
import Purchase from "../Reusables/interactive";
import { Package } from "../Reusables/Amount";
import SubNav from "../Reusables/SubNav";
import axios from "axios";
import Glo from "../../Images/Icons/Glo.svg";
import Airtel from "../../Images/Icons/Airtel.svg";
import Mtn from "../../Images/Icons/Mtn.svg";
import NineMobile from "../../Images/Icons/Etisalat.svg";
import Button from "../Reusables/Button";

function Data({ choice, id }) {
  const [fetchedResult, setFetchedResult] = useState([]);
  const [option, setChoice] = useState("Select Data Package");
  const [selected, setSelected] = useState({
    network: "",
    id: "",
    phoneNumber: "",
    apptoken: process.env.REACT_APP_APP_TOKEN,
    action: "12",
  });
  const [data, setData] = useState({
    action: "11",
    apptoken: process.env.REACT_APP_APP_TOKEN,
    id: "2",
  });
  const [buyAirtimeData, setBuyAirtimeData] = useState({
    phoneNumber: "",
    amount: "",
    id: ""
  })
  const [Radios, setRadio] = useState([])
  const handleOption = (e) => {
    setBuyAirtimeData({...buyAirtimeData, id: e.target.id, amount: e.target.value})

  };
  console.log(buyAirtimeData)
  const handleRadioClick = (e) => {
    console.log(e.target.id);
    setSelected({ ...selected, network: e.target.value, id: e.target.id });
  };
  console.log(selected);
  const handleChange = (e) => {
    setBuyAirtimeData({ ...buyAirtimeData, phoneNumber: e.target.value });
  };
  useEffect(() => {
    let loaded = true;
    const formData = new FormData();
    formData.append("action", data.action);
    formData.append("apptoken", data.apptoken);
    formData.append("id", data.id);
    console.log(selected);

    axios
      .post(process.env.REACT_APP_END_POINT, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (loaded) {
          console.log(loaded);
          setFetchedResult(res.data.data.sub_services);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      loaded = false;
    };
  }, []);
  useEffect(() => {
    let loaded = true;
    const formData = new FormData();
    formData.append("action", selected.action);
    formData.append("apptoken", selected.apptoken);
    formData.append("id", selected.id);
    console.log(selected);

    axios
      .post(process.env.REACT_APP_END_POINT, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (loaded) {
          setRadio(res.data.data.packages)
        }
      })
      .catch((err) => console.log(err));

    return () => {
      loaded = false;
    };
  }, [selected]);

  const changeImage = (image) => {
    switch (image) {
      case "Glo Data":
        return Glo;
      case "Airtel Data":
        return Airtel;
      case "MTN Data":
        return Mtn;
      case "9-Mobile Data":
        return NineMobile;
      default:
        return Mtn;
    }
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
      <div className="purchase">
        <header>
          <h5 className="text-center">Buy Data</h5>
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
              value={buyAirtimeData.phoneNumber}
            />
          </div>
          <div className="network">
            <p className="subheading" >
              Select network provider
            </p>
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
          <Package choice={option} handleOption={handleOption} Radios={Radios} />
          <Button
            btnClass="button btn-large"
            btn="Proceed"
            handleClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
}

export default Data;
