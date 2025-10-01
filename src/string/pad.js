/**
 * Pads a number or string with leading characters to achieve the desired width.
 * @param {number|string} n - The number or string to pad.
 * @param {number} width - The desired width of the padded result.
 * @param {string} z - Optional. The character to use for padding. Default is '0'.
 * @returns {string} Returns the padded string.
 */

export default function pad(n, width, z) {
    z = z || "0";
    n = "" + n;
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};