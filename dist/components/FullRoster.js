"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var playerAPI_1 = require("../playerAPI");
var React = require("react");
var FullRoster = function () { return (React.createElement("div", null,
    React.createElement("ul", null, playerAPI_1.default.all().map(function (p) { return (React.createElement("li", { key: p.number },
        React.createElement(react_router_dom_1.Link, { to: "/roster/" + p.number }, p.name))); })))); };
exports.default = FullRoster;
//# sourceMappingURL=FullRoster.js.map