"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Employee_Controller_1 = require("../controllers/Employee.Controller");
var router = (0, express_1.Router)();
router.get("/get", Employee_Controller_1.getAll);
<<<<<<< HEAD
router.patch('/update', Employee_Controller_1.updateEmployee);
router.post("/create", Employee_Controller_1.createEmployee);
router.get('/one', Employee_Controller_1.getOneById);
router.delete('/delete');
=======
router.post("/create", Employee_Controller_1.createEmployee);
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
exports.default = router;
