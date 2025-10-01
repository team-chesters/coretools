import hasKey from "./hasKey";

/**
 * Checks if all the provided keys exist in the object.
 * @param {object} obj - The object to check against.
 * @param {...string} rest - The keys to verify in the object.
 * @returns {boolean} Returns true if all keys exist, otherwise false.
 */

export default function hasKeyAll(obj, ...rest) {
    if (rest.length == 0) return false;

    for(const k of rest) {
        if(!hasKey(obj, k)) {
            return false;
        }
    }

    return true;
};
