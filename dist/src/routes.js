"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var index_1 = require("./routes/index");
var router = express_1.Router();
exports.router = router;
router.get('/', function (_, res) {
    return res.send('API ok!');
});
router.use(index_1.routes);
