import isEmpty from "./isEmpty";

/**
 * Checks if two color strings are the same, ignoring case.
 * @param {string} color1 - The first color string.
 * @param {string} color2 - The second color string.
 * @returns {boolean} True if the colors are the same (case insensitive), false otherwise.
 */

export default function isSameColor (color1, color2) {
    if (isEmpty(color1) || isEmpty(color2)) return false;

    return color1.toUpperCase() == color2.toUpperCase();
};
