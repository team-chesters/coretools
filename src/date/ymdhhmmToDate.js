import ymdToDate from "./ymdToDate";
import Len from "./Len";

/**
 * Converts a date and time string to a JavaScript Date object.
 * The input format should be either "YYYY-MM-DD HH:MM" or "YYYY-MM-DD".
 * @param {string} dstr - The date and time string in "YYYY-MM-DD HH:MM" or "YYYY-MM-DD" format.
 * @returns {Date} Returns a JavaScript Date object representing the converted date and time.
 */

export default function ymdhhmmToDate(dstr) {
    dstr = dstr + "";
    let ddp = dstr.split(" ");
    if (Len(ddp) >= 2) {
        return ymdToDate(ddp[0], ddp[1]);
    } else {
        return ymdToDate(ddp[0]);
    }
};