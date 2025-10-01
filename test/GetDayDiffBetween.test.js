import GetDayDiffBetween from '../src/date/GetDayDiffBetween.js';

describe('GetDayDiffBetween function', () => {
    it('should calculate day difference between dates', () => {
        const date1 = new Date('2021-01-01');
        const date2 = new Date('2021-01-10');
        const result = GetDayDiffBetween(date1, date2);
        
        expect(typeof result).toBe('number');
        expect(result).toBeGreaterThan(0);
    });

    it('should handle same dates', () => {
        const date = new Date('2021-01-01');
        const result = GetDayDiffBetween(date, date);
        
        expect(result).toBe(0);
    });

    it('should handle reverse date order', () => {
        const date1 = new Date('2021-01-10');
        const date2 = new Date('2021-01-01');
        const result = GetDayDiffBetween(date1, date2);
        
        expect(typeof result).toBe('number');
    });
});
