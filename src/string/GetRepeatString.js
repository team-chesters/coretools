/**
 * Repeats the given string a specified number of times with an optional separator.
 * @param {string} string - The string to be repeated.
 * @param {number} times - The number of times the string should be repeated.
 * @param {string} [separator=''] - Optional. The separator to join the repeated strings. Defaults to an empty string.
 * @returns {string} The repeated string joined with the separator.
 */

export default function GetRepeatString(string, times, separator = '') {
    return Array(times).fill(string).join(separator);
};
