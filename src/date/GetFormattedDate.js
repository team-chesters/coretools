import isEmpty from "./isEmpty";
import ymdToDate from "./ymdToDate";

/**
 * Returns a formatted date string from a given 'yyyymmdd' format date string.
 * 
 * @param {string} yyyymmdd - The date string in 'yyyymmdd' format.
 * @returns {string} Returns the formatted date string.
 */

const getUserLocale = () => navigator.language || navigator.userLanguage;
const formatDate = (date, locale) => {
    return date.toLocaleDateString(locale,
    {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export default function GetFormattedDate(yyyymmdd) {
    if (isEmpty(yyyymmdd)) return yyyymmdd;
    
    const userLocale = getUserLocale();
    let t_date = ymdToDate(yyyymmdd);

    return formatDate(t_date, userLocale);
};
