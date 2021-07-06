import axios from "axios";
import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import UserContext from "../Context/User/userContext";
import Button from "./Reusables/Button";
import { ButtonGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import  AlertComp from './Reusables/AlertComp'
import {buyData} from "../Controller/controller"
import Loading from "./Reusables/Loading";

function WithdrawModal({reveal, Close}) {
    const [updateAmount, setAmount] = useState("");
  const history = useHistory();
  const item = localStorage.getItem("log");
  const unStringed = JSON.parse(item);
  const userToken = unStringed.usertoken;

  const [loading, setLoading] = useState(false);
  const [loadSuccessful, setLoadSuccessful] = useState(false);
  const [alertValue, setAlertValue] = useState({
    value: "",
    type: "",
  });
  const payload = {
    type: "debit",
    apptoken: process.env.REACT_APP_APP_TOKEN,
    usertoken: userToken,
    amount: updateAmount,
    action: "88",
    
  };
  const [user] = useContext(UserContext);
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true)
    const formData = new FormData();
 
    formData.append("amount", payload.amount);
    formData.append("action", payload.action);
    formData.append("apptoken", payload.apptoken);
    formData.append("usertoken", payload.usertoken);

    buyData(formData)
    .then(res=>{
        console.log(res)
        if (res.data.response === payload.action) {
            setLoading(false);
            setLoadSuccessful(true);
            setAlertValue({
              ...alertValue,
              value: res.data.message,
              type: "success",
            });
            setTimeout(() => {
              history.push("/wallet");
            }, 2500);
          } else {
            setLoadSuccessful(true);
            setLoading(false);
            setAlertValue({
              ...alertValue,
              value: res.data.message,
              type: "danger",
            });
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    
  }
    return  (
        <>
        
           <Modal show={reveal} onHide={Close} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Body>
                <div className="purchase-wrapper d-flex justify-content-center align-items-center">
                    <div className=" d-flex flex-column">
                        {loading ? <Loading /> : 
                        <form>
                        {loadSuccessful === true && (
                            <AlertComp
                            variant={alertValue.type}
                            alertText={alertValue.value}
                            />
                        )}
                        <div className="form-group">
                        <label htmlFor="amount" className="amount-label">
                            Enter amount to Withdraw
                        </label>
                        <input
                            type="text"
                            name="amount"
                            pattern="[0-9]"
                            className="form-control"
                            id="amount"
                            onChange={handleChange}
                            value={updateAmount}
                            />
                        </div>
                            <Button
                            btn="Withdraw"
                            btnClass="button btn-large"
                            handleClick={handleSubmit}
                            />
                        </form>
                    }
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <ButtonGroup variant="secondary" onClick={Close}>
                    Close
                </ButtonGroup>
                </Modal.Footer>
      </Modal>  
    
      </>
    )
}

export default WithdrawModal
