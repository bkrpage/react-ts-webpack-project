"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./Home");
var UserRoutes_1 = require("./users/UserRoutes");
var Main = function () { return (React.createElement("main", null,
    React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Home_1.default }),
        React.createElement(react_router_dom_1.Route, { path: '/users', component: UserRoutes_1.default })))); };
exports.default = Main;
//# sourceMappingURL=main.js.map