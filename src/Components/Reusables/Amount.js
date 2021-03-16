import React from "react";

export const Amount = () => {
	return (
		<div>
			<div className="amount">
				<label htmlFor="amount" className="subheading">Amount</label>
				<input type="text" name="amount" id="amount" placeholder="Enter Amount"/>
			</div>
		</div>
	);
};

export const Package = () => {
	return (
		<div className="mb-2 radio-wrapper">
			<div className="radio">
				<label htmlFor="one">
					<div className="wrap">
						<div className="name">100mb | 1 day</div>
						<div className="price">#100</div>
					</div>
				</label>
				<input type="radio" name="data" id="one" />
			</div>
			<div className="radio">
				<label htmlFor="two">
					<div className="wrap">
						<div className="name">200mb | 2 days</div>
						<div className="price">#200</div>
					</div>
				</label>
				<input type="radio" name="data" id="two" />
			</div>

			<div className="radio">
				<label htmlFor="three">
					<div className="wrap">
						<div className="name">350mb | 7 days</div>
						<div className="price">#300</div>
					</div>
				</label>
				<input type="radio" name="data" id="three" />
			</div>
			<div className="radio">
				<label htmlFor="four">
					<div className="wrap">
						<div className="name">1GB | 1 day</div>
						<div className="price">#300</div>
					</div>
				</label>
				<input type="radio" name="data" id="four" />
			</div>
			<div className="radio">
				<label htmlFor="five">
					<div className="wrap">
						<div className="name">750mb | 14 days</div>
						<div className="price">#500</div>
					</div>
				</label>
				<input type="radio" name="data" id="five" />
			</div>
			<div className="radio">
				<label htmlFor="six">
					<div className="wrap">
						<div className="name">2.5GB | 2 days</div>
						<div className="price">#500</div>
					</div>
				</label>
				<input type="radio" name="data" id="six" />
			</div>
			<div className="radio">
				<label htmlFor="seven">
					<div className="wrap">
						<div className="name">1GB | 7 days</div>
						<div className="price">#500</div>
					</div>
				</label>
				<input type="radio" name="data" id="seven" />
			</div>
			<div className="radio">
				<label htmlFor="eight">
					<div className="wrap">
						<div className="name">1.5GB | 30 days</div>
						<div className="price">#1,000</div>
					</div>
				</label>
				<input type="radio" name="data" id="eight" />
			</div>
		</div>
	);
};
