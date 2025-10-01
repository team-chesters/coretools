/**
 * Checks if a key exists in an object and if its value is a positive number. Optionally, it can check nested keys for positive numbers.
 * @param {Object} obj - The object to check for the key.
 * @param {string} level - The key to check within the object.
 * @param {...string} rest - (Optional) Additional keys to check for positive numbers in nested objects.
 * @returns {boolean} True if the key exists in the object and its value is a positive number, false otherwise.
 */

export default function hasKeyNumberPositive(obj, level, ...rest) {
    const isInObject = obj !== null && obj !== undefined;

    if (isInObject && rest.length === 0 && Object.prototype.hasOwnProperty.call(obj, level)) {
        const value = obj[level];
        return typeof value === 'number' && value > 0;
    }

    return isInObject && hasKeyNumberPositive(obj[level], ...rest);
};
