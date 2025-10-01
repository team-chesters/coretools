/**
 * Returns the end of a given day (default is the current day).
 * 
 * @param {Date} d - (Optional) The date for which the end of the day is required. Defaults to the current date.
 * @returns {Date} Returns the end of the specified day.
 */

export default function GetDayEnd(d = new Date()) {
    let t = new Date(d);
    t.setHours(23, 59, 59, 0);
    return t;
};
