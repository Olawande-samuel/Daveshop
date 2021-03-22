import React, { useState } from "react";
import SubNav from "./Reusables/SubNav";
import Button from "./Reusables/Button";
import { Link } from "react-router-dom";

function SignUp() {
	const [newUser, setNewUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: 0,
		password: "",
	});

	const handleFirstName = (e) => {
		e.persist();
		setNewUser((user) => ({
			...newUser,
			firstName: e.target.value,
		}));
	};
	const handleLastName = (e) => {
		e.persist();
		setNewUser((user) => ({
			...newUser,
			lastName: e.target.value,
		}));
	};
	const handleEmail = (e) => {
		e.persist();
		setNewUser((user) => ({
			...newUser,
			email: e.target.value,
		}));
	};
	const handlePhoneNo = (e) => {
		e.persist();
		if (e.target.validity.valid) {
			setNewUser((user) => ({
				...newUser,
				phone: e.target.value,
			}));
		} else {
			alert("numbers only");
		}
	};
	const handlePassword = (e) => {
		e.persist();
		setNewUser((user) => ({
			...newUser,
			password: e.target.value,
		}));
	};

	const clearInputs = () => {
		setNewUser((user) => ({
			...newUser,
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			password: "",
		}));
	};
	const addNewUser = () => {
		fetch(`https://jsonplaceholder.typicode.com/posts`, {
			method: "post",
			body: newUser,
		}).then((res) => console.log(res));
	};

	const signUpSubmit = () => {
		// console.log(newUser);
		// const localUser = JSON.stringify(newUser);
		// localStorage.setItem("user data", localUser);
		addNewUser();
		setTimeout(() => {
			clearInputs();
			console.log(newUser);
			localStorage.removeItem("user data");
		}, 2000);
	};

	return (
		<div className="purchase-wrapper">
			<div className="purchase">
				<SubNav />
				<h5 className="text-center mt-3 mb-3">
					Welcome to <strong>EAI</strong>{" "}
				</h5>
				<p className="text-center mb-3">
					Sign up and recharge your line with ease
				</p>

				<form className="form">
					<div className="firstName">
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={newUser.firstName}
							onChange={handleFirstName}
							required
						/>
					</div>
					<div className="lastName">
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={newUser.lastName}
							onChange={handleLastName}
							required
						/>
					</div>
					<div className="email">
						<input
							type="email"
							placeholder="Email"
							value={newUser.email}
							onChange={handleEmail}
							required
						/>
					</div>
					<div className="number">
						<input
							type="text"
							min="11"
							max="11"
							placeholder="Mobile Number"
							pattern="[0-9]*"
							value={newUser.number}
							onChange={handlePhoneNo}
							required
						/>
					</div>
					<div className="password">
						<input
							type="password"
							placeholder="Enter your password"
							value={newUser.password}
							onChange={handlePassword}
							required
						/>
					</div>

					<Button
						btn="Sign Up"
						btnClass="button btn-large mb-2"
						handleClick={signUpSubmit}
					/>

					<p className="text-center mt-4">
						<strong>
							Already have an account?
							<span className="ml-2">
								<Link to="/login">Sign in now</Link>
							</span>
						</strong>
					</p>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
