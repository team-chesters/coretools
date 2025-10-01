/**
 * Returns the start and end dates of the next month based on the provided date or the current date.
 * @param {Date} t_date - The reference date. Defaults to the current date if not provided.
 * @returns {object} An object containing the start and end dates of the next month.
 */

export default function GetNextMonth(t_date = new Date()) {
    let start_date = new Date(t_date.getFullYear(), t_date.getMonth() + 1, 1);
    start_date.setHours(0, 0, 0, 0);
    let end_date = new Date(t_date.getFullYear(), t_date.getMonth() + 2, 0);
    end_date.setHours(23, 59, 59, 0);

    return {
        start: start_date,
        end: end_date,
    };
};
