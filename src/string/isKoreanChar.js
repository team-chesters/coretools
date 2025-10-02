import { _CHAR_RANGE_MAP } from "../_base/constants.js";
import isCharInRange from "./isCharInRange.js";

/**
 * Checks if a character is a Korean character using Unicode ranges.
 * @param {string} character - The character to check.
 * @returns {boolean} Returns true if the character is a Korean character, otherwise false.
 */

const UNICODE_RANGES = [
    { start: 0xAC00, end: 0xD7A3 } // Korean Unicode range
];

const isKoreanChar = function (character) {
    return isCharInRange(character, UNICODE_RANGES, _CHAR_RANGE_MAP.UNICODE);
};

export default isKoreanChar;
