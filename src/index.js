"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var database_1 = require("./database");
var variables_1 = require("../variables");
var errHandler_1 = require("./Errors/errHandler");
var Employee_Route_1 = require("./routes/Employee.Route");
var app = (0, express_1.default)();
app.use(express_1.default.json()); // For parsing application/json
database_1.dbConnection;
// Middleware to parse URL-encoded bodies
app.use(express_1.default.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.listen(variables_1.PORT || 5000, function () {
    console.log("App is ruuning on PORT ".concat(variables_1.PORT || 5000));
});
app.use('/employee', Employee_Route_1.default);
app.use(errHandler_1.errorHandler);
