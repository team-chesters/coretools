import Len from "./Len";

/**
 * Checks if the given index is a valid index for the array.
 * @param {Array} arr - The array to check.
 * @param {number} idx - The index to check.
 * @returns {boolean} Returns true if the index is valid for the array, false otherwise.
 */

export default function isValidIndex(arr, idx) {
    return Array.isArray(arr) && idx >= 0 && Len(arr) > idx;
};
