/**
 * Checks if a value exists in the array.
 * @param {any} v - The value to check.
 * @param {Array} t - The array to search for the value.
 * @returns {boolean} True if the value exists in the array, false otherwise.
 */

export default function isInArray(v, t) {
    if (Array.isArray(t)) {
        for (let et of t) {
            if (v == et) return true;
        }
    }

    return false;
};
