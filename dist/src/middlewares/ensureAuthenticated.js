"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(req, res, next) {
    var authToken = req.headers.authorization;
    if (!authToken)
        return res.status(401).json({ message: "Token missing" });
    var _a = authToken.split(" "), token = _a[1];
    try {
        var sub = jsonwebtoken_1.verify(token, '3a9405dea514059227605862b34bd19a').sub;
        req.user_id = sub;
        return next();
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
