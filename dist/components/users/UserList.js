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
var UserService_1 = require("../../service/UserService");
var UserListItem_1 = require("./UserListItem");
var UserList = /** @class */ (function (_super) {
    __extends(UserList, _super);
    function UserList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: null,
            users: null,
            isLoaded: false
        };
        return _this;
    }
    UserList.prototype.componentDidMount = function () {
        var _this = this;
        UserService_1.userService.fetchUsers()
            .then(function (users) {
            return _this.setState({ users: users, isLoaded: true });
        }, function (error) {
            return _this.setState({ error: error, isLoaded: true });
        });
    };
    UserList.prototype.render = function () {
        var _a = this.state, error = _a.error, isLoaded = _a.isLoaded, users = _a.users;
        if (error) {
            return React.createElement("div", null, "Error");
        }
        else if (!isLoaded) {
            return React.createElement("div", null, "loading");
        }
        else {
            return (React.createElement("div", null,
                React.createElement(UserListItem_1.UserListItem, { users: users })));
        }
    };
    return UserList;
}(React.Component));
exports.UserList = UserList;
//# sourceMappingURL=UserList.js.map