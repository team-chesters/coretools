import isSameDate from '../src/date/isSameDate.js';

describe('isSameDate function', () => {
    it('should return true for same dates', () => {
        const date1 = new Date('2021-01-15');
        const date2 = new Date('2021-01-15');
        expect(isSameDate(date1, date2)).toBe(true);
    });

    it('should return false for different dates', () => {
        const date1 = new Date('2021-01-15');
        const date2 = new Date('2021-01-16');
        expect(isSameDate(date1, date2)).toBe(false);
    });

    it('should ignore time differences', () => {
        const date1 = new Date('2021-01-15 10:30:00');
        const date2 = new Date('2021-01-15 15:45:00');
        expect(isSameDate(date1, date2)).toBe(true);
    });

    it('should handle null/undefined dates', () => {
        expect(isSameDate(null, new Date())).toBe(false);
        expect(isSameDate(new Date(), null)).toBe(false);
        expect(isSameDate(null, null)).toBe(false);
    });

    it('should handle different years', () => {
        const date1 = new Date('2021-01-15');
        const date2 = new Date('2022-01-15');
        expect(isSameDate(date1, date2)).toBe(false);
    });
});
