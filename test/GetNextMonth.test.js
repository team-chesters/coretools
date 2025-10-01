import GetNextMonth from '../src/date/GetNextMonth.js';

describe('GetNextMonth function', () => {
    it('should return next month date', () => {
        const result = GetNextMonth();
        
        expect(result).toBeInstanceOf(Date);
    });

    it('should return future date', () => {
        const result = GetNextMonth();
        const now = new Date();
        
        expect(result.getTime()).toBeGreaterThan(now.getTime());
    });

    it('should have time set to start of day', () => {
        const result = GetNextMonth();
        
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
    });

    it('should be approximately one month ahead', () => {
        const result = GetNextMonth();
        const now = new Date();
        const diffDays = Math.floor((result.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        
        expect(diffDays).toBeGreaterThan(25);
        expect(diffDays).toBeLessThan(35);
    });
});
