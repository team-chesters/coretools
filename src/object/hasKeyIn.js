import isInArray from "./isInArray";

/**
 * Checks if a key exists in an object and optionally verifies if its value matches any values in the provided array.
 * @param {Object} obj - The object to check for the key.
 * @param {string} key - The key to check within the object.
 * @param {Array} rest - (Optional) Values to match against the object's key.
 * @returns {boolean} True if the key exists in the object, and if provided, its value matches any of the provided values, false otherwise.
 */

export default function hasKeyIn(obj, key, ...rest) {
    if (obj === null) return false;
    if (obj === undefined) return false;

    if (!Object.prototype.hasOwnProperty.call(obj, key)) return false;

    if (rest.length == 0) {
        if (obj[key] == null) return false;
        return true;
    }

    return isInArray(obj[key], rest);
};
