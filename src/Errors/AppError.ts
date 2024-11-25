<<<<<<< HEAD
// AppError.ts
export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;

    constructor(message: string, statusCode: number, isOperational: boolean = true) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype); // Correctly set the prototype
        this.statusCode = statusCode;
        this.message = message 
        this.isOperational = isOperational;
        Error.captureStackTrace(this); // Capture the stack trace
    }
}
=======
// AppError.ts
export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;

    constructor(message: string, statusCode: number, isOperational: boolean = true) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype); // Correctly set the prototype
        this.statusCode = statusCode;
        this.message = message 
        this.isOperational = isOperational;
        Error.captureStackTrace(this); // Capture the stack trace
    }
}
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
