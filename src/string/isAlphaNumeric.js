import isEmpty from "./isEmpty";

/**
 * Checks if a string is alphanumeric, including some special characters.
 * This function allows spaces and the following special characters: ! @ # $ % ^ & * ( )
 * @param {string} str - The string to check.
 * @returns {boolean} Returns true if the string is alphanumeric (including allowed special characters), otherwise false.
 */

export default function isAlphaNumeric (str) {
    if (isEmpty(str)) return false;

    const regEx = /^[0-9a-zA-Z \!\@\#\$\%\^\&\*\(\)]+$/;
    return regEx.test(str);
};
