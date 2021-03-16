import React from "react";
import MiniCard from "./Reusables/MiniCard";
import { Link } from "react-router-dom";
// import Airtime from "../Images/Airtime.svg"

function TodoSection() {
	return (
		<section className="todo-section">
			<h4 className="text-center">What will you like to do today?</h4>
			<div className="mini-card-wrapper">
				<Link to="/buy-airtime" className="mini-card">
					<MiniCard
						miniTitle="Buy Airtime"
						miniLogo={
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="16" cy="16" r="16" fill="#D4A1EA" />
								<path
									d="M21.8333 8.50001C20.455 8.50001 19.3333 9.62167 19.3333 11C19.3333 11.4183 19.4467 11.8067 19.6283 12.1542L18.6983 13.2392C18.1482 12.8655 17.4984 12.666 16.8333 12.6667C16.2175 12.6667 15.6458 12.8467 15.15 13.1383L13.9717 11.96C14.2057 11.5387 14.3301 11.0653 14.3333 10.5833C14.3333 8.97501 13.025 7.66667 11.4167 7.66667C9.80833 7.66667 8.5 8.97501 8.5 10.5833C8.5 12.1917 9.80833 13.5 11.4167 13.5C11.9175 13.5 12.3817 13.3617 12.7933 13.1383L13.9717 14.3167C13.6664 14.8254 13.5035 15.4068 13.5 16C13.5 16.8308 13.8167 17.5825 14.3208 18.1675L12.9108 19.5775L12.9317 19.5983C12.591 19.4263 12.215 19.3356 11.8333 19.3333C10.455 19.3333 9.33333 20.455 9.33333 21.8333C9.33333 23.2117 10.455 24.3333 11.8333 24.3333C13.2117 24.3333 14.3333 23.2117 14.3333 21.8333C14.3333 21.4367 14.2325 21.0675 14.0683 20.735L14.0892 20.7558L15.7175 19.1275C16.0683 19.2525 16.44 19.3333 16.8333 19.3333C18.6717 19.3333 20.1667 17.8383 20.1667 16C20.1631 15.4823 20.0378 14.9728 19.8008 14.5125L20.845 13.2942C21.1483 13.4258 21.4817 13.5 21.8333 13.5C23.2117 13.5 24.3333 12.3783 24.3333 11C24.3333 9.62167 23.2117 8.50001 21.8333 8.50001ZM11.8333 22.6667C11.6123 22.6667 11.4004 22.5789 11.2441 22.4226C11.0878 22.2663 11 22.0544 11 21.8333C11 21.6123 11.0878 21.4004 11.2441 21.2441C11.4004 21.0878 11.6123 21 11.8333 21C12.0543 21 12.2663 21.0878 12.4226 21.2441C12.5789 21.4004 12.6667 21.6123 12.6667 21.8333C12.6667 22.0544 12.5789 22.2663 12.4226 22.4226C12.2663 22.5789 12.0543 22.6667 11.8333 22.6667ZM10.1667 10.5833C10.1667 9.89417 10.7275 9.33334 11.4167 9.33334C12.1058 9.33334 12.6667 9.89417 12.6667 10.5833C12.6667 11.2725 12.1058 11.8333 11.4167 11.8333C10.7275 11.8333 10.1667 11.2725 10.1667 10.5833ZM16.8333 17.6667C15.9142 17.6667 15.1667 16.9192 15.1667 16C15.1667 15.0808 15.9142 14.3333 16.8333 14.3333C17.7525 14.3333 18.5 15.0808 18.5 16C18.5 16.9192 17.7525 17.6667 16.8333 17.6667ZM21.8333 11.8333C21.6123 11.8333 21.4004 11.7455 21.2441 11.5893C21.0878 11.433 21 11.221 21 11C21 10.779 21.0878 10.567 21.2441 10.4107C21.4004 10.2545 21.6123 10.1667 21.8333 10.1667C22.0543 10.1667 22.2663 10.2545 22.4226 10.4107C22.5789 10.567 22.6667 10.779 22.6667 11C22.6667 11.221 22.5789 11.433 22.4226 11.5893C22.2663 11.7455 22.0543 11.8333 21.8333 11.8333Z"
									fill="black"
								/>
							</svg>
						}
					/>
				</Link>
				<Link to="/buy-data" className="mini-card">
					<MiniCard
						miniTitle="Buy Data"
						miniLogo={
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="16" cy="16" r="16" fill="#F7F6C2" />
								<path
									d="M16.2951 5C13.6751 5 11.2651 5.93 9.37509 7.47C9.26511 7.55804 9.17497 7.66832 9.11058 7.79362C9.04618 7.91892 9.00899 8.05641 9.00144 8.19709C8.99389 8.33776 9.01614 8.47845 9.06675 8.60992C9.11735 8.7414 9.19517 8.86069 9.29509 8.96C9.65509 9.32 10.2251 9.35 10.6151 9.03C12.1551 7.76 14.1451 7 16.2951 7C18.4451 7 20.4351 7.76 21.9851 9.03C22.3751 9.35 22.9451 9.32 23.3051 8.96C23.7251 8.54 23.6851 7.85 23.2251 7.47C21.3251 5.93 18.9151 5 16.2951 5ZM19.2951 14H13.2951C12.7451 14 12.2951 14.45 12.2951 15V25C12.2951 25.55 12.7451 26 13.2951 26H19.2851C19.8351 26 20.2851 25.55 20.2851 25L20.2951 15C20.2951 14.45 19.8451 14 19.2951 14ZM19.2951 24H13.2951V16H19.2951V24Z"
									fill="black"
								/>
							</svg>
						}
					/>
				</Link>
				<Link className="mini-card">
					<MiniCard
						miniTitle="Cable Subscription"
						miniLogo={
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="16" cy="16" r="16" fill="#F7CCC2" />
								<path
									d="M24 9V8C24 7.45 23.55 7 23 7H21C20.45 7 20 7.45 20 8V9H19V13C19 13.55 19.45 14 20 14H21V21C21 22.1 20.1 23 19 23C17.9 23 17 22.1 17 21V11C17 8.79 15.21 7 13 7C10.79 7 9 8.79 9 11V18H8C7.45 18 7 18.45 7 19V23H8V24C8 24.55 8.45 25 9 25H11C11.55 25 12 24.55 12 24V23H13V19C13 18.45 12.55 18 12 18H11V11C11 9.9 11.9 9 13 9C14.1 9 15 9.9 15 11V21C15 23.21 16.79 25 19 25C21.21 25 23 23.21 23 21V14H24C24.55 14 25 13.55 25 13V9H24Z"
									fill="black"
								/>
							</svg>
						}
					/>
				</Link>
				<Link className="mini-card">
					<MiniCard
						miniTitle="Electricity"
						miniLogo={
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="16" cy="16" r="16" fill="#C2DEF7" />
								<path
									d="M24 9V8C24 7.45 23.55 7 23 7H21C20.45 7 20 7.45 20 8V9H19V13C19 13.55 19.45 14 20 14H21V21C21 22.1 20.1 23 19 23C17.9 23 17 22.1 17 21V11C17 8.79 15.21 7 13 7C10.79 7 9 8.79 9 11V18H8C7.45 18 7 18.45 7 19V23H8V24C8 24.55 8.45 25 9 25H11C11.55 25 12 24.55 12 24V23H13V19C13 18.45 12.55 18 12 18H11V11C11 9.9 11.9 9 13 9C14.1 9 15 9.9 15 11V21C15 23.21 16.79 25 19 25C21.21 25 23 23.21 23 21V14H24C24.55 14 25 13.55 25 13V9H24Z"
									fill="black"
								/>
							</svg>
						}
					/>
				</Link>
			</div>
		</section>
	);
}

export default TodoSection;