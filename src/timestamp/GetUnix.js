import isDate from "./isDate";
import isEmpty from "./isEmpty";

/**
 * Transforms a given Date object into Unix time (seconds since Jan 1, 1970).
 * @param {Date} date - The Date object to be converted to Unix time.
 * @returns {number} The Unix time of the given Date object, or 0 if the input is not a valid Date object.
 */

export default function GetUnix(date) {
    if (isEmpty(date)) return 0;
    if (isDate(date)) return Number.parseInt(date.getTime() / 1000);

    return 0;
};
