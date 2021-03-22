import React from "react";
import aboutImg from "../../Images/about.png";
import { Element } from "react-scroll";

function About() {
	return (
		<>
			<Element id="about" name="about">
				<section className="about d-flex justify-content-center align-items-center flex-column">
					<h4 className="text-center">About us</h4>
					<div className="about-content container">
						<div className="img-wrapper">
							<img src={aboutImg} alt="Random" className="about-img" />
						</div>
						<div>
							<p className="text-center about-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Provident, non accusamus? Enim, voluptate velit voluptatem
								tempora veniam sed. Repellendus optio ipsam doloribus quam error
								delectus assumenda illo nostrum blanditiis dignissimos!
							</p>
						</div>
					</div>
				</section>
			</Element>
		</>
	);
}

export default About;