import { getTime } from 'date-fns';
import isDateRangeSet from './isDateRangeSet';

/**
 * Checks if two date ranges are the same.
 * @param {Object} range1 - The first date range to compare.
 * @param {Object} range2 - The second date range to compare.
 * @returns {boolean} Returns true if both date ranges are the same, false otherwise.
 */

export default function isSameDateRange(range1, range2) {
    if (isDateRangeSet(range1) && isDateRangeSet(range2)) {
        return range1.start.getTime() == range2.start.getTime() && range1.end.getTime() == range2.end.getTime();
    }
    return false;
};
