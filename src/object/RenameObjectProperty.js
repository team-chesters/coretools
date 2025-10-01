/**
 * Renames a property of an object.
 * @param {Object} obj - The object containing the property to be renamed.
 * @param {string} before - The current name of the property to be renamed.
 * @param {string} after - The new name for the property.
 */

export default function RenameObjectProperty(obj, before, after){
    if (obj.hasOwnProperty(before)) {
        obj[after] = obj[before];
        delete obj[before];
    }
};