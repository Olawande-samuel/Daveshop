import React, { useContext } from "react";
import Card from "../Reusables/Card";
import { Element } from "react-scroll";
import UserContext from "../../Context/User/userContext";
import fast from "../../Images/Icons/fast.svg";
import affordable from "../../Images/Icons/affordable.svg";
import safe from "../../Images/Icons/safe.svg";

function Qualities() {
	const [user]=useContext(UserContext)
	return (
		<>
			<Element id="qualities" name="qualities">
				<section className={user.message === 'Login successful.' ? "hide" : "qualities d-flex justify-content-center align-items-center flex-column"}>
					<header>
						<h4 className="text-center todo-title">Why Davepay</h4>
					</header>
					<div className="card-wrapper-container  d-flex justify-content-center align-items-center">
						<div className="card-wrapper row">
							<Card
							bgColor="rgba(243, 252, 255, 1)"
								cardLogo={fast}
								cardTitle="Fast"
								details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus rerum doloremque omnis quo cupiditate"
							/>
							<Card
							bgColor=" rgba(255, 241, 255, 1)"
								cardLogo={ safe }
								cardTitle="Safe"
								details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus rerum doloremque omnis quo cupiditate"
							/>
							<Card
								bgColor="rgba(235, 255, 219, 1)"
								cardLogo={affordable }
								cardTitle="Affordable"
								details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus rerum doloremque omnis quo cupiditate"
							/>
						</div>
					</div>
				</section>
			</Element>
		</>
	);
}

export default Qualities;
