import isEmpty from "./isEmpty";

/**
 * Generates a date range with a start date and an end date, where the start date is a specified number of days before the current date and the end date is the current date.
 * 
 * @param {number} beforeDays - The number of days before the current date for the start date.
 * @returns {Object} Returns an object containing the start and end dates.
 */

export default function GetDateRangeToNowStartEnd(beforeDays) {
    if (isEmpty(beforeDays)) return 'parameter is empty';

    let startDate = new Date();
    startDate.setDate(new Date().getDate() - beforeDays + 1);
    startDate.setHours(0, 0, 0, 0);

    let endDate = new Date();
    endDate.setHours(23, 59, 59, 0);

    return {
        start: new Date(startDate),
        end: new Date(endDate),
    };
};
