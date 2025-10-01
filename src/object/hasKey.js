/**
 * Checks if a nested key exists within an object.
 * 
 * @param {Object} obj - The object to search within.
 * @param {string} level - The key level to traverse (nested key).
 * @param {...string} rest - Additional key levels to traverse (nested keys).
 * @returns {boolean} Returns true if the nested key exists, false otherwise.
 */

export default function hasKey(obj, level, ...rest) {
    if (obj === null) return false;
    if (obj === undefined) return false;
    if (rest.length == 0 && Object.prototype.hasOwnProperty.call(obj, level)) {
        if (obj[level] == null) return false;
        return true;
    }
    
    return hasKey(obj[level], ...rest);
};
