/**
 * Returns the file extension from a given file name.
 * 
 * @param {string} file_name - The name of the file from which to extract the extension.
 * @returns {string} Returns the file extension.
 */

export default function GetFileExtension(file_name) {
    file_name += "";
    return file_name.slice(
        (Math.max(0, file_name.lastIndexOf(".")) || Infinity) + 1
    );
};
