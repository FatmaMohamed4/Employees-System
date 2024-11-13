// AppError.ts
export class AppError extends Error {
    constructor(message, statusCode, isOperational = true) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype); // Correctly set the prototype
        this.statusCode = statusCode;
        this.message = message;
        this.isOperational = isOperational;
        Error.captureStackTrace(this); // Capture the stack trace
    }
}
