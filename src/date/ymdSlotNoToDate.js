import slotNo2hhmm from './slotNo2hhmm';

/**
 * Converts a date and slot number to a JavaScript Date object.
 * The input format for the date should be "YYYY-MM-DD", and the slot number should be an integer.
 * @param {string} yyyymmdd - The date string in "YYYY-MM-DD" format.
 * @param {number} slotno - The slot number.
 * @returns {Date} Returns a JavaScript Date object representing the converted date and time.
 */

export default function ymdSlotNoToDate(yyyymmdd, slotno) {
    yyyymmdd = yyyymmdd + "";

    let date;
    try {
        date = new Date(
            yyyymmdd.replace(/(\d{4})-{0,1}(\d{2})-{0,1}(\d{2})/g, "$1-$2-$3") +
                " " +
                slotNo2hhmm(slotno)
        );
    } catch (e) {
        date = new Date("1980-01-01 00:00");
    }

    return date;
};