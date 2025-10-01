import { _ONE_DAY_MS } from './const';
import isDate from './isDate';

/**
 * Checks if two input values represent the same date.
 * @param {Date} a - The first value to compare.
 * @param {Date} b - The second value to compare.
 * @returns {boolean} Returns true if both values represent the same date, false otherwise.
 */

export default function isSameDate(a, b) {
    if (!isDate(a) || !isDate(b)) return false;

    return Math.abs(a - b) < _ONE_DAY_MS && a.getDay() === b.getDay();
};
