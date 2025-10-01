import isEmpty from "./isEmpty";

/**
 * Calculates the date that was a specified number of days ago from a given date.
 * If no date is provided, the current date is used.
 * 
 * @param {number} numOfDays - The number of days ago.
 * @param {Date} date - (Optional) The reference date. Defaults to the current date.
 * @returns {Date} Returns the date that was 'numOfDays' days ago.
 */

export default function GetDaysAgo(numOfDays, date = new Date()) {
    if (isEmpty(numOfDays)) return 'Number of days value is empty';

    const daysAgo = new Date(date.getTime());

    daysAgo.setDate(date.getDate() - numOfDays);
    daysAgo.setHours(0, 0, 0, 0);

    return daysAgo;
};
