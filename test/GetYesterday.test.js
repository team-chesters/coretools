import GetYesterday from '../src/date/GetYesterday.js';

describe('GetYesterday function', () => {
    it('should return yesterday date', () => {
        const result = GetYesterday();
        
        expect(result).toBeInstanceOf(Date);
    });

    it('should return past date', () => {
        const result = GetYesterday();
        const now = new Date();
        
        expect(result.getTime()).toBeLessThan(now.getTime());
    });

    it('should have time set to 00:00:00', () => {
        const result = GetYesterday();
        
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
        expect(result.getMilliseconds()).toBe(0);
    });

    it('should be one day before today', () => {
        const result = GetYesterday();
        const today = new Date();
        today.setDate(today.getDate() - 1);
        today.setHours(0, 0, 0, 0);
        
        expect(result.getTime()).toBe(today.getTime());
    });
});
