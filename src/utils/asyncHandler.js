// asyncHandler is a higher-order function that wraps an asynchronous route handler
// to handle any errors that may occur and automatically pass them to Express's error handler.
const asyncHandler = (requestHandler) => {
  
    // Return a function that takes in req, res, and next (the Express request, response, and next function)
    (req, res, next) => {
  
      // Wrap the execution of the requestHandler in a resolved Promise to handle async errors.
      // If the requestHandler completes successfully, do nothing special.
      // If it throws an error or rejects, catch the error and pass it to `next()`, 
      // which triggers the Express error-handling middleware.
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
  };
  
  // Export the asyncHandler function so it can be used in other files to wrap route handlers.
  export { asyncHandler };
  
