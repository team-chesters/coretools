import GetPrevMonth from '../src/date/GetPrevMonth.js';

describe('GetPrevMonth function', () => {
    it('should return previous month date', () => {
        const result = GetPrevMonth();
        
        expect(result).toBeInstanceOf(Date);
    });

    it('should return past date', () => {
        const result = GetPrevMonth();
        const now = new Date();
        
        expect(result.getTime()).toBeLessThan(now.getTime());
    });

    it('should have time set to start of day', () => {
        const result = GetPrevMonth();
        
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
    });

    it('should be approximately one month behind', () => {
        const result = GetPrevMonth();
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - result.getTime()) / (1000 * 60 * 60 * 24));
        
        expect(diffDays).toBeGreaterThan(25);
        expect(diffDays).toBeLessThan(35);
    });
});
