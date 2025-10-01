import isEmpty from './isEmpty';
import isNumber from './isNumber';

/**
 * Checks if a given value is a positive number.
 * @param {number} value - The value to check.
 * @returns {boolean|null} True if the value is a positive number, false if it's not a number or zero, null if it's empty.
 */

export default function isNumberPositive (int) {
    if (isEmpty(int)) return null;
    if (!isNumber(int)) return null;

    const n = Math.floor(Number(int));
    return Math.sign(n) === 1;
    // return n !== Infinity && String(n) === str && n >= 0;
};