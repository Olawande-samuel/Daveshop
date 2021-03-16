import React from "react";
import aboutImg from "../Images/about.png";

function About() {
	return (
		<section className="about">
			<h4 className="text-center">About us</h4>
			<div className="img-wrapper">
				<img src={aboutImg} alt="Random" />
			</div>
			<p className="text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, non
				accusamus? Enim, voluptate velit voluptatem tempora veniam sed.
				Repellendus optio ipsam doloribus quam error delectus assumenda illo
				nostrum blanditiis dignissimos!
			</p>
		</section>
	);
}

export default About;
