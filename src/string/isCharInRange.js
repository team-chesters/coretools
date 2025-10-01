import { _CHAR_RANGE_MAP } from "./const";
import isEmpty from "./isEmpty";

/**
 * Checks if a character is within specified ranges, supporting ASCII or Unicode.
 * @param {string} character - The character to check.
 * @param {Array} ranges - An array of objects, each with 'start' and 'end' properties, representing ranges.
 * @param {string} rule - The character encoding rule, either ASCII or Unicode (default: ASCII).
 * @returns {boolean} Returns true if the character is within any of the specified ranges according to the encoding rule, otherwise false.
 */

const isCharInRange = function (character, ranges, rule = _CHAR_RANGE_MAP.ASCII) {
    if (isEmpty(character) || isEmpty(ranges)) return false;

    if (rule === _CHAR_RANGE_MAP.ASCII) {
        return ranges.some(range => character >= range.start && character <= range.end);
    }
    
    if (rule === _CHAR_RANGE_MAP.UNICODE) {
        const charCode = character.charCodeAt(0);
        return ranges.some(range => charCode >= range.start && charCode <= range.end);
    }

    return false;
};

export default isCharInRange;