import GetLastSunday from '../src/date/GetLastSunday.js';

describe('GetLastSunday function', () => {
    it('should return last Sunday date', () => {
        const result = GetLastSunday();
        
        expect(result).toBeInstanceOf(Date);
        expect(result.getDay()).toBe(0); // Sunday
    });

    it('should return past Sunday', () => {
        const result = GetLastSunday();
        const now = new Date();
        
        expect(result.getTime()).toBeLessThanOrEqual(now.getTime());
    });

    it('should have time set to start of day', () => {
        const result = GetLastSunday();
        
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
    });
});
