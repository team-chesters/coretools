import isEmpty from './isEmpty'

/**
 * Checks if a key exists in an object and if its value is not empty. Optionally, it can check nested keys for non-empty values.
 * @param {Object} obj - The object to check for the key.
 * @param {string} level - The key to check within the object.
 * @param {...string} rest - (Optional) Additional keys to check for non-empty values in nested objects.
 * @returns {boolean} True if the key exists in the object and its value is not empty, false otherwise.
 */

export default function hasKeyNonEmpty(obj, level, ...rest) {
    if (obj === null) return false;
    if (obj === undefined) return false;
    if (rest.length == 0 && Object.prototype.hasOwnProperty.call(obj, level)) {
        if (obj[level] == null) return false;
        return !isEmpty(obj[level]);
    }
    
    return hasKeyNonEmpty(obj[level], ...rest);
};
