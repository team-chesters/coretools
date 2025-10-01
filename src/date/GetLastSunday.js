/**
 * Returns the date of the last Sunday before a given date.
 * 
 * @param {Date} d - The date for which the last Sunday is to be found.
 * @returns {Date} Returns the date of the last Sunday before the given date.
 */

import isEmpty from "./isEmpty";

export default function GetLastSunday(d) {
    if (isEmpty(d)) return 'parameter is empty';

    let date = new Date(d);
    let day = date.getDay(),
        diff = date.getDate() - day;

    let lastSunday = new Date(date.setDate(diff));
    lastSunday.setHours(0, 0, 0, 0);

    return lastSunday;
};