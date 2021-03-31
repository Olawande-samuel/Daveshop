import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
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
// import {InputGroup} from "./Components/ItemsGroup/InputGroup";

function App() {
  const [value, setValue] = useState(false);
  return (
    <Router>
      <UserContext.Provider value={{value, setValue}}>
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
            <Route path="/wallet" component={Wallet} />
            <Route path="/loading" component={Loading} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/user/wallet/payment-method" component={AddMethod}/>
            <Route path="/alert" component={AlertComp} />
            <Route path="/user/wallet/amount" component={AddMoney} />
            <Route path="*" component={Homepage}>
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
