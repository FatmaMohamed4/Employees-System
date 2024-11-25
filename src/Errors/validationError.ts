<<<<<<< HEAD
// ValidationError.ts
import { AppError } from './AppError';

export class ValidationError extends AppError {
    constructor(message = 'Validation failed') {
        super(message, 400);
    }
}
=======
// ValidationError.ts
import { AppError } from './AppError';

export class ValidationError extends AppError {
    constructor(message = 'Validation failed') {
        super(message, 400);
    }
}
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
