"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
var mongoose_1 = require("mongoose");
<<<<<<< HEAD
var variables_1 = require("../variables");
var MongoURL = variables_1.DBUrl;
if (!MongoURL) {
    console.log("DBUrl is not defined in the environment variables");
=======
// import dotenv from 'dotenv';
// dotenv.config();
var MongoURL = process.env.DBUrl;
if (!MongoURL) {
    throw new Error("DBUrl is not defined in the environment variables");
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
}
exports.dbConnection = mongoose_1.default.connect(MongoURL, {
    dbName: 'TS-1',
}).then(function () {
    console.log('DB is connected');
}).catch(function (error) {
    console.error('DB connection error:', error);
});
<<<<<<< HEAD


=======
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
