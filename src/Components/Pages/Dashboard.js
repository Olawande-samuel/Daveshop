import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Reusables/UserContext";
import Login from "./Login";

function Dashboard({ Authenticated }) {
  const { value, setValue } = useContext(UserContext);

  console.log(value);

  if (!value) {
    return <Redirect to="/login" />;
  }
  
  return (
    <div>
      <h1>Protected Component</h1>
    </div>
  );
}

export default Dashboard;
