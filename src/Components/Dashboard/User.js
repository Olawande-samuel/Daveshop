import React from 'react';
import {Route, Switch, useParams, useRouteMatch} from 'react-router-dom'
import Airtime from '../Pages/Airtime';
import Cable from '../Pages/Cable';
import Dashboard from '../Pages/Dashboard';
import Data from '../Pages/Data';
import Electricity from '../Pages/Electricity';
import Wallet from '../Pages/Wallet';

function User() {
    const {id} = useParams();
console.log(id)
    return (
        <div>
            <Switch>
                <Route exact path="/user"  component={Dashboard} />
                <Route path="/user/wallet" component={Wallet} />
                <Route path="/user/buy-airtime" component={Airtime} />
                <Route path="/user/buy-data" component={Data} />
                <Route path="/user/pay-cable" component={Cable} />
                <Route path="/user/pay-electricity-bill" component={Electricity} />
            </Switch>
        </div>
    )
}

export default User
