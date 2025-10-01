import isEmpty from "./isEmpty";
import ymdToDate from "./ymdToDate";

/**
 * Returns the end of the week for a given date.
 * @param {string} yyyymmdd - The date in YYYYMMDD format for which to find the end of the week.
 * @returns {Date|string} Returns the end of the week for the specified date.
 */

export default function GetEndOfWeek(yyyymmdd) {
    if (isEmpty(yyyymmdd)) return 'parameter is empty';

    const date = ymdToDate(yyyymmdd)
    const day = date.getDay();
    const diff = date.getDate() + (6 - day);
    let adjustedDate = new Date(date.setDate(diff));

    adjustedDate.setHours(23, 59, 59, 0);
    return adjustedDate;
};
