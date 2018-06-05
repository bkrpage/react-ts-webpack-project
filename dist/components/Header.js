"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
// The Header creates links that can be used to navigate
// between routes.
var Header = function () { return (React.createElement("header", null,
    React.createElement("nav", null,
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: '/' }, "Home")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: '/users' }, "Users")))))); };
exports.default = Header;
//# sourceMappingURL=Header.js.map