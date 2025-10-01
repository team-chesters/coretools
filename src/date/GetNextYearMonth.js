import isDate from './isDate';

/**
 * Returns the date for the year and month ahead or behind the provided date.
 * @param {Date} t_date - The reference date.
 * @param {number} year - The number of years to add or subtract.
 * @param {number} month - The number of months to add or subtract.
 * @returns {Date} The resulting date after adding or subtracting the specified number of years and months.
 */

export default function GetNextYearMonth(t_date, year, month) {
    if (!isDate(t_date)) return new Date();

    let y_date = new Date(t_date);
    let tmp_date = new Date(t_date.getFullYear() + year, t_date.getMonth() + month + 1, 0);
    let d = Math.min(t_date.getDate(),tmp_date.getDate());

    return new Date(t_date.getFullYear() + year, t_date.getMonth() + month, d, t_date.getHours(), t_date.getMinutes(), t_date.getSeconds());
}