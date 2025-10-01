import isEmpty from "./isEmpty";

/**
 * Generates a date range from a specified number of days before the current date to the current date.
 * 
 * @param {number} beforeDays - The number of days before the current date.
 * @returns {Array<Date>} Returns an array containing the start date (beforeDays ago) and the current date.
 */

export default function GetDateRangeToNow(beforeDays) {
    if (isEmpty(beforeDays)) return 'parameter is empty';

    let startDate = new Date();
    startDate.setDate(new Date().getDate() - beforeDays);
    startDate.setHours(0, 0, 0, 0);
    return [new Date(startDate), new Date()];
};
