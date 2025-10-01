/**
 * Asynchronously sleeps for the specified number of milliseconds.
 * @param {number} ms - The number of milliseconds to sleep.
 * @returns {Promise} A Promise that resolves after the specified time.
 */

export default function Sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
