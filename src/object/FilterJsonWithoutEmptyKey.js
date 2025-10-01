/**
 * Filters a JSON object by keeping only specified keys that are not null or undefined.
 * 
 * @param {Object} obj - The JSON object to filter.
 * @param {string[]} keysOfInterest - The keys to keep in the filtered object.
 * @returns {Object} Returns a new object with specified keys that are not null or undefined.
 */

export default function FilterJsonWithoutEmptyKey(obj, keysOfInterest) {
    const keep = {};

    for (const key of keysOfInterest) {
        if (obj[key] !== null && obj[key] !== undefined) {
            keep[key] = obj[key];
        }
    }

    return keep;
}