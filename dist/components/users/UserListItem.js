"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var UserListItem = /** @class */ (function (_super) {
    __extends(UserListItem, _super);
    function UserListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserListItem.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("ul", null, this.props.users.map(function (user) { return (React.createElement("li", { key: user.id },
                React.createElement(react_router_dom_1.Link, { to: "/users/" + user.id }, user.name),
                React.createElement(react_router_dom_1.Link, { to: "/users/" + user.username },
                    user.name,
                    "(by name)"))); }))));
    };
    ;
    return UserListItem;
}(React.Component));
exports.UserListItem = UserListItem;
//# sourceMappingURL=UserListItem.js.map