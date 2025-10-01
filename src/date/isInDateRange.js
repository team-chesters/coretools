import { getTime } from 'date-fns';
import isEmpty from './isEmpty';
import isDate from './isDate';
import isNumber from './isNumber';

/**
 * Checks if a date is within the specified date range.
 * @param {Date|number} in_date - The date to check. It can be a Date object or a UNIX timestamp.
 * @param {Date} in_start - The start date of the range.
 * @param {Date} in_end - The end date of the range.
 * @returns {boolean} True if the input date is within the specified range, false otherwise.
 */

export default function isInDateRange (in_date, in_start, in_end) {
    if (isEmpty(in_date) || isEmpty(in_start) || isEmpty(in_end)) return false;

    let in_date_ms;
    if (isDate(in_date)) {
        in_date_ms = in_date.getTime();
    } else if (isNumber(in_date) && in_date.length === 10) {
        in_date_ms = in_date * 1000;
    } else if (isNumber(in_date) && in_date.length === 13) {
        in_date_ms = in_date;
    } else {
        return false; // Invalid date input
    }

    return in_start.getTime() <= in_date_ms && in_date_ms <= in_end.getTime();
};
