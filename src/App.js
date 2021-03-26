import "./App.scss";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Airtime from "./Components/Airtime";
import Data from "./Components/Data";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Homepage from "./Components/Homepage/Homepage";
import Wallet from "./Components/Wallet";
import ResetPassword from "./Components/Others/ResetPassword";

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
					<Route path="*" component={Homepage}>
						<Redirect to="/" />
					</Route>

				</Switch>
			</div>
		</Router>
	);
}

export default App;
