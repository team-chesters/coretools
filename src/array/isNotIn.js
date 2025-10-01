/**
 * Checks if a value is not in the list of provided values.
 * @param {*} value - The value to check.
 * @param {...*} values - The list of values to check against.
 * @returns {boolean} Returns true if the value is not in the list, otherwise false.
 */

export default function isNotIn(v, ...t) {
    let tt = Array.from(t);
    for (let et of tt) {
        if (v == et) return false;
    }

    return true;
};
