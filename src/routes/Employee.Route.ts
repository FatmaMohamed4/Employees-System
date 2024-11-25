<<<<<<< HEAD
import { Router } from "express";
import  { createEmployee, getAll, getOneById, updateEmployee    } from "../controllers/Employee.Controller";

const router = Router();

router.get("/get", getAll);
router.patch('/update' , updateEmployee);
router.post("/create",createEmployee);
router.get ('/one', getOneById)
router.delete('/delete' , )
=======
import { Router } from "express";
import  { createEmployee, getAll, getOneById } from "../controllers/Employee.Controller";

const router = Router();

router.get("/get", getAll);

router.post("/create",createEmployee);
router.get ('/one', getOneById)
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
export default router