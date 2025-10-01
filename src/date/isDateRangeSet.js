import hasKeyAll from './hasKeyAll';
import isDate from './isDate';

/**
 * Checks if an object represents a date range with valid 'start' and 'end' dates.
 * @param {object} range - The object to check for a valid date range.
 * @returns {boolean} Returns true if 'start' and 'end' are present and are Date objects, otherwise false.
 */

export default function isDateRangeSet(range) {
    return hasKeyAll(range, 'start', 'end') && isDate(range.start) && isDate(range.end);
};