"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import mongoose, { Schema, Document } from "mongoose";
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var EmployeeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true },
}, { timestamps: true });
exports.default = mongoose_2.default.model("Employee", EmployeeSchema);
