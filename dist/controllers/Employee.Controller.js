var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Employee from '../Models/Employee.Model';
import { NotFoundError } from "../Errors/NotfoundError";
import { ValidationError } from "../Errors/validationError";
let employee;
let employees;
function notFound(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.body.id;
        if (id) {
            employees = yield Employee.findById({ id });
        }
        else {
            employees = yield Employee.find();
        }
        if (!employees || (Array.isArray(employees) && employees.length === 0)) {
            throw new NotFoundError('Employee not found');
        }
    });
}
export const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield Employee.find();
        res.status(200).json(employees);
    }
    catch (error) {
        next(error);
    }
});
export const createEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    employee = yield Employee.create(req.body);
    if (!req.body) {
        throw new ValidationError('Data is required');
    }
    res.status(201).json({
        status: true,
        message: "This employee is created",
        employee
    });
});
export const getOneById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    if (!id) {
        throw new NotFoundError('ID is required');
    }
    employee = yield Employee.findById(id);
    res.json(employee);
});
export const updateEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = req.body;
    employee = yield Employee.findByIdAndUpdate(req.body.id, updateData, {
        new: true,
        runValidators: true,
    });
    if (!employee) {
        throw new NotFoundError('Employee not found');
    }
    res.status(200).json(employee);
});
export const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    if (!id) {
        throw new ValidationError('Id is required');
    }
    try {
        const deletedEmployee = yield Employee.findByIdAndDelete(id);
        // Respond with a success message
        return res.status(200).json({
            status: true,
            message: 'Deleted employee successfully',
            deleted: deletedEmployee,
        });
    }
    catch (error) {
        console.error('Error deleting employee:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
