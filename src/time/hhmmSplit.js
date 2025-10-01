/**
 * Splits a time string into hours and minutes.
 * @param {string} t - The time string in HH:MM format.
 * @returns {object} An object containing hours (hh) and minutes (mm).
 */

import isEmpty from "./isEmpty";

export default function hhmmSplit (t) {
    if (isEmpty(t)) return 0

    let tx = t.match(/(\d{2}):{0,1}(\d{2})/i);
    if (tx == null) return 0;

    return {
        hh: Number.parseInt(tx[1]),
        mm: Number.parseInt(tx[2]),
    };
};
