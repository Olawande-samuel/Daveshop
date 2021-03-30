import React from "react";
import Hero from "./Hero";
import TodoSection from "./TodoSection";
import About from "./About";
import Qualities from "./Qualities";
import Footer from "./Footer";
import Navv from "./NavBar";


function Homepage() {
	return (
		<div className="homepage">
			<div className="container">
				<Navv />
				<Hero />
			</div>
			<TodoSection />
			<About />
			<Qualities />
			<Footer />
		</div>
	);
}

export default Homepage;
