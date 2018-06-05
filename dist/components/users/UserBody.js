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
var AddressBody_1 = require("../address/AddressBody");
var UserBody = /** @class */ (function (_super) {
    __extends(UserBody, _super);
    function UserBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserBody.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", null,
                "Real Name: ",
                this.props.name,
                React.createElement(AddressBody_1.AddressBody, { address: this.props.address }),
                "Visit at: ",
                this.props.website,
                " ",
                React.createElement("br", null),
                "Call: ",
                this.props.phone,
                " ",
                React.createElement("br", null))));
    };
    ;
    return UserBody;
}(React.Component));
exports.UserBody = UserBody;
//# sourceMappingURL=UserBody.js.map