"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var UserPage_1 = require("./UserPage");
var UserList_1 = require("./UserList");
var UserRoutes = function () { return (React.createElement("div", null,
    React.createElement("h2", null, "This is a User Page"),
    React.createElement(react_router_1.Switch, null,
        React.createElement(react_router_1.Route, { exact: true, path: '/users', component: UserList_1.UserList }),
        React.createElement(react_router_1.Route, { path: '/users/:username', component: UserPage_1.UserPage })))); };
exports.default = UserRoutes;
//# sourceMappingURL=UserRoutes.js.map