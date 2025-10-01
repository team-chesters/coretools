import isNotInArray from "./isNotInArray";

/**
 * Checks if a key exists in the object and the value associated with the key is not present in the rest of the arguments.
 * @param {object} obj - The object to check.
 * @param {string} key - The key to check in the object.
 * @param {any} ...rest - The rest of the values to compare the object's key against.
 * @returns {boolean} True if the key exists and its value is not in the rest of the arguments, false otherwise.
 */

export default function hasKeyButNotIn (obj, key, ...rest) {
    if (obj === null) return false;
    if (obj === undefined) return false;

    if (!Object.prototype.hasOwnProperty.call(obj, key)) return false;

    if (rest.length == 0) {
        if (obj[key] == null) return false;
        return true;
    }

    return isNotInArray(obj[key], rest);
};
