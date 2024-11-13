import { Router } from "express";

import { calculatePayroll } from './../controllers/Payroll.Controller';

const router = Router();

router.post('/calculate' , calculatePayroll)
