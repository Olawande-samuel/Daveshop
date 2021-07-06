import React, { useState, useContext } from "react";
import Button from "../Reusables/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../Images/Icons/Hamburger.svg";
import { Link as ScrollLink } from "react-scroll";
import Close from "../../Images/Icons/back.svg";
import UserContext from "../../Context/User/userContext";
import { FaRegUserCircle } from "react-icons/fa";

function Navv({ openSideBar, setBankDetailModal, setReveal }) {
  const history = useHistory();
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const userData = localStorage.getItem("log");
  const user = JSON.parse(userData);
  const toggleMenu = () => {
    setToggleSideBar(true);
  };
  const closeSideBar = () => {
    setToggleSideBar(false);
  };
  const handleClick = (e) => {
    
    e.preventDefault();
    localStorage.removeItem("log");
    alert("logout successful");
    history.push("/login");
  };
  const addAccount = (e) => {
    e.preventDefault();
    setReveal(true)
  }
  const withdraw = (e) => {
    e.preventDefault();
  }
  const checkBankDetails = (e) => {
    e.preventDefault();
    setBankDetailModal(true)
  }
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
              <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                  <i className="user-icon" style={{ color: "rgba(14, 73, 152, 1)", fontSize: "24px" }} >
                    <FaRegUserCircle />
                  </i>
                </Dropdown.Toggle>

                 <Dropdown.Menu>
                  <Dropdown.Item href="" style={{ color: "rgba(14, 73, 152, 1)"}} onClick={addAccount}>Add Account</Dropdown.Item>
                  <Dropdown.Item href="" style={{ color: "rgba(14, 73, 152, 1)"}} onClick={checkBankDetails}>Check Bank Detail</Dropdown.Item>
                  <Dropdown.Item href="" style={{ color: "rgba(14, 73, 152, 1)"}} onClick={withdraw}>Withdraw</Dropdown.Item>
                  <Dropdown.Item href="" style={{ color: "rgba(14, 73, 152, 1)"}} onClick={handleClick}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <p className="font-weight-bold ml-2">{user.firstname}</p>
            </div>
            {/* <div className="logout">
              <Button
                btn="Logout"
                btnClass="login-btn lg-btn-screen"
                handleClick={handleClick}
              />
            </div> */}
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
  const userData = localStorage.getItem("log");
  const user = JSON.parse(userData);
  const handleClick = () => {
    
    localStorage.removeItem("user");
    alert("logout successful");
    history.push("/login");
  };

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
            {user === null  || user.length !== 0 ? (
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
