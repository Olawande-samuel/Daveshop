import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Component, useState } from "react";
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
import { UserContext } from "./Components/Reusables/UserContext";
import AddMoney from "./Components/Pages/AddMoney";
import AddMethod from "./Components/Pages/AddMethod";
import CardDetails from "./Components/Pages/CardDetails";
import Confirm from "./Components/Pages/Confirm";
import { PrivateRoute, ProvideAuth } from "./Components/Reusables/Authenticate";
import NotFound from "./Components/Pages/Error";
import UserState from "./Context/User/userState";
import User from "./Components/Dashboard/User";
// import {InputGroup} from "./Components/ItemsGroup/InputGroup";

function App() {
  const [value, setValue] = useState(false);
  return (
    <UserState>
      <Router>
        <ProvideAuth>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/buy-airtime" component={Airtime} />
              <Route path="/buy-data" component={Data} />
              <Route path="/pay-cable-bill" component={Cable} />
              <Route path="/pay-power-bill" component={Electricity} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/loading" component={Loading} />
              <PrivateRoute exact path="/user" component={User}/>
              <PrivateRoute path="/user/:id" component={User}/>
              <PrivateRoute path="/alert" component={AlertComp} />
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
