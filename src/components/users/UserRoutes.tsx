import * as React from "react";
import {Route, Switch} from "react-router";
import {UserPage} from "./UserPage";
import {UserList} from "./UserList";



const UserRoutes = () => (

    <div>
        <h2>This is a User Page</h2>
        <Switch>
            <Route exact path='/users' component={UserList}/>
            {/*<Route path='/users/:id' component={UserPage}/>*/}
            <Route path='/users/:username' component={UserPage}/>
        </Switch>
    </div>
);

export default UserRoutes;