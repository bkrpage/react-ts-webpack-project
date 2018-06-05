"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var playerAPI_1 = require("../playerAPI");
var React = require("react");
var Player = function (props) {
    var player = playerAPI_1.default.get(parseInt(props.match.params.number, 10));
    if (!player) {
        return React.createElement("div", null, "Sorry, but the player was not found");
    }
    return (React.createElement("div", null,
        React.createElement("h1", null,
            player.name,
            " (#",
            player.number,
            ")"),
        React.createElement("h2", null,
            "Position: ",
            player.position)));
};
exports.default = Player;
//# sourceMappingURL=Player.js.map