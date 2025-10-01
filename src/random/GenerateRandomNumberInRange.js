/**
 * Generates a random integer between the specified minimum (inclusive) and maximum (exclusive) values.
 * 
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (exclusive).
 * @returns {number} Returns the generated random integer.
 */


export default function GenerateRandomNumberInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
