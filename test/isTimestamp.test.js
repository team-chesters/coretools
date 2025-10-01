import isTimestamp from '../src/timestamp/isTimestamp.js';

describe('isTimestamp function', () => {
    it('should return true for valid Unix timestamps', () => {
        expect(isTimestamp(1609459200)).toBe(true); // 2021-01-01 00:00:00 UTC
        expect(isTimestamp(0)).toBe(true); // 1970-01-01 00:00:00 UTC
    });

    it('should return false for invalid timestamps', () => {
        expect(isTimestamp('1609459200')).toBe(false); // String
        expect(isTimestamp(null)).toBe(false); // Null
        expect(isTimestamp(undefined)).toBe(false); // Undefined
        expect(isTimestamp({})).toBe(false); // Object
    });

    it('should return false for negative numbers', () => {
        expect(isTimestamp(-1)).toBe(false);
        expect(isTimestamp(-1609459200)).toBe(false);
    });

    it('should return false for very large numbers', () => {
        expect(isTimestamp(99999999999)).toBe(false);
    });

    it('should return true for current timestamp', () => {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        expect(isTimestamp(currentTimestamp)).toBe(true);
    });
});
