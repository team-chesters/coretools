import isEmpty from "./isEmpty";

/**
 * Returns the decimal point of a number (rounding to one decimal place).
 * 
 * @param {number} num - The number to extract the decimal point from.
 * @returns {number} Returns the decimal point rounded to one decimal place.
 */

export default function GetDecimalPoint (num) {
    if (isEmpty(num)) return 'Parameter is empty';

    let numArr = String(num).split(".");
    if (numArr.length === 1) {
        return Number.parseInt(num);
    } else {
        return Number.parseFloat(num.toFixed(1));
    }
};
