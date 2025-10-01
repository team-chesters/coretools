import GetUnix from '../src/timestamp/GetUnix.js';

describe('GetUnix function', () => {
    it('should return Unix timestamp for current time', () => {
        const result = GetUnix();
        const expected = Math.floor(Date.now() / 1000);
        
        expect(typeof result).toBe('number');
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(expected);
    });

    it('should return Unix timestamp for given date', () => {
        const date = new Date('2021-01-01 00:00:00 UTC');
        const result = GetUnix(date);
        const expected = Math.floor(date.getTime() / 1000);
        
        expect(result).toBe(expected);
    });

    it('should handle different timezones', () => {
        const date = new Date('2021-01-01 12:00:00');
        const result = GetUnix(date);
        
        expect(typeof result).toBe('number');
        expect(result).toBeGreaterThan(0);
    });

    it('should return integer value', () => {
        const result = GetUnix();
        
        expect(Number.isInteger(result)).toBe(true);
    });

    it('should be approximately current time', () => {
        const result = GetUnix();
        const now = Math.floor(Date.now() / 1000);
        
        expect(result).toBeLessThanOrEqual(now);
        expect(now - result).toBeLessThan(5); // Within 5 seconds
    });
});
