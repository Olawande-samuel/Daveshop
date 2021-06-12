import React, { useState, useEffect } from "react";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";
import IBEDC from "../../Images/Ibedc.png";
import axios from "axios";
import { buyData } from "../../Controller/controller";
import { Amount } from "../Reusables/Amount";
import Loading from "../Reusables/Loading";
import AlertComp from "../Reusables/AlertComp";
function Electricity() {
  const item = localStorage.getItem("user");
  const unString = JSON.parse(item);
  const [loading, setLoading] = useState(false);
  const [cableImage, setCableImage] = useState("");
  const [alertValue, setAlertValue] = useState({
    value: "",
    type: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const data = {
    id: "4",
    action: "11",
    apptoken: process.env.REACT_APP_APP_TOKEN,
  };

  const [chosenPackage, setChosenPackage] = useState({
    meter: "",
    phone: unString.phone,
    id: "",
    amount: "",
    action: "17",
    electricity: "prepaid",
    apptoken: process.env.REACT_APP_APP_TOKEN,
    usertoken: unString.usertoken,
  });
  const handleAmountChange = (e) => {
    setChosenPackage({ ...chosenPackage, amount: e.target.value });
  };
  const handleMeterCard = (e) => {
    setChosenPackage({ ...chosenPackage, meter: e.target.value });
  };
  //holds the different package services
  const [fetchedResult, setFetchedResult] = useState([]);

  //getting the list of package services
  useEffect(() => {
    setLoading(true);
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
        if (mounted) {
          setFetchedResult(res.data.data.sub_services);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handleChange = (e) => {
    if (e.target.value === "default") {
      return;
    }
    setChosenPackage({ ...chosenPackage, id: e.target.value });
    
  };


  const changeImage = (image) => {
    switch (image) {
      case "IBEDC":
        return IBEDC;
      case "AEDC":
        return "../Assets/Icons/Data-icon.png";
      case "PHEDC":
        return "../Assets/Icons/Airtime-icon.png";
      case "KNEDC":
        return "../Assets/Icons/Airtime-icon.png";
      case "IKEDC":
        return "../Assets/Icons/Airtime-icon.png";
      case "YEDC":
        return "../Assets/Icons/Airtime-icon.png";
      case "JEDC":
        return "../Assets/Icons/Airtime-icon.png";
      case "EEDC":
        return "../Assets/Icons/Airtime-icon.png";
      case "KEDC":
        return "../Assets/Icons/Airtime-icon.png";
      case "EKEDC":
        return "../Assets/Icons/Airtime-icon.png";
      default:
        break;
    }
  };
  //verify details
  //paying for subscription
  const handleSubmit = (e) => {
    setLoading(true)
    const formData = new FormData();
    formData.append("action", chosenPackage.action);
    formData.append("apptoken", chosenPackage.apptoken);
    formData.append("id", chosenPackage.id);
    formData.append("amount", chosenPackage.amount);
    formData.append("meter", chosenPackage.meter);
    formData.append("phone", chosenPackage.phone);
    formData.append("electricity", chosenPackage.electricity);
    formData.append("usertoken", chosenPackage.usertoken);

    e.preventDefault();
    buyData(formData).then((res) => {
      if (res.data.response === chosenPackage.action) {
        setLoading(false);
        setShowAlert(true);
        setAlertValue({
          ...alertValue,
          value: res.data.message,
          type: "success",
        });
      } else {
        setShowAlert(true);
        setLoading(false);
        setAlertValue({
          ...alertValue,
          value: res.data.message,
          type: "danger",
        });
      }
    }).catch(err=>{
      setLoading(false);
      setAlertValue({
        ...alertValue,
        value: err.message,
        type: "danger",
      });
     
    });   
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="purchase-wrapper">
      <div className="purchase-nav px-3 py-2 border-bottom">
        <SubNav />
      </div>
      <div className="purchase border">
        <form className="form mt-5">
        {showAlert === true && (
          <AlertComp variant={alertValue.type} alertText={alertValue.value} />
        )}
          <div className="form-group px-3 d-flex justify-content-between align-items-center cable-type-container">
            <label htmlFor="cableType">
              <img src={changeImage(cableImage)} alt="logo" />
            </label>
            <select
              name="cableType"
              id="cableType"
              className="form-control"
              onChange={handleChange}
            >
              <option value="default" defaultChecked="true">
                Choose a serivce
              </option>
              {fetchedResult.map((item) => (
                <option
                  value={item.sid}
                  id={item.name}
                  onClick={(e) => {
                    setCableImage(e.target.id)
                  }}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber" className="subheading">
              Meter number
            </label>
            <input
              type="text"
              name="cardNumber"
              className="form-control"
              placeholder="Enter card number"
              value={chosenPackage.meter}
              onChange={handleMeterCard}
            />
          </div>
          <Amount
            amountValue={chosenPackage.amount}
            handleAmountChange={handleAmountChange}
            minimumAmount="Enter amount... min(#400)"
          />

          <Button
            btn="Submit"
            btnClass="button btn-large"
            handleClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default Electricity;
