// src/controllers/payrollController.ts
import { Request, Response, NextFunction } from 'express';
import Employee from '../Models/Employee.Model';
import PayrollModel from '../Models/Payroll.Model';


export const calculatePayroll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employee = await Employee.findById(req.body.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        const totalPay = employee.hourlyRate *employee.hoursWorked
        const deductions = totalPay * 0.1; // افتراض خصم 10%
        const netPay = totalPay - deductions;

        const payroll = new PayrollModel({
            employee: employee._id,
            totalPay,
            deductions,
            netPay
        });

        await payroll.save();
        res.status(201).json(payroll);
    } catch (error) {
        next(error);
    }
};
