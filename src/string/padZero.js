/**
 * Pads a string with leading zeros to achieve the desired length.
 * @param {string} str - The string to pad with zeros.
 * @param {number} len - Optional. The desired length of the padded result. Default is 2.
 * @returns {string} Returns the padded string.
 */

export default function padZero(str, len) {
    let length = len || 2;

    if (length <= 0) {
        length = 2;
    }

    let zeros = new Array(length).join("0");
    return (zeros + str).slice(-length);
};