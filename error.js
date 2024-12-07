// eslint-disable-next-line import/prefer-default-export
export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
// This file exports a utility function named `createError` that is used to create custom error objects with a specified status and message. 
// This is useful for handling errors consistently across the application by attaching a status code and a message to any error that occurs.
