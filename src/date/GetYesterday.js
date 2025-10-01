/**
 * Gets the date representing yesterday based on the provided date.
 * @param {Date} t_date - The date for which to find yesterday's date. (Default is current date if not provided)
 * @returns {Date} The date representing yesterday from the given date or the current date.
 */

export default function GetYesterday (t_date = new Date()) {
    return new Date(t_date.getTime() - 86400000);
};
