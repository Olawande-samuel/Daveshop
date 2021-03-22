import React from "react";
import Button from "../Reusables/Button";
import HeroImage from "../../Images/handsome-young-african-man-lg.png";
import {
	Element,
	Link as ScrollLink,
	// animateScroll as Scroll,
} from "react-scroll";

function Hero() {
	return (
		<>
			<Element id="hero" name="hero">
				<section className="hero">
					<div className="left">
						<div className="content">
							<h1>Recharge Easy with RAI</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
								deleniti laborum qui quibusdam est. Ipsum?
							</p>

							<ScrollLink
								to="todoSection"
								spy={true}
								smooth={true}
								duration={500}
							>
								<Button btn="Get Started" btnClass="button btnMid" />
							</ScrollLink>
						</div>
					</div>
					<div className="right">
						<div className="wrapper">
							<div className="right-img">
								<img
									src={HeroImage}
									alt="Handsome Young African Man Staring at His Phone "
									className="top-img"
								/>
							</div>
						</div>
					</div>
				</section>
			</Element>
		</>
	);
}

export default Hero;