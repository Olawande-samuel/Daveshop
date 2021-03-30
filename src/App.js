import "./App.scss";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Airtime from "./Components/Pages/Airtime";
import Data from "./Components/Pages/Data";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Homepage from "./Components/Homepage/Homepage";
import Wallet from "./Components/Pages/Wallet";
import ResetPassword from "./Components/Pages/ResetPassword";
import Dashboard from "./Components/Pages/Dashboard";
import Cable from "./Components/Pages/Cable";
import Electricity from "./Components/Pages/Electricity";
import Loading from "./Components/Reusables/Loading";
import AlertComp from "./Components/Reusables/AlertComp";
// import {InputGroup} from "./Components/ItemsGroup/InputGroup";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path={["/", "/homepage"]} exact component={Homepage} />
					<Route path="/buy-airtime" component={Airtime} />
					<Route path="/buy-data" component={Data} />
					<Route path="/login" component={Login} />
					<Route path="/sign-up" component={SignUp} />
					<Route path="/wallet" component={Wallet} />
					<Route path="/reset-password" component={ResetPassword} />
					<Route path="/pay-cable-bill" component={Cable} />
					<Route path="/pay-power-bill" component={Electricity} />
					<Route path="/loading" component={Loading} />
					<Route path="/dashboard" component={Dashboard} />
					<Route to="/alert" component={AlertComp} />
					{/* <Route to="/input" component={InputGroup} /> */}
					<Route path="*" component={Homepage}>
						<Redirect to="/" />
					</Route>
						

				</Switch>
			</div>
		</Router>
	);
}

export default App;
