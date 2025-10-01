import GetDayAgo from '../src/date/GetDayAgo.js';

describe('GetDayAgo function', () => {
    it('should return date from specified days ago', () => {
        const result = GetDayAgo(7);
        
        expect(result).toBeInstanceOf(Date);
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
    });

    it('should handle zero days ago', () => {
        const result = GetDayAgo(0);
        expect(result).toBeInstanceOf(Date);
    });

    it('should handle single day ago', () => {
        const result = GetDayAgo(1);
        expect(result).toBeInstanceOf(Date);
    });

    it('should return past date', () => {
        const result = GetDayAgo(10);
        const now = new Date();
        
        expect(result.getTime()).toBeLessThan(now.getTime());
    });
});
