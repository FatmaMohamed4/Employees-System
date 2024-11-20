import { Router } from "express";

import { calculatePayroll, getPayroll } from './../controllers/Payroll.Controller';

const payrollRouter = Router();

payrollRouter.post('/calc' , calculatePayroll)
payrollRouter.get('/get', getPayroll)

export default payrollRouter