import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Reusables/Button";
import { ReactComponent as Hamburger } from "../Images/Icons/Hamburger.svg";
import { ReactComponent as Logo } from "../Images/Icons/EAI.svg";
import Sidebar from "./SideBar";

function Navv({ openSideBar }) {
	const [toggleSideBar, setToggleSideBar] = useState(false);

	const toggleMenu = () => {
		setToggleSideBar(true);

	};
	const closeSideBar = () => {
		setToggleSideBar(false);
	};
	return (
		<nav>
			<div className="container nav-wrapper">
				<div className="left">
					<div className="hamburger">
						<i>
							<Hamburger onClick={toggleMenu} className="hamburger-icon"/>
						</i>
					</div>
					<div className="logo">
						<Link to="/" exact>
							<Logo />
						</Link>
					</div>
				</div>

				<Sidebar
					sideBarClass={
						toggleSideBar === true ? "sideBar openSideBar" : "sideBar closeBar"
					}
					closeSideBar={closeSideBar}
				/>

				<div className="right">
					<Link to="/sign-up">
						<Button btn="Sign up" btnClass="signup-btn" />
					</Link>
					<Link to="/login">
						<Button btn="Login" btnClass="login-btn" />
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navv;
