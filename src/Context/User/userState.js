import React, { useState } from "react";
import UserContext from "./userContext";


const UserState = (props) => {

  const [user, FetchedUser] = useState('')
  // console.log(user)
  return (
    <UserContext.Provider
      value={[user, FetchedUser]}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
