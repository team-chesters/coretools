/**
 * Checks if a value is not present in an array.
 * @param {*} v - The value to check.
 * @param {Array} t - The array to search within.
 * @returns {boolean} Returns true if the value is not present in the array, otherwise false.
 */

export default function isNotInArray(v, t) {
    if (Array.isArray(t)) {
        for (let et of t) {
            if (v == et) return false;
        }
    }
    return true;
};
