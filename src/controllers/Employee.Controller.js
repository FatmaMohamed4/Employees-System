"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
exports.deleteEmployee = exports.updateEmployee = exports.getOneById = exports.createEmployee = exports.getAll = void 0;
=======
exports.createEmployee = exports.getAll = void 0;
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
var Employee_Model_1 = require("../Models/Employee.Model");
var NotfoundError_1 = require("../Errors/NotfoundError");
var validationError_1 = require("../Errors/validationError");
var employee;
<<<<<<< HEAD
var employees;
function notFound(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.body.id;
                    if (!id) return [3 /*break*/, 2];
                    return [4 /*yield*/, Employee_Model_1.default.findById({ id: id })];
                case 1:
                    employees = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, Employee_Model_1.default.find()];
                case 3:
                    employees = _a.sent();
                    _a.label = 4;
                case 4:
                    if (!employees || (Array.isArray(employees) && employees.length === 0)) {
                        throw new NotfoundError_1.NotFoundError('Employee not found');
=======
function notFound() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Employee_Model_1.default.find()];
                case 1:
                    employee = _a.sent();
                    if (!employee || employee.length === 0) {
                        throw new NotfoundError_1.NotFoundError('Employees not found');
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var getAll = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
<<<<<<< HEAD
    var employees_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Employee_Model_1.default.find()];
            case 1:
                employees_1 = _a.sent();
                res.status(200).json(employees_1);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
=======
    var employees;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, notFound()];
            case 1:
                employees = _a.sent();
                res.status(200).json(employees);
                return [2 /*return*/];
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
        }
    });
}); };
exports.getAll = getAll;
var createEmployee = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
<<<<<<< HEAD
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Employee_Model_1.default.create(req.body)];
            case 1:
                employee = _a.sent();
                if (!req.body) {
                    throw new validationError_1.ValidationError('Data is required');
                }
                res.status(201).json({
                    status: true,
                    message: "This employee is created",
                    employee: employee
                });
                return [2 /*return*/];
        }
    });
}); };
exports.createEmployee = createEmployee;
var getOneById = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.id;
                if (!id) {
                    throw new NotfoundError_1.NotFoundError('ID is required');
                }
                return [4 /*yield*/, Employee_Model_1.default.findById(id)];
            case 1:
                employee = _a.sent();
                res.json(employee);
                return [2 /*return*/];
        }
    });
}); };
exports.getOneById = getOneById;
var updateEmployee = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var updateData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                updateData = req.body;
                return [4 /*yield*/, Employee_Model_1.default.findByIdAndUpdate(req.body.id, updateData, {
                        new: true,
                        runValidators: true,
                    })];
            case 1:
                employee = _a.sent();
                if (!employee) {
                    throw new NotfoundError_1.NotFoundError('Employee not found');
                }
                res.status(200).json(employee);
                return [2 /*return*/];
        }
    });
}); };
exports.updateEmployee = updateEmployee;
var deleteEmployee = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedEmployee, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.id;
                if (!id) {
                    throw new validationError_1.ValidationError('Id is required');
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Employee_Model_1.default.findByIdAndDelete(id)];
            case 2:
                deletedEmployee = _a.sent();
                // Respond with a success message
                return [2 /*return*/, res.status(200).json({
                        status: true,
                        message: 'Deleted employee successfully',
                        deleted: deletedEmployee,
                    })];
            case 3:
                error_2 = _a.sent();
                console.error('Error deleting employee:', error_2);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteEmployee = deleteEmployee;
=======
    var body;
    return __generator(this, function (_a) {
        body = req.body;
        if (!body) {
            throw new validationError_1.ValidationError('Data is not valid');
        }
        employee = new Employee_Model_1.default(body);
        res.status(201).json({
            status: true,
            message: "This employee is created"
        });
        return [2 /*return*/];
    });
}); };
exports.createEmployee = createEmployee;
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
