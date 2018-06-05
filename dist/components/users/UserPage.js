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
var UserHeader_1 = require("./UserHeader");
var UserService_1 = require("../../service/UserService");
var UserBody_1 = require("./UserBody");
var Post_1 = require("../posts/Post");
var UserPage = /** @class */ (function (_super) {
    __extends(UserPage, _super);
    function UserPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: null,
            user: null,
            isLoaded: false
        };
        return _this;
    }
    UserPage.prototype.componentDidMount = function () {
        var _this = this;
        var user;
        if (this.props.match.params.id !== undefined)
            user = UserService_1.userService.fetchUser(this.props.match.params.id);
        if (this.props.match.params.username !== undefined)
            user = UserService_1.userService.fetchUserByUsername(this.props.match.params.username);
        user.then(function (user) {
            return _this.setState({ user: user, isLoaded: true });
        }, function (error) {
            return _this.setState({ error: error, isLoaded: true });
        });
    };
    UserPage.prototype.render = function () {
        var _a = this.state, error = _a.error, isLoaded = _a.isLoaded, user = _a.user;
        if (error) {
            return React.createElement("div", null, "Error");
        }
        else if (!isLoaded) {
            return React.createElement("div", null, "loading");
        }
        else {
            return (React.createElement("div", null,
                React.createElement(UserHeader_1.UserHeader, { username: user.username, email: user.email }),
                React.createElement(UserBody_1.UserBody, { name: user.name, address: user.address, phone: user.phone, website: user.website }),
                React.createElement(Post_1.UserPosts, { userId: user.id })));
        }
    };
    return UserPage;
}(React.Component));
exports.UserPage = UserPage;
//# sourceMappingURL=UserPage.js.map