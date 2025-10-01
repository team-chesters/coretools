import Len from "./Len";

/**
 * Calculates the byte length of a string, taking into account multi-byte characters.
 * @param {string} str - The string to calculate the byte length of.
 * @returns {number} Returns the byte length of the string.
 */

export default function LenByte(str) {
    let count = 0;
    let lenStr = Len(str);

    for (let i = 0; i < lenStr; i++) {
        if (str.charCodeAt(i) > 127) {
            count++;
        }
        count++;
    }

    return count;
};
