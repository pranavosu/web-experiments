"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
function render() {
    return server_1.default.renderToString(react_1.default.createElement("div", null, "Hello world :)"));
}
exports.render = render;
