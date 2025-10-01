import GetDayEnd from '../src/date/GetDayEnd.js';

describe('GetDayEnd function', () => {
    it('should return end of day for given date', () => {
        const date = new Date('2021-01-15');
        const result = GetDayEnd(date);
        
        expect(result).toBeInstanceOf(Date);
        expect(result.getHours()).toBe(23);
        expect(result.getMinutes()).toBe(59);
        expect(result.getSeconds()).toBe(59);
    });

    it('should preserve date information', () => {
        const date = new Date('2021-01-15');
        const result = GetDayEnd(date);
        
        expect(result.getFullYear()).toBe(2021);
        expect(result.getMonth()).toBe(0);
        expect(result.getDate()).toBe(15);
    });

    it('should handle current date', () => {
        const result = GetDayEnd(new Date());
        expect(result).toBeInstanceOf(Date);
        expect(result.getHours()).toBe(23);
    });
});
