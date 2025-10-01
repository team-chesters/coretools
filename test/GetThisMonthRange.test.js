import GetThisMonthRange from '../src/date/GetThisMonthRange.js';

describe('GetThisMonthRange function', () => {
    it('should return this month range', () => {
        const result = GetThisMonthRange();
        
        expect(result).toHaveProperty('start');
        expect(result).toHaveProperty('end');
        expect(result.start).toBeInstanceOf(Date);
        expect(result.end).toBeInstanceOf(Date);
    });

    it('should return valid date range', () => {
        const result = GetThisMonthRange();
        
        expect(result.start.getTime()).toBeLessThanOrEqual(result.end.getTime());
    });

    it('should be within current month', () => {
        const result = GetThisMonthRange();
        const now = new Date();
        
        expect(result.start.getMonth()).toBe(now.getMonth());
        expect(result.end.getMonth()).toBe(now.getMonth());
        expect(result.start.getFullYear()).toBe(now.getFullYear());
        expect(result.end.getFullYear()).toBe(now.getFullYear());
    });
});
