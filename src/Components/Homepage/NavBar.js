import React, { useState } from "react";
import Button from "../Reusables/Button";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../Images/Icons/Hamburger.svg";
import { ReactComponent as Logo } from "../../Images/Icons/EAI.svg";
import { Link as ScrollLink } from "react-scroll";
import Close from "../../Images/Icons/back.svg";

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
			<div className="nav-wrapper container">
				<div className="left">
					<div className="hamburger">
						<i>
							<Hamburger onClick={toggleMenu} className="hamburger-icon" />
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
					<Link to="/sign-up" className="mr-2">
						<Button btn="Sign up" btnClass="signup-btn" />
					</Link>
					<Link to="/login">
						<Button btn="Login" btnClass="login-btn lg-btn-screen" />
					</Link>
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
					<div className="logo">
						<Logo />
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
							<Link to="/login">My Wallet</Link>
						</li>
					</ul>
				</div>
				<div className="bottom">
					<Link to="/sign-up" className="d-flex justify-content-center button-link" style={{width:'100%'}}>
						<Button btn="Sign up" btnClass="button nav-btn" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navv;
