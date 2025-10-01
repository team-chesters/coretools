/**
 * Converts a time string to a slot number based on the provided duration.
 * @param {string} t - The time string in HH:MM format.
 * @param {number} duration - The duration of each slot in minutes.
 * @returns {number} The slot number for the given time and duration.
 */

export default function hhmm2slotNoByDuration(t, duration) {
    if (t == null) return -1;
    let tx = t.match(/(\d{2}):{0,1}(\d{2})/i);
    if (tx == null) return -1;

    let num_slot_in_hour = Number.parseInt(60 / duration);

    let idx = Number.parseInt(tx[1]) * num_slot_in_hour;
    idx += Number.parseInt(Number.parseInt(tx[2]) / duration);

    return idx;
};
