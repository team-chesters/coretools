import isEmpty from "./isEmpty";
import ymdToDate from "./ymdToDate";

/**
 * Gets the start of the week based on the provided date.
 * @param {string} yyyymmdd - The date in YYYYMMDD format for which to find the start of the week.
 * @returns {Date|string} The start of the week for the given date or a message if the parameter is empty.
 */

export default function GetStartOfWeek(yyyymmdd) {
    if (isEmpty(yyyymmdd)) return 'parameter is empty';

    const date = ymdToDate(yyyymmdd);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    let adjustedDate = new Date(date.setDate(diff));
    
    adjustedDate.setHours(0, 0, 0, 0);

    return adjustedDate;
};
