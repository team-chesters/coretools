import isEmpty from "./isEmpty";

/**
 * Generates an array of dates between the given start and end dates (inclusive).
 * 
 * @param {Date | string} s - The start date.
 * @param {Date | string} e - The end date.
 * @returns {Array<Date>} Returns an array containing dates between the start and end dates (inclusive).
 */

export default function GetDatesBetween(s, e) {
    if (isEmpty(s) && isEmpty(e)) return 'All parameters are empty';
    if (isEmpty(s) || isEmpty(e)) return 'Some of range parameter are empty';

    let ret = [];
    let ss = new Date(s);
    ss.setHours(0, 0, 0, 0);
    let ee = new Date(e);
    ee.setHours(23, 59, 59, 0);
    for (let d = ss; d <= ee; d.setDate(d.getDate() + 1)) {
        ret.push(new Date(d));
    }

    return ret;
};
