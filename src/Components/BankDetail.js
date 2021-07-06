import axios from "axios";
import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import UserContext from "../Context/User/userContext";
import Button from "./Reusables/Button";
import { ButtonGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import AlertComp from "./Reusables/AlertComp";
import { buyData } from "../Controller/controller";
import Loading from "./Reusables/Loading";
import { useEffect } from "react";

function BankDetail({ showBankDetailModal, closeBankDetailModal }) {
  const [updateAmount, setAmount] = useState("");
  const history = useHistory();
  const item = localStorage.getItem("log");
  const unStringed = JSON.parse(item);
  const userToken = unStringed.usertoken;

  const [loading, setLoading] = useState(true);
  const [loadSuccessful, setLoadSuccessful] = useState(false);
  const [bankDetails, setAlertValue] = useState({});

  const [payload, setPayload] = useState({
    apptoken: process.env.REACT_APP_APP_TOKEN,
    usertoken: userToken,
    action: "55",
    accNum: ''
  });
  
  
  const [user] = useContext(UserContext);

  useEffect(() => {
      let mounted = true
      
      const formData = new FormData();
      formData.append("action", payload.action);
      formData.append("apptoken", payload.apptoken);
      formData.append("usertoken", payload.usertoken);
  
      buyData(formData)
        .then((res) => {
          console.log(res);
          if (res.data.response === payload.action) {
              if(mounted){
                  setLoading(false);
                  setLoadSuccessful(true);
                  setAlertValue(res.data);
                }
            
          } else {
              if(mounted){
                  setLoadSuccessful(true);
                  setLoading(false);
                  setAlertValue(res.data);
                }
          }
        })
        .catch((err) => {
            if(mounted){
                setLoading(false);
            }
        });
      return () => {
          mounted = false;
      }
  }, [])

  console.log(bankDetails)
  return (
    <>
      <Modal
        show={showBankDetailModal}
        onHide={closeBankDetailModal}
        size="lg"
        aria-labelledby="contained-modal-title-center"
        centered
      >
          <Modal.Header className="text-center" > <h5 className='text-center mb-4' style={{width: "100%"}}>Your bank details</h5></Modal.Header>
        <Modal.Body>

          <div className="purchase-wrapper d-flex justify-content-center align-items-center">
          {loading ? (
                <Loading />
              ) : (
            
                  <div className="text-center">
                    <h4 class="mb-5">{bankDetails.message}</h4>
                    <p class="mb-2">Bank Name: {bankDetails.bankname} </p> 
                    <p>Account Number: {bankDetails.banknumber} </p> 
                  </div>
              )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup variant="secondary" onClick={closeBankDetailModal}>
            Close
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BankDetail;
