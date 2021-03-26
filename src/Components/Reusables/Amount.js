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

  export const getUser =  async (isfetch, setFetch) =>{
	  setFetch(true)
	fetch(`./text.txt`)
	.then(res=>{res.text();
		if(res.status >= 200 && res.ok === true){
			setFetch(false)
		}
		console.log(res)})
}

export const postUser = async (setFetch, newUser) => {
	setFetch(true);
	fetch(`./text.txt`, {
		method:"post",
		body: newUser,
	}).then(res =>{
		if(res.status >=200 && res.ok ===true){
			setFetch(false)
		}else if(res.staus >=400 || res.ok ===false){
			alert('An error has occured')
			setFetch(false)
		}
		console.log(res);
	})
}