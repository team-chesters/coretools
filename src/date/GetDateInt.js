import isDate from './isDate';
import { format } from 'date-fns';

/**
 * Converts a Date object to an integer representation in the format 'yyyyMMdd'.
 * 
 * @param {*} date - The Date object or value to convert.
 * @returns {number} Returns the integer representation of the date ('yyyyMMdd') or -1 if input is not a Date object.
 */

export default function GetDateInt(date) {
    if (isDate(date)) return Number.parseInt(format(date, 'yyyyMMdd'));
    return -1;
};
