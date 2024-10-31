"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Employee_Route_1 = require("./routes/Employee.Route");
var database_1 = require("./database");
// dotenv.config()
database_1.dbConnection;
var app = express();
app.use(express.json());
var port = process.env.PORT;
app.listen(process.env.PORT || 5000, function () {
    console.log("App is ruuning on PORT ".concat(port));
});
app.use('/employee', Employee_Route_1.default);
