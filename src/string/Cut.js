/**
 * This function shortens a given string to a specified length in bytes.
 * It iterates through the string, considering the byte size of each character (1 byte for ASCII, 2 bytes for non-ASCII characters like Unicode).
 * Once the accumulated byte count exceeds the specified length, it truncates the string and returns the shortened version.
 * If the string is within the desired byte length, it returns the original string.
 *
 * @category String
 * @param {string} The value to convert.
 * @param {number} The number of lengths to cut.
 * @returns {string} Returns the truncated string.
 */

export default function Cut(str, len) {
    if (typeof str == "string") {
        let s = 0;
        for (let i = 0; i < str.length; i++) {
            s += str.charCodeAt(i) > 128 ? 2 : 1;
            if (s > len) return str.substring(0, i);
        }

        return str;
    }
};
