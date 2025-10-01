import isEmpty from './isEmpty';
import isNumber from './isNumber';

/**
 * Checks if a given value is a negative number.
 * @param {number} int - The value to check.
 * @returns {boolean|null} True if the value is a negative number, false if it's positive or not a number, null if it's empty.
 */

export default function isNumberNegative (int) {
    if (isEmpty(int)) return null;
    if (!isNumber(int)) return null;

    return Math.sign(int) === -1;
};
