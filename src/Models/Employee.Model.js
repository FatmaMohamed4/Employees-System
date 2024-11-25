"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
// import mongoose, { Schema, Document } from "mongoose";
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
=======
var mongoose_1 = require("mongoose");
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
var EmployeeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true },
}, { timestamps: true });
<<<<<<< HEAD
exports.default = mongoose_2.default.model("Employee", EmployeeSchema);
=======
exports.default = mongoose_1.default.model("Employee", EmployeeSchema);
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
