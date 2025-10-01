/**
 * Returns the start of a given day (default is the current day).
 * 
 * @param {Date} d - (Optional) The date for which the start of the day is required. Defaults to the current date.
 * @returns {Date} Returns the start of the specified day.
 */

export default function GetDayStart(d = new Date()) {
    let t = new Date(d);
    t.setHours(0, 0, 0, 0);
    return t;
};
