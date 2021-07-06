import React, { useState, useContext } from "react";
import Button from "../Reusables/Button";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../Images/Icons/Hamburger.svg";
import { Link as ScrollLink } from "react-scroll";
import Close from "../../Images/Icons/back.svg";
import UserContext from "../../Context/User/userContext";
import { FaRegUserCircle } from "react-icons/fa";

function Navv({ openSideBar }) {
  const history = useHistory();
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  const toggleMenu = () => {
    setToggleSideBar(true);
  };
  const closeSideBar = () => {
    setToggleSideBar(false);
  };
  const handleClick = () => {
    console.log("done");
    localStorage.removeItem("user");
    alert("logout successful");
    history.push("/login");
  };
  return (
    <nav>
      <div className="nav-wrapper container bg-transparent">
        <div className="left d-flex">
          <div className="hamburger" >
            <i>
              <Hamburger onClick={toggleMenu} className="hamburger-icon" />
            </i>
          </div>
          <div className="nav-title" style={{marginLeft: "16px", padding: "0",}}>
            <Link to="/">
            <span  className="font-weight-bold">DAVEPAY</span>
            </Link>
          </div>
        </div>

        <Sidebar
          sideBarClass={
            toggleSideBar === true ? "sideBar openSideBar" : "sideBar closeBar"
          }
          closeSideBar={closeSideBar}
        />

        {user !== null ? (
          <div className="right d-flex justify-content-center align-items-center">
            <div className="user  d-flex justify-content-center align-items-center">
              <i
                className="user-icon"
                style={{ color: "rgba(14, 73, 152, 1)", fontSize: "24px" }}
              >
                <FaRegUserCircle />
              </i>
              <p className="font-weight-bold ml-2">{user.firstname}</p>
            </div>
            <div className="logout">
              <Button
                btn="Logout"
                btnClass="login-btn lg-btn-screen"
                handleClick={handleClick}
              />
            </div>
          </div>
        ) : (
          <div className="right">
            <Link to="/sign-up" className="mr-2">
              <Button btn="Sign up" btnClass="signup-btn" />
            </Link>
            <Link to="/login">
              <Button btn="Login" btnClass=" button .btn-large" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export const Sidebar = ({ sideBarClass, closeSideBar }) => {
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  const handleClick = () => {
    console.log("done");
    localStorage.removeItem("user");
    alert("logout successful");
    history.push("/login");
  };
console.log(user ===  undefined)
  const history = useHistory();
  return (
    <div className={sideBarClass}>
      <div className="sidebar-content-wrapper">
        <div className="top">
          <div className="logo d-flex justisy-content-center align-items-center">
            <div className="font-weight-bold title nav-title">DAVEPAY</div>
          </div>
          <div className="close-nav">
            <img
              onClick={closeSideBar}
              className="hamburger-icon"
              src={Close}
              alt="Close sidebar"
            />
          </div>
        </div>
        <div className="mid">
          <ul>
            <li>
              <ScrollLink to="hero" spy={true} smooth={true} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="todoSection"
                spy={true}
                smooth={true}
                duration={500}
              >
                Our Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" spy={true} smooth={true} duration={500}>
                About us
              </ScrollLink>
            </li>
            <li>
              <Link to="/wallet">My Wallet</Link>
            </li>
            {user === null  && user === undefined ? (
              <li>
                <Link to="/change-password">Change Password</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="bottom">
          {user === null ? (
            <Link
            to="/sign-up"
            className="d-flex justify-content-center button-link"
            style={{ width: "100%" }}
          >
            <Button btn="Sign up" btnClass="button nav-btn" />
          </Link>
          ) : (
            <Button
              btn="Logout"
              btnClass="button nav-btn"
              handleClick={handleClick}
            />
            
          )}
        </div>
      </div>
    </div>
  );
};

export default Navv;
