import GetFormattedDate from '../src/date/GetFormattedDate.js';

describe('GetFormattedDate function', () => {
    it('should return formatted date string', () => {
        const date = new Date('2021-01-15');
        const result = GetFormattedDate(date);
        
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
    });

    it('should handle current date', () => {
        const result = GetFormattedDate(new Date());
        expect(typeof result).toBe('string');
    });

    it('should return consistent format', () => {
        const date1 = new Date('2021-01-15');
        const date2 = new Date('2021-01-15');
        const result1 = GetFormattedDate(date1);
        const result2 = GetFormattedDate(date2);
        
        expect(result1).toBe(result2);
    });

    it('should handle different dates', () => {
        const date1 = new Date('2021-01-15');
        const date2 = new Date('2021-01-16');
        const result1 = GetFormattedDate(date1);
        const result2 = GetFormattedDate(date2);
        
        expect(result1).not.toBe(result2);
    });
});
