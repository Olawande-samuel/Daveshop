import React from "react";
import SubNav from "./Reusables/SubNav";
import Add from "../Images/Icons/Add.svg";

function Wallet() {
	return (
		<div className="purchase">
			<SubNav />
			<div className="wallet-wrapper bg-dark">
				<div className="left">
					<p>Current balance</p>
					<p>
						#<span>5000</span>
					</p>
				</div>
				<div className="right">
					<p>Add money</p>
					<i>
						<img src={Add} alt="top up account" />
					</i>
				</div>
			</div>
		</div>
	);
}
export default Wallet;
