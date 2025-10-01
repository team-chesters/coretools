import { isDate } from "date-fns";

/**
 * Subtracts a specified number of months from a given date.
 * @param {number} numOfMonths - The number of months to subtract.
 * @param {Date} date - Optional. The reference date to subtract months from. Default is the current date.
 * @returns {Date|null} Returns a new Date object after subtracting the specified months. If param date is not Date Object, return null;
 */

export default function SubtractMonths(numOfMonths, date = new Date()) {
    if (!isDate(date)) return null;

    const modifiedDate = new Date(date);
    modifiedDate.setMonth(modifiedDate.getMonth() - numOfMonths);

    return modifiedDate;
};
