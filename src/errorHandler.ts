import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    // Format validation errors
    const formattedErrors = Object.keys(err.errors || {}).reduce(
      (acc, key) => {
        const error = (err.errors as Record<string, any>)[key];
        acc[key] = {
          message: error.message,
          name: error.name,
          properties: {
            message: error.properties?.message,
            type: error.properties?.type,
            min: error.properties?.min,
          },
          kind: error.kind,
          path: error.path,
          value: error.value,
        };
        return acc;
      },
      {} as Record<string, any>,
    );

    // Send formatted response
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: {
        name: err.name,
        errors: formattedErrors,
      },
      stack: process.env.NODE_ENV !== 'production' || process.env.INCLUDE_STACK === 'true' ? err.stack : undefined,
    });
    return; 
  }

  // Handle other errors
  res.status(err.status || 500).json({
    message: err.message || 'An internal server error occurred',
    success: false,
    error: err.message || 'Unknown error',
    stack: process.env.NODE_ENV !== 'production' || process.env.INCLUDE_STACK === 'true' ? err.stack : undefined,
  });
  return; 
};

export default errorHandler;
