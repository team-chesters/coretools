import GetMonthRange from "./GetMonthRange.js";

/**
 * Gets the range of the current month.
 * @returns {Object} An object containing the start and end dates of the current month.
 */

export default function GetThisMonthRange() {
    let today = new Date();
    return GetMonthRange(today);
};
