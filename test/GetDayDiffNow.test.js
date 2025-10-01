import GetDayDiffNow from '../src/date/GetDayDiffNow.js';

describe('GetDayDiffNow function', () => {
    it('should calculate day difference from now', () => {
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 7);
        
        const result = GetDayDiffNow(pastDate);
        expect(typeof result).toBe('number');
        expect(result).toBeGreaterThanOrEqual(0);
    });

    it('should handle today date', () => {
        const today = new Date();
        const result = GetDayDiffNow(today);
        
        expect(typeof result).toBe('number');
        expect(result).toBe(0);
    });

    it('should handle future date', () => {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 7);
        
        const result = GetDayDiffNow(futureDate);
        expect(typeof result).toBe('number');
    });
});
