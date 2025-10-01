import isEmpty from "./isEmpty";
import ConvertDecimalToHex from "./ConvertDecimalToHex";

/**
 * Generates a random string of specified length using cryptographic random values.
 * 
 * @param {number} [len=20] - The length of the random string (default: 20).
 * @returns {string} Returns the generated random string.
 */

export default function GenerateRandomBytes(len = 20) {
    let length = Math.max(Math.floor(len), 1);
    const byteLength = (length % 2 === 0) ? length / 2 : (length + 1) / 2;
    const defaultRandomBytes = new Uint8Array(byteLength);
    const redefinedRandomBytes = [];

    if (window.crypto && window.crypto.getRandomValues) {
        window.crypto.getRandomValues(defaultRandomBytes);
    } else {
        // Fallback for browsers not supporting crypto API
        return 'This browser does not support crypto API.';
    }

    let flagCounter = 0;
    for (const item of defaultRandomBytes) {
        if (isEmpty(item)) {
            flagCounter += 1;
        } else {
            redefinedRandomBytes.push(item);
        }
    }

    if (flagCounter !== 0) {
        const backupRandomBytes = new Uint8Array(flagCounter);
        for (let i = 0; i < flagCounter; i++) {
            window.crypto.getRandomValues(backupRandomBytes);
            if (!isEmpty(backupRandomBytes[i])) {
                redefinedRandomBytes.push(backupRandomBytes[i]);
            }
        }
    }

    return Array.from(redefinedRandomBytes, ConvertDecimalToHex).join("");
};
