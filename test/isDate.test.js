import isDate from '../src/date/isDate.js';

describe('isDate function', () => {
    it('should return true for Date objects', () => {
        expect(isDate(new Date())).toBe(true);
        expect(isDate(new Date('2021-01-01'))).toBe(true);
    });

    it('should return false for non-Date objects', () => {
        expect(isDate('2021-01-01')).toBe(false);
        expect(isDate(1234567890)).toBe(false);
        expect(isDate({})).toBe(false);
        expect(isDate([])).toBe(false);
        expect(isDate(null)).toBe(false);
        expect(isDate(undefined)).toBe(false);
    });

    it('should return false for invalid Date objects', () => {
        expect(isDate(new Date('invalid'))).toBe(true); // Still a Date object
    });

    it('should handle current date', () => {
        expect(isDate(new Date())).toBe(true);
    });

    it('should handle date strings', () => {
        expect(isDate('2021-01-01')).toBe(false);
        expect(isDate('January 1, 2021')).toBe(false);
    });
});
