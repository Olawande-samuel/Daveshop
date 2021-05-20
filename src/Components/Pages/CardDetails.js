import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";

const lists = [
  {
    id: "one",
    name: "100mb | 1 day",
    price: 100,
  },
  {
    id: "two",
    name: "200mb | 2 days",
    price: 200,
  },
  {
    id: "three",
    name: "350mb | 7 days",
    price: 300,
  },
  {
    id: "four",
    name: "1GB | 1 day",
    price: 300,
  },
];
function CardDetails() {
  const [inptValue, setInptValue] = useState("");
  const [List, setList] = useState([
    {
      id: "two",
      name: "200mb | 2 days",
      price: 200,
    },
    {
      id: "three",
      name: "350mb | 7 days",
      price: 300,
    },
    {
      id: "four",
      name: "1GB | 1 day",
      price: 300,
    },
  ]);
  const handleChange = (e) => {
    setInptValue(e.target.value);
  };

  const func = (id) => {
    if (id !== "four") return true;
    return false;
  };
  console.log(List);
  console.log("List");

  const filtered = List.filter((item) => {
    return item.name.includes(inptValue);
  }).map((list) => console.log(list));
  let real = "real";
  console.group(real.includes("r"));
  return (
    <>
      <div className="purchase-wrapper">
        <div className="purchase-nav px-3 py-2 border-bottom">
          <SubNav title="Add your card details" />
        </div>
        <form className="purchase">
          <div className="form-group">
            <label htmlFor="cardNumber" className="amount-label">
              Card number
            </label>
            <input
              type="text"
              name="CardNumber"
              pattern="[0-9]"
              className="form-control"
              id="cardNumber"
              value={inptValue}
              onChange={handleChange}
            />
          </div>

          {/* <div className="bottom-form-wrapper d-flex justify-content-between align-items-center">
            <div className="form-group">
              <label htmlFor="Expiry" className="amount-label">
                Expiry date
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="Cvv" className="amount-label">
                CVV
              </label>
              <input
                type="text"
                name="Cvv"
                pattern="[0-9]"
                minLength="3"
                maxLength="3"
                className="form-control"
                id="Cvv"
                placeholder="Enter your CVV"
              />
            </div>
          </div> */}
          {lists
            .filter((item) => {
              return item.name.toLowerCase().includes(inptValue.toLowerCase());
            })
            .map((list) => (
              <div key={list.id}>
                <div>{list.name}</div>
                <div>{list.price}</div>
                <div>Hey there</div>
              </div>
            ))}
          <Link to="/user/wallet/confirm">
            <Button btn="Confirm" btnClass="button btn-large" />
          </Link>
        </form>
      </div>
    </>
  );
}

export default CardDetails;
