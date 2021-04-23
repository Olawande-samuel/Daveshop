import React, { useState, useContext } from "react";
import Button from "../Reusables/Button";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../Images/Icons/Hamburger.svg";
import { ReactComponent as Logo } from "../../Images/Icons/EAI.svg";
import { Link as ScrollLink } from "react-scroll";
import Close from "../../Images/Icons/back.svg";
import UserContext from "../../Context/User/userContext";
import User from "../Dashboard/User";

function Navv({ openSideBar }) {
	const history = useHistory()
	const [toggleSideBar, setToggleSideBar] = useState(false);
	const [user, fetchedUser]= useContext(UserContext);
	console.log(user)
	const handleClick = ()=> {
		console.log('done');
		localStorage.removeItem('user')
		alert('logout successful')
		history.push("/login")
	}
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
				</div>

				<Sidebar
					sideBarClass={
						toggleSideBar === true ? "sideBar openSideBar" : "sideBar closeBar"
					}
					closeSideBar={closeSideBar}
				/>

				{ user.fullname ? <div className="right d-flex justify-content-center align-items-center">
					<p className="font-weight-bold mr-2" >{user.fullname}</p>
					<Button btn="Logout" btnClass="signup-btn lg-btn-screen"  handleClick={handleClick} /> 
				</div>
					:
					<div className="right">
					<Link to="/sign-up" className="mr-2">
						<Button btn="Sign up" btnClass="signup-btn"/>
					</Link>
					<Link to="/login">
						<Button btn="Login" btnClass="login-btn lg-btn-screen" />
					</Link>
				</div>
				}
			</div>
		</nav>
	);
}

export const Sidebar = ({ sideBarClass, closeSideBar }) => {
	const [user, FetchedUser] = useContext(UserContext)
	return (
		<div className={sideBarClass}>
			<div className="sidebar-content-wrapper">
				<div className="top">
					<div className="logo d-flex justisy-content-center align-items-center">
						<div className="font-weight-bold">DataShopNg</div>
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
					</ul>
				</div>
				<div className={user.message === 'Login successful.' ? "hide" : "bottom"}>
					<Link to="/sign-up" className="d-flex justify-content-center button-link" style={{width:'100%'}}>
						<Button btn="Sign up" btnClass="button nav-btn" />
					</Link>
				</div>
			</div>
		</div>
	);
};



export default Navv;
