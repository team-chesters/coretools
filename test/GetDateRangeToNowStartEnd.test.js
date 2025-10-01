import GetDateRangeToNowStartEnd from '../src/date/GetDateRangeToNowStartEnd.js';

describe('GetDateRangeToNowStartEnd function', () => {
    it('should return start and end dates', () => {
        const startDate = new Date('2021-01-01');
        const result = GetDateRangeToNowStartEnd(startDate);
        
        expect(result).toHaveProperty('start');
        expect(result).toHaveProperty('end');
        expect(result.start).toBeInstanceOf(Date);
        expect(result.end).toBeInstanceOf(Date);
    });

    it('should handle recent start date', () => {
        const recentDate = new Date();
        recentDate.setDate(recentDate.getDate() - 7);
        
        const result = GetDateRangeToNowStartEnd(recentDate);
        expect(result.start.getTime()).toBeLessThanOrEqual(result.end.getTime());
    });

    it('should handle same day start and end', () => {
        const today = new Date();
        const result = GetDateRangeToNowStartEnd(today);
        
        expect(result.start.getTime()).toBeLessThanOrEqual(result.end.getTime());
    });
});
