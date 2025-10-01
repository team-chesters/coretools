import Cut from "./Cut";
import LenByte from "./LenByte";

/**
 * This function shortens a given string to a specified length in bytes using the 'Cut' function.
 * It checks if the byte length of the string, calculated by the 'LenByte' function, exceeds the specified length (len).
 * If it does, it invokes the 'Cut' function to truncate the string and appends "..." to the result.
 * If the byte length is within the desired limit, it returns the original string.
 * If the input is not a string, an empty string is returned.
 *
 * @category String
 * @param {string} The value to convert.
 * @param {number} The number of lengths to cut.
 * @returns {string} Returns the truncated string.
 */

export default function CutW(str, len) {
    if (typeof str == "string") {
        if (LenByte(str) > len) return Cut(str, len) + "...";
        else return str;
    }
    return "";
};
