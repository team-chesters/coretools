import GetDateFromMs from '../src/timestamp/GetDateFromMs.js';

describe('GetDateFromMs function', () => {
    it('should convert milliseconds timestamp to date', () => {
        const timestamp = 1609459200000; // 2021-01-01 00:00:00 UTC
        const result = GetDateFromMs(timestamp);
        
        expect(result).toBeInstanceOf(Date);
        expect(result.getFullYear()).toBe(2021);
        expect(result.getMonth()).toBe(0); // January
        expect(result.getDate()).toBe(1);
    });

    it('should return false for invalid timestamp', () => {
        const result = GetDateFromMs('invalid');
        expect(result).toBe(false);
    });

    it('should return false for empty timestamp', () => {
        const result = GetDateFromMs(null);
        expect(result).toBe(false);
    });

    it('should return original value for non-13-digit timestamp', () => {
        const result = GetDateFromMs(123456);
        expect(result).toBe(123456);
    });
});
