"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
var mongoose_1 = require("mongoose");
// import dotenv from 'dotenv';
// dotenv.config();
var MongoURL = process.env.DBUrl;
if (!MongoURL) {
    throw new Error("DBUrl is not defined in the environment variables");
}
exports.dbConnection = mongoose_1.default.connect(MongoURL, {
    dbName: 'TS-1',
}).then(function () {
    console.log('DB is connected');
}).catch(function (error) {
    console.error('DB connection error:', error);
});
