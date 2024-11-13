import express,{ NextFunction, Request, Response } from "express";
import Employee from '../Models/Employee.Model';
import { NotFoundError } from "../Errors/NotfoundError";
import { ValidationError } from "../Errors/validationError";
import { errorHandler } from "../Errors/errHandler";
import mongoose from "mongoose";


let employee :any

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employees = await Employee.find()
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
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.send('Invalid Id')
      }
    if(!id){
        throw new NotFoundError('ID is required')
    }
    
    employee = await Employee.findById(id)
    res.json(employee)
}

export const updateEmployee = async (req:Request , res:Response , next:NextFunction)=>{
   const  updateData = req.body
    employee = await Employee.findByIdAndUpdate(req.body.id , updateData, {
        new: true, 
        runValidators: true, 
    });
    if (!mongoose.Types.ObjectId.isValid(req.body.id)) {
        throw new Error("Invalid ObjectId");
      }
    if(!employee){
        throw new NotFoundError('Employee not found')
    }
    res.status(200).json(employee);
}


export const deleteEmployee = async (req: Request, res: Response) => {
    const id = req.body.id;
    if (!id ||!mongoose.Types.ObjectId.isValid(req.body.id) ) {
        throw new ValidationError('Id is required')   
     }

    try {

        const deletedEmployee = await Employee.findByIdAndDelete(id);
        // Respond with a success message
        return res.status(200).json({
            status: true,
            message: 'Deleted employee successfully',
            deleted: deletedEmployee,
        });
    } catch (error) {
        console.error('Error deleting employee:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};