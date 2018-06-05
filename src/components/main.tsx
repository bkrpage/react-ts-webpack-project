import * as React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from "./Home";
import UserRoutes from "./users/UserRoutes";


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={UserRoutes}/>
        </Switch>
    </main>
);

export default Main