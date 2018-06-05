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
var AddressBody = /** @class */ (function (_super) {
    __extends(AddressBody, _super);
    function AddressBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddressBody.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("address", null,
                React.createElement("h3", null, "Address"),
                this.props.address.suite,
                React.createElement("br", null),
                this.props.address.street,
                React.createElement("br", null),
                this.props.address.city,
                React.createElement("br", null),
                this.props.address.zipcode,
                React.createElement("br", null),
                React.createElement("h3", null, "Location"),
                "Lat: ",
                this.props.address.geo.lat,
                ", Long: ",
                this.props.address.geo.long,
                React.createElement("br", null))));
    };
    ;
    return AddressBody;
}(React.Component));
exports.AddressBody = AddressBody;
//# sourceMappingURL=AddressBody.js.map