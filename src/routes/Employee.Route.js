"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Employee_Controller_1 = require("../controllers/Employee.Controller");
var router = (0, express_1.Router)();
router.get("/get", Employee_Controller_1.getAll);
router.post("/create", Employee_Controller_1.createEmployee);
exports.default = router;
