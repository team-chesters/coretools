/**
 * Checks if a value is present in a list of values.
 * @param {any} v - The value to check.
 * @param {...any} t - A list of values to compare against.
 * @returns {boolean} Returns true if the value is found in the list, otherwise false.
 */

export default function isIn (v, ...t) {
    let tt = Array.from(t);
    for (let et of tt) {
        if (v === et) return true;
    }

    return false;
};
