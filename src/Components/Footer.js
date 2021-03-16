import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<div className="container footer-wrapper">
				<div className="lists-wrapper">
					<div className="lists">
						<h4>Our services</h4>
						<ul>
							<li>
								<Link to="/buy-airtime">Buy Airtime</Link>
							</li>
							<li>
								<Link to="/buy-data">Buy Data</Link>
							</li>
							<li>
								<a href="#">Cable TV</a>
							</li>
							<li>
								<a href="#">Electricity Bills</a>
							</li>
						</ul>
					</div>
					<div className="lists">
						<h4>Contact us</h4>
						<ul>
							<li>
								<a href="#">0900000000</a>
							</li>
							<li>
								<a href="#">Hello@IAT.com</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
