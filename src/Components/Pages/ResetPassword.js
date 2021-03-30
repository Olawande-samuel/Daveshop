import React, { useState, useEffect } from "react";
import Button from "../Reusables/Button";
import SubNav from "../Reusables/SubNav";

function ResetPassword() {
	const [email, setEmail] = useState("");
	const place = {
		color: "purple",
		type: "minivan",
	};

	// console.log(objArray);
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = () => {
		fetch(`./text.txt`)
			.then((res) => {
				console.log(res);
				return res.text();
			})
			.then((file) => console.log(file));
	};
	// const emaill = new email
	const postData = () => {
		fetch(`https://jsonplaceholder.typicode.com/posts`, {
			method: "POST",
			body: place,
		}).then((res) => console.log(res));
	};
	const handleClick = (e) => {
		e.preventDefault();
		postData();
	};
	return (
		<div className="purchase-wrapper">
			<div className="purchase" >
				<div
					className="header-wrapper my-3"
					style={{ width: "80%"}}
				>
					<SubNav  />
				</div>
				<h4
					className="text-center my-3"
					
				>
					Password Reset
				</h4>
				<form>
					<div className="d-flex flex-column">
						<label htmlFor="Email">Enter email address</label>
						<input
							type="email"
							name="Email"
							id="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							placeholder="Enter your email"
						/>
					</div>
					<Button
						handleClick={handleClick}
						btn="Submit"
						btnClass=" button lg-btn-screen"
					/>
				</form>
			</div>
		</div>
	);
}

export default ResetPassword;
