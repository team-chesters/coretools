import { _BYTE_UNIT } from "./const";
import isNumberNegative from "./isNumberNegative";

/**
 * Formats a byte size into a human-readable string representation.
 * 
 * @param {number} bytes - The size in bytes to format.
 * @param {number} [decimals=2] - Number of decimal places (default: 2).
 * @returns {string} Returns the formatted byte size as a string.
 */

export default function FormatBytes(bytes, decimals = 2) {
    if (isNumberNegative(bytes)) return "Invalid Bytes";
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = _BYTE_UNIT;

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
