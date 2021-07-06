import axios from "axios";
import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import UserContext from "../Context/User/userContext";
import Button from "./Reusables/Button";
import { usePaystackPayment } from "react-paystack";
import { ButtonGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import AlertComp from "./Reusables/AlertComp"

export default function NumModal({ show, handleClose }) {
  const [updateAmount, setAmount] = useState("");
  const history = useHistory();
  const item = localStorage.getItem("user");
  const unStringed = JSON.parse(item);
  const userToken = unStringed.usertoken;

  const [loading, setLoading] = useState(false);
  const [loadSuccessful, setLoadSuccessful] = useState(false);
  const [alertValue, setAlertValue] = useState({
    value: "",
    type: "",
  });

  const [user] = useContext(UserContext);
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  //paystack payload
  const config = {
    reference: new Date().getTime(),
    email: unStringed.email,
    amount: updateAmount * 100,
    publicKey: process.env.REACT_APP_PUBLIC_KEY,
  };
  // const actualAmount = updateAmount * 1000000;
  // console.log(actualAmount)
  // update backend with loaded amount
  const payload = {
    type: "credit",
    apptoken: process.env.REACT_APP_APP_TOKEN,
    amount: updateAmount,
    usertoken: userToken,
    action: "77",
    log: `Wallet funded with ${config.amount} by ${unStringed.name}`,
  };

  const addMoneyToBackend = () => {
    axios
      .get(process.env.REACT_APP_END_POINT, {
        params: payload,
      })
      .then((res) => {
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
  };

  const onSuccess = (reference) => {
    addMoneyToBackend();
    console.log(reference);
  };

  const onClose = () => {
    history.push("/wallet");
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="purchase-wrapper d-flex justify-content-center align-items-center">
            <div className=" d-flex flex-column">
              <form>
                {loadSuccessful === true && (
                  <AlertComp
                    variant={alertValue.type}
                    alertText={alertValue.value}
                  />
                )}
                <div className="form-group">
                  <label htmlFor="amount" className="amount-label">
                    Enter amount
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
                  btn="Confirm"
                  btnClass="button btn-large"
                  handleClick={() => {
                    
                    initializePayment(onSuccess, onClose);
                  }}
                />
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup variant="secondary" onClick={handleClose}>
            Close
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
}
