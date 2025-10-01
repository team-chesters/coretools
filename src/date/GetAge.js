import ymdToDate from "./ymdToDate";

/**
 * Calculates the age based on the provided date of birth in the format yyyyMMdd.
 * 
 * @param {string | number} yyyyMMdd - The date of birth in the format yyyyMMdd.
 * @returns {number} Returns the calculated age.
 */

export default function GetAge(yyyyMMdd) {
    if (yyyyMMdd == null || yyyyMMdd == undefined)
        return 0;

    yyyyMMdd = "" + yyyyMMdd;

    if (yyyyMMdd.length != 6 && yyyyMMdd.length != 8) return 0;

    if (yyyyMMdd.length == 6) {
        // yymmdd

        let smallYear = parseInt(yyyyMMdd.substring(0,2), 10);
        let todayYear = new Date().getFullYear() % 100;
        if (smallYear > todayYear) {
            yyyyMMdd = "19" + yyyyMMdd;
        } else {
            yyyyMMdd = "20" + yyyyMMdd;
        }
    }

    const today = new Date();
    const birthDate = ymdToDate(yyyyMMdd, "12:00");

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age > 150) {
        age = 0;
    }

    return Number.isNaN(age) ? 0 : age;
};
