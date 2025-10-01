/**
 * Returns the start and end dates of a month based on the provided date.
 * @param {Date} date - The reference date.
 * @returns {object} An object containing the start and end dates of the month.
 */

export default function GetMonthRange(date) {
    let start_date = new Date(date.getFullYear(), date.getMonth(), 1);
    let end_date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    start_date.setHours(0, 0, 0, 0);
    end_date.setHours(23, 59, 59, 0);

    return {
        start: start_date,
        end: end_date,
    };
};
