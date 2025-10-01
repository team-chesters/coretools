/**
 * Converts a time string in HH:MM format to a slot number in a 30-minute interval array.
 * @param {string} t - The time string in HH:MM format to convert to a slot number.
 * @returns {number} The slot number in a 30-minute interval array.
 */

export default function hhmm2slotNo30min (t) {
    if (t == null) return -1;
    let tx = t.match(/(\d{2}):{0,1}(\d{2})/i);
    if (tx == null) return -1;

    let idx = Number.parseInt(tx[1]) * 2;
    if (Number.parseInt(tx[2]) != 0) idx++;

    return idx;
};
