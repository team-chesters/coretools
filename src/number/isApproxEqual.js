/**
 * Checks if two numbers are approximately equal, considering floating-point precision.
 * The function uses Number. EPSILON to determine the acceptable difference.
 * @param {number} a - The first number to compare.
 * @param {number} b - The second number to compare.
 * @returns {boolean} Returns true if the numbers are approximately equal, otherwise false.
 */

export default function isApproxEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
};
