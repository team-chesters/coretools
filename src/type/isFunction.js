/**
 * Checks if the given argument is a function.
 * @param {any} func - The argument to check.
 * @returns {boolean} Returns true if the argument is a function, otherwise false.
 */

export default function isFunction(func) {
    return (typeof func == 'function');
};
