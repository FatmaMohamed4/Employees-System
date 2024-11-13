// import mongoose, { Schema, Document } from "mongoose";
import { Schema } from 'mongoose';
import  mongoose from 'mongoose';

export interface IEmployee extends Document {
  name: string;
  email: string;
  position: string;
  salary: number;
  hourlyRate :any ,
  hoursWorked :any
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
  hourlyRate :{type:Number} ,
  hoursWorked :{type :Number}
}, { timestamps: true });

export default mongoose.model<IEmployee>("Employee", EmployeeSchema);
