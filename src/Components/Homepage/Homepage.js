import React, { useState } from "react";
import Hero from "./Hero";
import TodoSection from "./TodoSection";
import About from "./About";
import Qualities from "./Qualities";
import Footer from "./Footer";
import Navv from "./NavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
