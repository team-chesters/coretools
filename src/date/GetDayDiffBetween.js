import { _MS_PER_DAY } from "./const";

/**
 * Calculates the difference in days between two dates.
 * 
 * @param {Date} a - The first date.
 * @param {Date} b - The second date.
 * @returns {number} Returns the difference in days between the two dates.
 */

export default function GetDayDiffBetween(a, b) {
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};
