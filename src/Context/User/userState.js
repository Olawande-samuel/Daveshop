import React, { useState } from "react";
import axios from "axios";
import UserContext from "./userContext";
// import userReducer from "./userReducer";

// import {
//   SET_ALERT,
//   SET_LOADING,
//   GET_USER,
//   ADD_USER,
//   REQUEST_LOGIN,
//   LOGIN_SUCCESS,
//   LOGIN_ERROR,
// } from "../types";
// import Data from "../../Components/Pages/Data";

const UserState = (props) => {
  // const initialState = {
  //   user: {},
  //   loading: false,
  // };

  // const [state, dispatch] = useReducer(userReducer, initialState);
  // //get user
  // const getUser = async (loginDetails) => {
  //   setLoading(true);

  //   try {
  //     const response = await axios.get("http://localhost:8000/users/1");
  //     dispatch({
  //       type: GET_USER,
  //       payload: response.data,
  //     });
  //     return response;
  //   } catch {}
  // };

  // const signUp = async (newUser) => {
  //   setLoading(true);
  //   try {
  //     const signUp = await axios.post(`http://localhost:8000/users`, newUser);
  //     dispatch({ type: ADD_USER, payload: newUser });
  //   } catch {}
  // };

  // const setLoading = () => dispatch({ type: SET_LOADING });

  const [user, FetchedUser] = useState([])
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
