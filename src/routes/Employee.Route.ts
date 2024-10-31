import { Router } from "express";
import  { createEmployee, getAll, getOneById } from "../controllers/Employee.Controller";

const router = Router();

router.get("/get", getAll);

router.post("/create",createEmployee);
router.get ('/one', getOneById)
export default router