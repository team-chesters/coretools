import GetNextYearMonth from '../src/date/GetNextYearMonth.test.js';

describe('GetNextYearMonth function', () => {
    it('should return next year month', () => {
        const result = GetNextYearMonth();
        
        expect(result).toHaveProperty('year');
        expect(result).toHaveProperty('month');
        expect(typeof result.year).toBe('number');
        expect(typeof result.month).toBe('number');
    });

    it('should return future year/month', () => {
        const result = GetNextYearMonth();
        const now = new Date();
        
        if (result.month > now.getMonth() + 1) {
            expect(result.year).toBeGreaterThanOrEqual(now.getFullYear());
        }
    });

    it('should have valid month range', () => {
        const result = GetNextYearMonth();
        
        expect(result.month).toBeGreaterThanOrEqual(1);
        expect(result.month).toBeLessThanOrEqual(12);
    });
});
