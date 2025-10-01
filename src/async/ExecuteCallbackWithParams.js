/**
 * Executes a callback function with provided parameters.
 * 
 * @param {function} callback - The callback function to execute.
 * @param {...any} parameters - The parameters to pass to the callback function.
 */

export default function ExecuteCallbackWithParams(callback, ...parameters) {
  if (typeof callback === 'function') callback(...parameters);
};
