/**
 * Checks if the given value is an object or a function.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is an object or a function, false otherwise.
 */

export default function isObject(value) {
  const type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
