import React, { useState } from "react";
import { ReactComponent as Hamburger } from "../../Images/Icons/Hamburger.svg";
import { ReactComponent as Logo } from "../../Images/Icons/EAI.svg";
import Close from "../../Images/Icons/back.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function DashboardNav() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const toggleMenu = () => {
    setToggleSideBar(true);
  };
  const closeSideBar = () => {
    setToggleSideBar(false);
  };
  return (
    <nav style={{ backgroundColor: "transparent", borderBottom:"none" }}>
      <div className="nav-wrapper container">
        <div className="left">
          <div className="hamburger">
            <i>
                <FaBars style={{fontSize:'30px', color:"white"}} onClick={toggleMenu} className="hamburger-icon" />
              {/* <Hamburger onClick={toggleMenu} className="hamburger-icon" /> */}
            </i>
          </div>
        </div>

        <Sidebar
          sideBarClass={
            toggleSideBar === true ? "sideBar openSideBar" : "sideBar closeBar"
          }
          closeSideBar={closeSideBar}
        />

        <div className="right">
          {/* <div className="logo">
            <Link to="/" exact>
                <i>
                    <img src={img} alt=""/>
                </i>
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export const Sidebar = ({ sideBarClass, closeSideBar }) => {
  return (
    <div className={sideBarClass}>
      <div className="sidebar-content-wrapper">
        <div className="top">
          <div className="logo"></div>
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
            <li>Dashboard</li>
            <li>Buy Airtime</li>
            <li>Buy Data</li>
            <li>Pay Bills</li>
            <li>
              <Link to="/user/wallet">My Wallet</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
