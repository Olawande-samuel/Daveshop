import React, { useEffect, useState } from "react";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";
import Startimes from "../../Images/Startimes.png";
import axios from "axios";
import { Package } from "../Reusables/Amount";
import { buyData } from "../../Controller/controller";
import Loading from "../Reusables/Loading";
import AlertComp from "../Reusables/AlertComp";
function Cable() {
  //getting phoneNumber
  const item = localStorage.getItem("user");
  const unString = JSON.parse(item);
  const [option, setChoice] = useState("Select Package");
  const [loading, setLoading] = useState(false);
  const [miniLoading, setMiniLoading] = useState(false);
  const [cableImage, setCableImage] = useState("");
  const [Radios, setRadio] = useState([]);
  const [alertValue, setAlertValue] = useState({
    value: "",
    type: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState({
    id: "3",
    action: "11",
    apptoken: process.env.REACT_APP_APP_TOKEN,
  });

  const [chosenPackage, setChosenPackage] = useState({
    smart_card: "",
    id: "",
    amount: "",
    action: "16",
    phoneNumber: unString.phone,
    apptoken: process.env.REACT_APP_APP_TOKEN,
    usertoken: unString.usertoken,
  });

  const handleSmartCard = (e) => {
    setChosenPackage({ ...chosenPackage, smart_card: e.target.value });
  };
  //holds the different package services
  const [fetchedResult, setFetchedResult] = useState([]);

  //payload for sub services
  const [selected, setSelected] = useState({
    id: "",
    apptoken: process.env.REACT_APP_APP_TOKEN,
    action: "12",
  });

  //getting the list
  useEffect(() => {
    setLoading(true);
    let mounted = true;
    const formData = new FormData();
    formData.append("action", data.action);
    formData.append("apptoken", data.apptoken);
    formData.append("id", data.id);

    buyData(formData)
      .then((res) => {
         
        if (mounted) {
          setFetchedResult(res.data.data.sub_services);
          setLoading(false);
        }
      })
      .catch((err) => {
         
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handleCableServiceChange = (e) => {
    if (e.target.value === "default") {
      return;
    }
    setSelected({ ...selected, id: e.target.value });
  };
 
  const getCableSubservices = (e) => {
    setCableImage(e.target.id);
    setMiniLoading(true);
    const formData = new FormData();
    formData.append("action", selected.action);
    formData.append("apptoken", selected.apptoken);
    formData.append("id", selected.id);
    

    buyData(formData)
      .then((res) => {
        
        setRadio(res.data.data.packages);
        setMiniLoading(false);
      })
      .catch((err) => {
        
        setShowAlert(true);
        setMiniLoading(false);
        setAlertValue({
          ...alertValue,
          value: err.message,
          type: "danger",
        });
      });
  };
  const changeImage = (image) => {
    switch (image) {
      case "Startimes":
        return Startimes;
      case "DSTV":
        return "../Assets/Icons/Data-icon.png";
      case "GOtv":
        return "../Assets/Icons/Airtime-icon.png";
      default:
        break;
    }
  };
  //selecting the list
  const handleOption = (e) => {
   
    setChosenPackage({
      ...chosenPackage,
      id: e.target.id,
      amount: e.target.value,
    });
  };
  

  //paying for subscription
  const handleSubmit = (e) => {
    setLoading(true)
    const formData = new FormData();
    formData.append("action", chosenPackage.action);
    formData.append("apptoken", chosenPackage.apptoken);
    formData.append("id", chosenPackage.id);
    // formData.append("phone", chosenPackage.phoneNumber);
    // formData.append("smart_card", chosenPackage.smart_card);
    // formData.append("amount", chosenPackage.amount);
    e.preventDefault();
    buyData(formData)
      .then((res) => {
        
        if (res.data.response === "00") {
          setShowAlert(true);
          setLoading(false);
          setAlertValue({
            ...alertValue,
            value: res.data.message,
            type: "danger",
          });
        }else {
          setLoading(false);
          setShowAlert(true);
          setAlertValue({
            ...alertValue,
            value: res.data.message,
            type: "success",
          });
        }
      })
      .catch((err) =>{
        setLoading(false);
        setShowAlert(true);

        setAlertValue({
          ...alertValue,
          value: err.message,
          type: "danger",
        });
      } );
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
              onChange={handleCableServiceChange}
            >
              <option value="default" defaultChecked="true">
                Choose a serivce
              </option>
              {fetchedResult.map((item) => (
                <option
                  value={item.sid}
                  id={item.name}
                  onClick={getCableSubservices}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <Package
            choice={option}
            handleOption={handleOption}
            Radios={Radios}
            isLoading={miniLoading}
          />
          <div className="form-group">
            <label htmlFor="cardNumber" style={{color: "rgba(14, 73, 152, 1)"}}>Smart card number</label>
            <input
              type="text"
              name="cardNumber"
              className="form-control"
              placeholder="Enter smartcard number"
              value={chosenPackage.smart_card}
              onChange={handleSmartCard}
            />
          </div>

          <Button
            btn="Next"
            btnClass="button btn-large"
            handleClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default Cable;
