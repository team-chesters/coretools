/**
 * Returns the difference in months between two dates.
 * @param {Date} d1 - The first date.
 * @param {Date} d2 - The second date.
 * @returns {number} The difference in months between the two dates.
 */

export default function GetMonthDiff(d1, d2) {
    let months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
};
