"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_1 = require("react-router");
var React = require("react");
var Player_1 = require("./Player");
var FullRoster_1 = require("./FullRoster");
var Roster = function () { return (React.createElement("div", null,
    React.createElement("h2", null, "Thsi is a roster page"),
    React.createElement(react_router_1.Switch, null,
        React.createElement(react_router_1.Route, { exact: true, path: '/roster', component: FullRoster_1.default }),
        React.createElement(react_router_1.Route, { path: '/roster/:number', component: Player_1.default })))); };
exports.default = Roster;
//# sourceMappingURL=Roster.js.map