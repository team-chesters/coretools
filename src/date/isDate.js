/**
 * Checks if the input is a JavaScript Date object.
 * 
 * @param {*} input - The value to check.
 * @returns {boolean} Returns true if the input is a Date object, false otherwise.
 */

export default function isDate(input) {
    return Object.prototype.toString.call(input) === "[object Date]";
};
