"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        // Format validation errors
        const formattedErrors = Object.keys(err.errors || {}).reduce((acc, key) => {
            var _a, _b, _c;
            const error = err.errors[key];
            acc[key] = {
                message: error.message,
                name: error.name,
                properties: {
                    message: (_a = error.properties) === null || _a === void 0 ? void 0 : _a.message,
                    type: (_b = error.properties) === null || _b === void 0 ? void 0 : _b.type,
                    min: (_c = error.properties) === null || _c === void 0 ? void 0 : _c.min,
                },
                kind: error.kind,
                path: error.path,
                value: error.value,
            };
            return acc;
        }, {});
        // Send formatted response
        res.status(400).json({
            message: 'Validation failed',
            success: false,
            error: {
                name: err.name,
                errors: formattedErrors,
            },
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
        });
        return;
    }
    // Handle other errors
    res.status(err.status || 500).json({
        message: err.message || 'An internal server error occurred',
        success: false,
        error: err.message || 'Unknown error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
    return;
};
exports.default = errorHandler;
