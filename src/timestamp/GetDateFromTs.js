import isEmpty from "./isEmpty";
import isNumber from "./isNumber";

/**
 * Returns a Date Object representation of time in 00:00:00.
 *
 * @param {number} timestamp - The UNIX timestamp value in seconds.
 * @returns {Date|boolean} The Date Object of timestamp.  If timestamp value is wrong, return false.
 */

export default function GetDateFromTs(timestamp) {
  if (isEmpty(timestamp)) return false;
  if (!isNumber(timestamp)) return false;
  if (String(timestamp).length !== 10) return timestamp;

  const milliseconds = timestamp * 1000;
  const currentDate = new Date(milliseconds);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  
  return new Date(year, month, day, 0, 0, 0, 0);
}
