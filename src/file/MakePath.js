import isEmpty from "./isEmpty";

/**
 * Constructs a path by joining an array of path segments with a specified separator.
 * @param {Array} parts - An array of path segments to join.
 * @param {string} sep - Optional. The separator to use for joining. Default is '/'.
 * @returns {string} Returns the constructed path.
 */

export default function MakePath(parts, sep = "/") {
    const separator = sep || "/";
    parts = parts.map((part, index) => {
        if (typeof part === 'string') {
            if (index) {
                part = part.replace(new RegExp("^" + separator), "");
            }
            if (index !== parts.length - 1) {
                part = part.replace(new RegExp(separator + "$"), "");
            }
        }
        return part;
    });
    return parts.join(separator);
};
