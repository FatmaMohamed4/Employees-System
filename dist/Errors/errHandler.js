export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500; // Default to 500 if no status code is set
    const response = {
        statusCode,
        message: err.message || "Internal Server Error", // Set the error message
        isOperational: err.isOperational || false // Mark as operational if set
    };
    res.status(statusCode).json(response); // Send the JSON response
};
