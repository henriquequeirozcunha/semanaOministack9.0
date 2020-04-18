import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Login from './pages/Login';
import New from './pages/New';
import DashBoard from './pages/Dashboard';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/New" component={New} />
                <Route path="/dashboard" component={DashBoard} />
            </Switch>

        </BrowserRouter>
    );
}