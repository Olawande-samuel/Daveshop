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

function AccDetails({ reveal, Close }) {
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

  const [payload, setPayload] = useState({
    apptoken: process.env.REACT_APP_APP_TOKEN,
    usertoken: userToken,
    action: "66",
    accNum: ''
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPayload({ ...payload, [name]: value });
  };

  
  const [user] = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    formData.append("bankname", payload.bankName);
    formData.append("banknumber", payload.accNum);
    formData.append("action", payload.action);
    formData.append("apptoken", payload.apptoken);
    formData.append("usertoken", payload.usertoken);

    buyData(formData)
      .then((res) => {
        
        if (res.data.response === payload.action) {
          setLoading(false);
          setLoadSuccessful(true);
          setAlertValue({
            ...alertValue,
            value: res.data.message,
            type: "success",
          });
         
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
  return (
    <>
      <Modal
        show={reveal}
        onHide={Close}
        size="lg"
        aria-labelledby="contained-modal-title-center"
        centered
      >
          <Modal.Header className="text-center" > <h5 className='text-center mb-4' style={{width: "100%"}}>Add your bank details</h5></Modal.Header>
        <Modal.Body>
          <div className="purchase-wrapper d-flex justify-content-center align-items-center">
            <div className=" d-flex flex-column">
              {loading ? (
                <Loading />
              ) : (
                <form>
                  {loadSuccessful === true && (
                    <AlertComp
                      variant={alertValue.type}
                      alertText={alertValue.value}
                    />
                  )}
                  
                  <div className="form-group">
                    <label htmlFor="bankName" amount-label>Bank Name</label>
                    <input
                      type="text"
                      name="bankName"
                      id="bankName"
                      onChange={handleChange}
                      className="form-control"
                      value={payload.bankName}
                    />
                  </div>
                  

                  <div className="form-group">
                    <label htmlFor="accNum" className="amount-label">
                      Account Number
                    </label>
                    <input
                      type="text"
                      name="accNum"
                      pattern="[0-9]"
                      className="form-control"
                      id="amount"
                      onChange={handleChange}
                      value={payload.accNum}
                    />
                  </div>
                  <Button
                    btn="Submit"
                    btnClass="button btn-large"
                    handleClick={handleSubmit}
                  />
                </form>
              )}
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
  );
}

export default AccDetails;
