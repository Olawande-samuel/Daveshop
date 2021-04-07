import React, { useContext } from "react";
import {
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import DashboardNav from "../Dashboard/DashboardNav";
import { todoItems } from "../Radios";
import { AuthContext, useAuth } from "../Reusables/Authenticate";
// import { UserContext } from "../Reusables/UserContext";
import Airtime from "./Airtime";
import Cable from "./Cable";
import Data from "./Data";
import Electricity from "./Electricity";
import Wallet from "./Wallet";
import UserContext from "../../Context/User/userContext";

function Dashboard({ Authenticated }) {
  const {path}=useRouteMatch();
  const tryContext = useContext(UserContext);
  // const { path, url } = useRouteMatch();
  // const { id } = useParams();
  // console.log(tryContext);
  // console.log(path);
  // console.log(url);
  // if (!tryContext.user) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <div className="dashboard" style={{ height: "100vh" }}>
      <DashboardNav />
      <div className="px-1" style={{ height: "100%" }}>
        <div style={{ height: "50%" }}>
          <h1 className="text-center text-light pt-3">
            Welcome {tryContext.user.firstName}
          </h1>
        </div>
        <section className="dash-todo-section">
          <div className="mini-card-wrapper container">
            {todoItems.map((todo) => (
              <Link
                to={`user/${todo.param}`}
                className="mini-card"
                key={todo.id}
              >
                <div className="mini-card-content">
                  <div className="mini-card-logo">
                    <div className="mini-logo-wrapper"></div>
                  </div>
                  <p>{todo.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Switch>
          <Route path="/dashboard/1" component={Airtime} />
          <Route path="/dashboard/2" component={Data} />
          <Route path="/dashboard/3" component={Cable} />
          <Route path="/dashboard/4" component={Electricity} />
          <Route path="/dashboard/wallet" component={Wallet} />
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
