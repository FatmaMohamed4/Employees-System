// src/models/Payroll.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IEmployee } from './Employee.Model'; 

export interface IPayroll extends Document {
    employee: IEmployee 
    totalPay: {
        type :number, 
    }
    deductions: {
        type :number, 
    };
    netPay: number;
}

const payrollSchema = new Schema<IPayroll>({
    employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
    totalPay: { type: Number, required: true  },
    deductions: { type: Number, required: true , default :0},
    netPay: { type: Number, required: true }
});

export default mongoose.model<IPayroll>('Payroll', payrollSchema);
