"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorHandler = function (err, req, res, next) {
    var statusCode = err.statusCode || 500; // Default to 500 if no status code is set
    var response = {
        statusCode: statusCode,
        message: err.message || "Internal Server Error", // Set the error message
        isOperational: err.isOperational || false // Mark as operational if set
    };
    res.status(statusCode).json(response); // Send the JSON response
};
exports.errorHandler = errorHandler;
