"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var render_app_1 = require("../render/render-app");
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(render_app_1.render());
});
exports.default = router;
