import isNumber from "./isNumber";

/**
 * Checks if the input is a valid Unix timestamp.
 * @param {*} input - The value to check.
 * @returns {boolean} Returns true if the input is a valid Unix timestamp, false otherwise.
 */

export default function isTimestamp(ts) {
  if (!isNumber(ts)) return false;
  
  const unixTime = new Date(ts * 1000);
  
  return !Number.isNaN(unixTime.getTime()) && unixTime.getTime() === ts * 1000;
}