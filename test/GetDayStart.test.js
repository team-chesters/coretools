import GetDayStart from '../src/date/GetDayStart.js';

describe('GetDayStart function', () => {
    it('should return start of day for given date', () => {
        const date = new Date('2021-01-15');
        const result = GetDayStart(date);
        
        expect(result).toBeInstanceOf(Date);
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
    });

    it('should preserve date information', () => {
        const date = new Date('2021-01-15');
        const result = GetDayStart(date);
        
        expect(result.getFullYear()).toBe(2021);
        expect(result.getMonth()).toBe(0);
        expect(result.getDate()).toBe(15);
    });

    it('should handle current date', () => {
        const result = GetDayStart(new Date());
        expect(result).toBeInstanceOf(Date);
        expect(result.getHours()).toBe(0);
    });
});
