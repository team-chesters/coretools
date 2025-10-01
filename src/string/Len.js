/**
 * Returns the length of an array or string.
 * @param {*} obj - The object to get the length of.
 * @returns {number} Returns the length of the array or string, or 0 if the input is not an array or string.
 */

export default function Len(obj) {
    if (Array.isArray(obj)) return obj.length;

    if (typeof obj == "string") return obj.length;

    return 0;
};
