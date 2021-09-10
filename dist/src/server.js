"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
require("express-async-errors");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
require("./database");
var swagger_json_1 = __importDefault(require("./swagger.json"));
dotenv_1.default.config();
var app = express_1.default();
var PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
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
