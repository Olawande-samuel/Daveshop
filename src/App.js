import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Airtime from "./Components/Pages/Airtime";
import Data from "./Components/Pages/Data";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Homepage from "./Components/Homepage/Homepage";
import Wallet from "./Components/Pages/Wallet";
import ResetPassword from "./Components/Pages/ResetPassword";
import Cable from "./Components/Pages/Cable";
import Electricity from "./Components/Pages/Electricity";
import Loading from "./Components/Reusables/Loading";
// import { UserContext } from "./Components/Reusables/UserContext";
import { PrivateRoute, ProvideAuth } from "./Components/Reusables/Authenticate";
import NotFound from "./Components/Pages/Error";
import UserState from "./Context/User/userState";

// import dotenv from 'dotenv'

// import {InputGroup} from "./Components/ItemsGroup/InputGroup";

function App() {
 
  
  return (
    <UserState>
      <Router>
        <ProvideAuth>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/loading" component={Loading} />
              
              
              <PrivateRoute exact path="/wallet" component={Wallet} />
              <PrivateRoute path="/wallet/:id" component={Wallet} />
              <PrivateRoute path="/buy-airtime" component={Airtime} />
              <PrivateRoute path="/buy-data" component={Data} />
              <PrivateRoute path="/pay-cable-bill" component={Cable} />
              <PrivateRoute path="/pay-power-bill" component={Electricity} />

              
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </ProvideAuth>
      </Router>
    </UserState>
  );
}

export default App;
