import { _ONE_DAY_MS } from "./const";
import isEmpty from "./isEmpty";

/**
 * Calculates the difference in days between a given timestamp and the current date.
 * 
 * @param {number} ts - The timestamp (in seconds).
 * @returns {number} Returns the difference in days between the timestamp and the current date.
 */

export default function GetDayDiffNow(ts) {
    if (isEmpty(ts)) return 'Parameter is empty';

    let tsDate = new Date(ts * 1000);
    let tsDateBegin = new Date(
        tsDate.getFullYear(),
        tsDate.getMonth(),
        tsDate.getDate(),
        0,
        0,
        0,
        0
    );
    let now = new Date();
    let nowBegin = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0,
        0
    );

    return Number.parseInt(
        (tsDateBegin.getTime() - nowBegin.getTime()) / _ONE_DAY_MS
    );
};
