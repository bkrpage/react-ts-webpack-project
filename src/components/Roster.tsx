import {Route, Switch} from "react-router";
import React = require("react");
import Player from "./Player";
import FullRoster from "./FullRoster"


const Roster = () => (
    <div>
        <h2>Thsi is a roster page</h2>
        <Switch>
            <Route exact path='/roster' component={FullRoster}/>
            <Route path='/roster/:number' component={Player}/>
        </Switch>
    </div>
);

export default Roster;