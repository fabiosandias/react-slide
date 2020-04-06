import React from 'react';
import {Switch, Route} from "react-router";
import Home from "../home/Home";
import Profile from "../profile/Profile";

export default props => {
    return (
        <Switch>
            <Route path="/:letter?" component={Home} exact />
            <Route path="/profile/:id" component={Profile} exact />
        </Switch>
    );
};
