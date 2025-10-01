/**
 * Merges two JSON objects into a new object.
 * @param {Object} obj1 - The first JSON object.
 * @param {Object} obj2 - The second JSON object.
 * @returns {Object} Returns a new object that is a merge of obj1 and obj2.
 */

export default function MergeJson(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
};
