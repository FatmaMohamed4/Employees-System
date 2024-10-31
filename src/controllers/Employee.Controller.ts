import express,{ NextFunction, Request, Response } from "express";
import Employee from '../Models/Employee.Model';
import { NotFoundError } from "../Errors/NotfoundError";
import { ValidationError } from "../Errors/validationError";
import { errorHandler } from "../Errors/errHandler";


let employee :any
let employees : any

async function notFound(req:Request, res:Response) {
    if (!req.body || !req.body.id) {
        return res.status(400).json({ error: 'ID is required' });
    }
   const id = req.body.id
    if (id) {
        employees = await Employee.findById({id});
    } else {
        employees = await Employee.find(); 
    }

    if (!employees || (Array.isArray(employees) && employees.length === 0)) {
        throw new NotFoundError('Employee not found');
    }
}

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employees = await notFound(req, res); 
        res.status(200).json(employees);
    } catch (error) {
        next(error); 
    }
};

export const createEmployee =async (req:Request,res:Response, next :NextFunction)=>{
             
            employee = await Employee.create(req.body)
            if(!req.body){
                throw new ValidationError('Data is required')
            }
            res.status(201).json({
                status :true ,
                message :"This employee is created" ,
                employee
            })
    }

export const getOneById =async (req:Request,res:Response, next :NextFunction)=>{
    const id =req.body.id 
    employee = await notFound(id, res)


}
