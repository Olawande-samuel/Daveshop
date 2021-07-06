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
import { buyData } from "../../Controller/controller";
import Loading from "../Reusables/Loading";
import AlertComp from "../Reusables/AlertComp";

function Data({ choice, id }) {
  const item = localStorage.getItem("user");
  const unString = JSON.parse(item);
  const [fetchedResult, setFetchedResult] = useState([]);
  const [miniLoading, setMiniLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertValue, setAlertValue] = useState({
    value: "",
    type: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [option, setChoice] = useState("Select Data Package");
  const [selected, setSelected] = useState({
    id: "",
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
    id: "",
    amount: "",
    action: "15",
    apptoken: process.env.REACT_APP_APP_TOKEN,
    usertoken: unString.usertoken,
  });
  const [Radios, setRadio] = useState([]);
  const handleOption = (e) => {
    setBuyAirtimeData({
      ...buyAirtimeData,
      id: e.target.id,
      amount: e.target.value,
    });
  };
 
  const handleRadioClick = (e) => {
    
    setSelected({ ...selected, network: e.target.value, id: e.target.id });
  };

  const handleChange = (e) => {
    setBuyAirtimeData({ ...buyAirtimeData, phoneNumber: e.target.value });
  };

  useEffect(() => {
    let loaded = true;
    setLoading(true);
    const formData = new FormData();
    formData.append("action", data.action);
    formData.append("apptoken", data.apptoken);
    formData.append("id", data.id);

    buyData(formData)
      .then((res) => {
        if (loaded) {
          setLoading(false);
          setFetchedResult(res.data.data.sub_services);
        }
      })
      .catch((err) => {
        
        setLoading(false);
        setAlertValue({
          ...alertValue,
          value: err.message,
          type: "danger",
        });
      });

    return () => {
      loaded = false;
    };
  }, []);
  useEffect(() => {
    let loaded = true;
    setMiniLoading(true);
    const formData = new FormData();
    formData.append("action", selected.action);
    formData.append("apptoken", selected.apptoken);
    formData.append("id", selected.id);
   

    buyData(formData)
      .then((res) => {
        if (loaded) {
          
          setMiniLoading(false);
          setRadio(res.data.data.packages);
        }
      })
      .catch((err) => {
        setAlertValue({
          ...alertValue,
          value: err.message,
          type: "danger",
        });
        setMiniLoading(false);
      });

    return () => {
      loaded = false;
    };
  }, [selected]);

  const getDataServices = () => {};
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
  const handleSubmit = (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("action", buyAirtimeData.action);
    formData.append("apptoken", buyAirtimeData.apptoken);
    formData.append("id", buyAirtimeData.id);
    formData.append("usertoken", buyAirtimeData.usertoken);
    formData.append("amount", buyAirtimeData.amount);
    formData.append("phone_number", buyAirtimeData.phoneNumber);

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
        } else {
          setLoading(false);
          setShowAlert(true);
          setAlertValue({
            ...alertValue,
            value: res.data.message,
            type: "success",
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        setShowAlert(true);
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
      <div className="purchase">
        <header>
          <h5 className="text-center"style={{color: "rgba(14, 73, 152, 1)"}}>Buy Data</h5>
        </header>
        <form>
          {showAlert === true && (
            <AlertComp variant={alertValue.type} alertText={alertValue.value} />
          )}
          <div className="phone">
            <label className="subheading" htmlFor="phone" style={{color: "rgba(14, 73, 152, 1)"}}>
              Phone No
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter phone number"
              onChange={handleChange}
              onClick={getDataServices}
              value={buyAirtimeData.phoneNumber}
            />
          </div>
          <div className="network">
            <p className="subheading" style={{color: "rgba(14, 73, 152, 1)"}}>Select network provider</p>
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
          <Package
            choice={option}
            handleOption={handleOption}
            Radios={Radios}
            isLoading={miniLoading}
          />
          <Button
            btnClass="button btn-large"
            btn="Proceed"
            handleClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default Data;
