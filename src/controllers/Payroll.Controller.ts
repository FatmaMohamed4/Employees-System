// src/controllers/payrollController.ts
import { Request, Response, NextFunction } from 'express';
import Employee from '../Models/Employee.Model';
import PayrollModel from '../Models/Payroll.Model';
import { NotFoundError } from '../Errors/NotfoundError';
import { request } from 'express';
let employee 
let payroll 
let totalPay

async function notFound(req: Request) {
     employee = await Employee.findById(req.body.id);
    if (!employee) {
        throw new NotFoundError("Employee is not found");
    }
    return employee;
}


export const calculatePayroll = (async (req: Request, res: Response) => {
    employee = await notFound(req);
         // Calculate total pay
         const totalPay = employee.hourlyRate * employee.hoursWorked;
         let deductions = 0;
         if (req.body.deductions) {
             deductions = req.body.deductions * (totalPay * 0.01);
         }
         const netPay = totalPay - deductions;
         const payroll = await PayrollModel.create({
             totalPay,
             deductions,
             netPay,
             employee: req.body.id,
         });
         res.status(201).json(payroll);
})



export const getPayroll = async (req:Request , res:Response)=>{
    employee = notFound(req)
    const payroll = await PayrollModel.findOne({ employee: req.body.id });
    res.status(200).json(payroll);

}