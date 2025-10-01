/**
 * Subtracts a specified number of years from a given date.
 * @param {number} numOfYears - The number of years to subtract.
 * @param {Date} date - Optional. The reference date to subtract years from. Default is the current date.
 * @returns {Date} Returns a new Date object after subtracting the specified years.
 */

export default function SubtractYears(numOfYears, date = new Date()) {
    date.setFullYear(date.getFullYear() - numOfYears);
    return date;
};
