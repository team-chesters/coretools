/**
 * Converts a date string in "YYYY-MM-DD" format with optional time to a JavaScript Date object.
 * @param {string} yyyymmdd - The date string in "YYYY-MM-DD" format.
 * @param {string} hhmm - Optional. The time string in "HH:MM" format. Default is "00:00".
 * @param {string} ss - Optional. The seconds string in "SS" format. Default is "00".
 * @returns {Date} Returns a JavaScript Date object representing the converted date and time.
 */

export default function ymdToDate(yyyymmdd, hhmm = "00:00", ss = "00") {
    yyyymmdd = yyyymmdd + "";
    hhmm = hhmm + "";

    let date;
    try {
        date = new Date(
            yyyymmdd.replace(/(\d{4})-{0,1}(\d{2})-{0,1}(\d{2})/g, "$1-$2-$3") +
            " " +
            hhmm.replace(/(\d{2}):{0,1}(\d{2})/g, "$1:$2") +
            ":" + ss
        );
    } catch (e) {
        date = new Date("1980-01-01 00:00:00");
    }

    return date;
};
