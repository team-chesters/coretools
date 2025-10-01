import isEmpty from "./isEmpty";
import isNumber from "./isNumber";
/**
 * Get a Date object from a timestamp in milliseconds while handling empty timestamps.
 *
 * @param {number} timestamp - The timestamp value in milliseconds.
 * @returns {(Date|boolean)} A Date object representing the date without time or false if the timestamp is empty.
 */

export default function GetDateFromMs(timestamp) {
    if (isEmpty(timestamp)) return false;
    if (!isNumber(timestamp)) return false;
    if (String(timestamp).length !== 13) return timestamp;

    const currentDate = new Date(timestamp);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    return new Date(year, month, day, 0, 0, 0, 0);
}
