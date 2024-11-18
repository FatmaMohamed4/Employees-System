
import Employee from '.././../src/Models/Employee.Model';
import { Request, Response, NextFunction, request } from 'express';
import { createEmployee, getAll } from './../../src/controllers/Employee.Controller';


let req: Partial<Request>;
let res: Partial<Response>;
let next: NextFunction;

    req = {}; 
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    next = jest.fn()

describe('createEmployee', () => {
    it('should throw error if req.body is missing', async () => {
        req.body = {}; 
        await expect(createEmployee(req as Request, res as Response, next)).rejects.toThrow();
    });
});

describe('getAll',()=>{
    it('should return all employees data', async()=>{
        req.body ={};
        Employee.find = jest.fn()
        .mockResolvedValue([{ name: 'John Doe', salary: 5000 }]);
        await getAll(req as Request, res as Response, next);
        expect(res.json).toHaveBeenCalledWith([{ name: 'John Doe', salary: 5000 }]);
    })
})