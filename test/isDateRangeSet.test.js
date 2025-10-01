import isDateRangeSet from '../src/date/isDateRangeSet.js';

describe('isDateRangeSet function', () => {
    it('should return true for valid date range', () => {
        const start = new Date('2021-01-01');
        const end = new Date('2021-01-31');
        expect(isDateRangeSet(start, end)).toBe(true);
    });

    it('should return false for invalid date range', () => {
        const start = new Date('2021-01-31');
        const end = new Date('2021-01-01');
        expect(isDateRangeSet(start, end)).toBe(false);
    });

    it('should handle same start and end dates', () => {
        const date = new Date('2021-01-01');
        expect(isDateRangeSet(date, date)).toBe(true);
    });

    it('should return false for null/undefined dates', () => {
        expect(isDateRangeSet(null, new Date())).toBe(false);
        expect(isDateRangeSet(new Date(), null)).toBe(false);
        expect(isDateRangeSet(null, null)).toBe(false);
    });

    it('should handle current date range', () => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        expect(isDateRangeSet(today, tomorrow)).toBe(true);
    });
});
