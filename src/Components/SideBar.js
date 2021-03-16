import React from "react";
import Button from "./Reusables/Button";
import { ReactComponent as Logo } from "../Images/Icons/EAI.svg";
import Close from "../Images/Icons/back.svg";

function Sidebar({ sideBarClass, closeSideBar }) {
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
							<a href="">Home</a>
						</li>
						<li>
							<a href="">Our Services</a>
						</li>
						<li>
							<a href="">About us</a>
						</li>
						<li>
							<a href="">My Wallet</a>
						</li>
					</ul>
				</div>
				<div className="bottom">
					<Button btn="Sign up" btnClass="button nav-btn" />
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
