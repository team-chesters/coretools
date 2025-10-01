/**
 * Merges a list of tags into a single tag string with space-separated format.
 * @param {Array} tagList - An array of tags to merge.
 * @returns {string} Returns a space-separated string containing merged tags.
 */

export default function MergeTagString (tagList) {
    let tags = tagList.map((el) => "#" + el.trim());

    return tags.join(" ");
};
