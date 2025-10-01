/**
 * Removes duplicate values from an array and returns a new array with unique values.
 * @param {Array} vaList - The input array possibly containing duplicate values.
 * @returns {Array} An array with unique values.
 */

export default function GetUnique(vaList) {
    let set = new Set();

    for (const v of vaList) {
        set.add(v);
    }

    return Array.from(set);
};
