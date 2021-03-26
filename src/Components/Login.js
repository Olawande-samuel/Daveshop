import React, { useState } from "react";
import SubNav from "./Reusables/SubNav";
import Button from "./Reusables/Button";
import Eye from "../Images/Icons/Eye.svg";
import {getUser} from "./Reusables/Amount"
import { Link, Route, Redirect } from "react-router-dom";
import Dashboard from "./Others/Dashboard";


function Login() {
	// state for toggle password
	const [showPassword, setShowPassword] = useState("password");

	//state for loading screen
	const [isFetching, setIsFetching] =useState(false)

	// state object for user details
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});
	
	// state for remember me/ storing to local storage or not
	const [remember, setRemember] = useState(false);
	
	//for remember me check button 
	const rememberMe = () => {
		remember === false ? setRemember(true) : setRemember(false);
	};

	const handleChange = (e) => {
		e.persist();
		setUser((user) => ({
			...user,
			password: e.target.value,
		}));
	};
	const handleEmail = (e) => {
		e.persist();
		setUser((user) => ({
			...user,
			email: e.target.value,
		}));
	};


	//create post request and pass it as the other condition
	const handleSubmit = () => {
		if (remember === true) {
			const savedUser = JSON.stringify(user);
			localStorage.setItem("saved user", user);
			console.log(savedUser);
		}
		getUser(isFetching, setIsFetching)
		console.log(isFetching);
	};

	return (
		isFetching === true? <Dashboard /> : 
		<div className="purchase-wrapper">
			<div className="purchase">
				<div className="header-wrapper my-3">
					<SubNav />
				</div>

				<form>
					{remember === true ? (
						<h5 className="text-center mt-3 mb-3">
							Hello! Sign in to your account
						</h5>
					) : (
						<div className="email">
							<input
								type="email"
								placeholder="Email"
								value={user.email}
								onChange={handleEmail}
								required
							/>
						</div>
					)}
					{/* <h5 className="text-center mt-3 mb-3">Hello Welcome back</h5>
				<p className="text-center mb-3">Hello@gmail.com</p> */}

					<div className="password">
						<input
							type={showPassword}
							onChange={handleChange}
							placeholder="Enter your password"
							value={user.password}
						/>
						<i>
							<img
								src={Eye}
								className="unmask"
								alt="show password"
								onClick={() => {
									if (showPassword === "password") {
										setShowPassword("text");
									} else {
										setShowPassword("password");
									}
								}}
							/>
						</i>
					</div>
					<div className="remember">
						<input
							type="checkbox"
							name="rememberMe"
							id="rememberMe"
							class="mb-3"
							onChange={rememberMe}
						/>
						<label htmlFor="rememberMe">Remember me</label>
					</div>
					<Button
						btn="Login"
						btnClass="button btn-large mb-2"
						handleClick={handleSubmit}
						value={remember}
					/>
					<div className="forgot-password text-right">
						{/* ********Change Link********** */}
						<Link to="/password-reset" className="text-right">
							Forgot password?
						</Link>
					</div>

					<p className="text-center mt-4">
						New to <strong>EAI</strong>?{" "}
						<span className="ml-2">
							<Link to="/sign-up">Sign up now</Link>
						</span>
					</p>
				</form>
			</div>
		</div>
							
	);
}

export default Login;
