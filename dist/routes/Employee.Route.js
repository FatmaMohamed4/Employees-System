import { Router } from "express";
import { createEmployee, getAll, getOneById, updateEmployee } from "../controllers/Employee.Controller";
const router = Router();
router.get("/get", getAll);
router.patch('/update', updateEmployee);
router.post("/create", createEmployee);
router.get('/one', getOneById);
router.delete('/delete');
export default router;
