/**
 * Converts a decimal number to its hexadecimal representation.
 * 
 * @param {number} dec - The decimal number to convert.
 * @returns {string} Returns the hexadecimal representation of the decimal number.
 */

export default function ConvertDecimalToHex(dec) {
    return dec.toString(16).padStart(2, "0");
};
