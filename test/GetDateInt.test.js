import GetDateInt from '../src/date/GetDateInt.js';

describe('GetDateInt function', () => {
    it('should convert date to integer format', () => {
        const date = new Date('2021-01-15');
        const result = GetDateInt(date);
        
        expect(typeof result).toBe('number');
        expect(result).toBeGreaterThan(0);
    });

    it('should handle current date', () => {
        const result = GetDateInt(new Date());
        expect(typeof result).toBe('number');
    });

    it('should return consistent format', () => {
        const date1 = new Date('2021-01-15');
        const date2 = new Date('2021-01-15');
        const result1 = GetDateInt(date1);
        const result2 = GetDateInt(date2);
        
        expect(result1).toBe(result2);
    });
});
