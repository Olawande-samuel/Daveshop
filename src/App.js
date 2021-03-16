import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Airtime from "./Components/Airtime";
import Data from "./Components/Data";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Wallet from "./Components/Wallet";
import Homepage from "./Components/Homepage";

function App() {
	return (
		<Router>
			<div className="App">
				
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/buy-airtime" component={Airtime} />
					<Route path="/buy-data" component={Data} />
					<Route path="/login" component={Login} />
					<Route path="/sign-up" component={SignUp} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
