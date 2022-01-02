"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var InputData = function (props) {
    var inputColorsEl;
    var inputTimeZoneEl;
    React.useEffect(function () {
        inputColorsEl = document.getElementById("input-colors");
        inputTimeZoneEl = document.getElementById("input-time-zone");
    }, []);
    function returnColors() {
        var colorsStr = inputColorsEl.value;
        props.colorsFn(colorsStr.split(" "));
    }
    function returnTimeZone() {
        props.timeZoneFn(inputTimeZoneEl.value);
    }
    return React.createElement("div", null,
        React.createElement("input", { id: "input-colors", placeholder: "Enter colors separated by space" }),
        " ",
        React.createElement("button", { onClick: returnColors }, "GO"),
        React.createElement("input", { id: "input-time-zone", placeholder: "Enter timeZone" }),
        " ",
        React.createElement("button", { onClick: returnTimeZone }, "GO"));
};
exports.default = InputData;
