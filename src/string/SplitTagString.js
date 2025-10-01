import isEmpty from "./isEmpty";

/**
 * Splits a string containing tags into an array of tag strings.
 * @param {string} tagStr - The input string containing tags.
 * @returns {Array} Returns an array of tag strings.
 */

export default function SplitTagString(tagStr) {
    if (isEmpty(tagStr)) return [];
        
    let tags = tagStr.split("#").slice(1);
    for (let i in tags) {
        tags[i] = tags[i].trim();
    }
    return tags;
};
