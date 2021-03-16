import React from "react";
import Button from "./Reusables/Button";
import HeroImage from "../Images/handsome-young-african-man-lg.png";
import Background from "../Images/Ellipse 1.png";

function Hero() {
	return (
		<div className="">
			<div className="hero">
				<div className="left">
					<div className="content">
						<h1>Recharge Easy with RAI</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
							deleniti laborum qui quibusdam est. Ipsum?
						</p>
					</div>
					<Button btn="Get Started" btnClass="button btnMid" />
				</div>
				<div className="right">
					<div className="wrapper">
						{/* <div className="bck-img-wrapper">
							<img
								src={Background}
								alt="blue background"
								className="back-img"
							/>
						</div> */}
						<div className="right-img">
							<img
								src={HeroImage}
								alt="Handsome Young African Man Staring at His Phone "
								className="top-img"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
