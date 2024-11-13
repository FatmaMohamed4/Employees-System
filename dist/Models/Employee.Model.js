// import mongoose, { Schema, Document } from "mongoose";
import { Schema } from 'mongoose';
import mongoose from 'mongoose';
const EmployeeSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true },
}, { timestamps: true });
export default mongoose.model("Employee", EmployeeSchema);
