import isEmpty from "./isEmpty";

/**
 * Converts a time string in 'hh:mm' format to minutes.
 * @param {string} timeString - The time string in 'hh:mm' format to convert to minutes.
 * @returns {number} The equivalent number of minutes.
 */

function parseHHMM(timeString) {
     return timeString ? timeString.match(/(\d{2}):{0,1}(\d{2})/i) : null;
}

export default function hhmm2min(timeString) {
    if (isEmpty(timeString)) return 0;
    const timeComponents = parseHHMM(timeString);

    if (!Array.isArray(timeComponents)) return 0;
    return Number.parseInt(timeComponents[1]) * 60 + Number.parseInt(timeComponents[2]);
}
