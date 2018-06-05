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
var UserHeader = /** @class */ (function (_super) {
    __extends(UserHeader, _super);
    function UserHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserHeader.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", null, this.props.username),
            React.createElement("h3", null, this.props.email)));
    };
    ;
    return UserHeader;
}(React.Component));
exports.UserHeader = UserHeader;
//# sourceMappingURL=UserHeader.js.map