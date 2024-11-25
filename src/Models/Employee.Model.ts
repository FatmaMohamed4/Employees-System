<<<<<<< HEAD
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
  salary: { type: Number},
  hourlyRate :{type:Number , default:100} ,
  hoursWorked :{type :Number, default :50}
}, { timestamps: true });

export default mongoose.model<IEmployee>("Employee", EmployeeSchema);
=======
// import mongoose, { Schema, Document } from "mongoose";
import { Schema } from 'mongoose';
import  mongoose from 'mongoose';

export interface IEmployee extends Document {
  name: string;
  email: string;
  position: string;
  salary: number;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model<IEmployee>("Employee", EmployeeSchema);
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
