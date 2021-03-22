import React from "react";
import { Radios } from "../Radios";

export const Amount = () => {
	return (
		<div>
			<div className="amount">
				<label htmlFor="amount" className="subheading">
					Amount
				</label>
				<input
					type="text"
					name="amount"
					id="amount"
					placeholder="Enter Amount"
				/>
			</div>
		</div>
	);
};

export const Package = () => {
	return (
		<div className="mb-2 radio-wrapper">
			{Radios.map((radio) => (
				<div className="radio">
					<label htmlFor={radio.id}>
						<div className="wrap">
							<div className="name">{radio.name}</div>
							<div className="price">
								<span>#</span> {radio.price}
							</div>
						</div>
					</label>
					<input type="radio" name="data" id="one" value={radio.price} />
				</div>
			))}
		</div>
	);
};
