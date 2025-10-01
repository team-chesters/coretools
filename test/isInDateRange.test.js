import isInDateRange from '../src/date/isInDateRange.js';

describe('isInDateRange function', () => {
    it('should return true when date is within range', () => {
        const start = new Date('2021-01-01');
        const end = new Date('2021-01-31');
        const testDate = new Date('2021-01-15');
        
        expect(isInDateRange(testDate, start, end)).toBe(true);
    });

    it('should return false when date is outside range', () => {
        const start = new Date('2021-01-01');
        const end = new Date('2021-01-31');
        const testDate = new Date('2021-02-15');
        
        expect(isInDateRange(testDate, start, end)).toBe(false);
    });

    it('should return true when date equals start or end', () => {
        const start = new Date('2021-01-01');
        const end = new Date('2021-01-31');
        
        expect(isInDateRange(start, start, end)).toBe(true);
        expect(isInDateRange(end, start, end)).toBe(true);
    });

    it('should handle same start and end dates', () => {
        const date = new Date('2021-01-01');
        expect(isInDateRange(date, date, date)).toBe(true);
    });

    it('should return false for null/undefined dates', () => {
        expect(isInDateRange(null, new Date(), new Date())).toBe(false);
        expect(isInDateRange(new Date(), null, new Date())).toBe(false);
        expect(isInDateRange(new Date(), new Date(), null)).toBe(false);
    });
});
