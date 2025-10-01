import GetDateFromTs from '../src/timestamp/GetDateFromTs.js';

describe('GetDateFromTs function', () => {
    it('should convert Unix timestamp to date', () => {
        const timestamp = 1609459200; // 2021-01-01 00:00:00 UTC
        const result = GetDateFromTs(timestamp);
        
        expect(result).toBeInstanceOf(Date);
        expect(result.getFullYear()).toBe(2021);
        expect(result.getMonth()).toBe(0); // January
        expect(result.getDate()).toBe(1);
    });

    it('should return false for invalid timestamp', () => {
        const result = GetDateFromTs('invalid');
        expect(result).toBe(false);
    });

    it('should return false for empty timestamp', () => {
        const result = GetDateFromTs(null);
        expect(result).toBe(false);
    });

    it('should return original value for non-10-digit timestamp', () => {
        const result = GetDateFromTs(123456);
        expect(result).toBe(123456);
    });
});
