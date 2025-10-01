/**
 * Checks if the given value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is a number, otherwise false.
 */

export default function isNumber(num) {
  if (typeof num === 'number') {
    return num - num === 0;
  }

  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }

  return false;
};
