"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = require("./routes");
require("./database");
dotenv_1.default.config();
var app = express_1.default();
var PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(function (err, req, res, next) {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});
app.listen(PORT, function () { return console.log("Server listening on port " + PORT); });
