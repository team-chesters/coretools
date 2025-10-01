import isNumber from "./isNumber";
import isNumberNegative from "./isNumberNegative";

/**
 * Converts a time slot number to a string in "hh:mm" format.
 * @param {number} slotNo - The time slot number to convert.
 * @returns {string|null} Returns the time in "hh:mm" format. if slotNo is empty or invalid, return null.
 */

export default function slotNo2hhmm(slotNo) {
    if (!isNumber(slotNo)) return null;
    if (isNumberNegative(slotNo)) return null;
    if (slotNo === null || slotNo === undefined || String(slotNo).length === 0) return null

    let hh = Number.parseInt(slotNo / 2);
    let mm = slotNo % 2 == 0 ? 0 : 30;
    return (hh > 9 ? hh : "0" + hh) + ":" + (mm > 9 ? mm : "0" + mm);
};
