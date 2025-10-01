import { _MS_PER_DAY } from "./const";

/**
 * Returns the date object representing tomorrow's date based on the provided date or the current date.
 * @param {Date} t_date - The reference date. Defaults to the current date if not provided.
 * @returns {Date} The date object representing tomorrow's date.
 */

export default function GetTomorrow (t_date = new Date()) {
    const paramDayTimeInMs = t_date.getTime();
    const nextDayTimeInMs = paramDayTimeInMs + _MS_PER_DAY;

    return new Date(nextDayTimeInMs);
};
