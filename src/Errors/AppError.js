"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
<<<<<<< HEAD
// AppError.ts
=======
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
var AppError = /** @class */ (function (_super) {
    __extends(AppError, _super);
    function AppError(message, statusCode, isOperational) {
        if (isOperational === void 0) { isOperational = true; }
<<<<<<< HEAD
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype); // Correctly set the prototype
        _this.statusCode = statusCode;
        _this.message = message;
        _this.isOperational = isOperational;
        Error.captureStackTrace(_this); // Capture the stack trace
=======
        var _this = _super.call(this, message) || this;
        //   Object.setPrototypeOf(this, new.target.prototype);
        _this.statusCode = statusCode;
        _this.isOperational = isOperational;
        Error.captureStackTrace(_this);
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
        return _this;
    }
    return AppError;
}(Error));
exports.AppError = AppError;
