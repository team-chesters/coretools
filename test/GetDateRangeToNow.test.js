import GetDateRangeToNow from '../src/date/GetDateRangeToNow.js';

describe('GetDateRangeToNow function', () => {
    it('should return date range to now', () => {
        const startDate = new Date('2021-01-01');
        const result = GetDateRangeToNow(startDate);
        
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBeGreaterThan(0);
    });

    it('should handle recent start date', () => {
        const recentDate = new Date();
        recentDate.setDate(recentDate.getDate() - 7);
        
        const result = GetDateRangeToNow(recentDate);
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBeLessThanOrEqual(8);
    });

    it('should return single date for same day', () => {
        const today = new Date();
        const result = GetDateRangeToNow(today);
        
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBeGreaterThanOrEqual(1);
    });
});
