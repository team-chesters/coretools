/**
 * Checks if the input integer is zero (0).
 * @param {number} int - The integer to check.
 * @returns {boolean} Returns true if the input integer is zero, false otherwise.
 */

export default function isZero (int) {
    if (typeof int === 'object') return null;
    if (typeof int === 'string') return null;
    if (Array.isArray(int)) return null;
    if (int === '' || int === null || int === undefined) return null;

    return Math.sign(int) === 0 || Math.sign(int) === -0;
};