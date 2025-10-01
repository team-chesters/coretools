import GetMonthRange from '../src/date/GetMonthRange.js';

describe('GetMonthRange function', () => {
    it('should return month range', () => {
        const result = GetMonthRange();
        
        expect(result).toHaveProperty('start');
        expect(result).toHaveProperty('end');
        expect(result.start).toBeInstanceOf(Date);
        expect(result.end).toBeInstanceOf(Date);
    });

    it('should return valid date range', () => {
        const result = GetMonthRange();
        
        expect(result.start.getTime()).toBeLessThanOrEqual(result.end.getTime());
    });

    it('should handle current month', () => {
        const result = GetMonthRange();
        const now = new Date();
        
        expect(result.start.getMonth()).toBe(now.getMonth());
        expect(result.end.getMonth()).toBe(now.getMonth());
    });
});
