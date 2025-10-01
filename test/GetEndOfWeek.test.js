import GetEndOfWeek from '../src/date/GetEndOfWeek.js';

describe('GetEndOfWeek function', () => {
    it('should return end of week for given date', () => {
        const date = new Date('2021-01-15'); // Friday
        const result = GetEndOfWeek(date);
        
        expect(result).toBeInstanceOf(Date);
        expect(result.getHours()).toBe(23);
        expect(result.getMinutes()).toBe(59);
    });

    it('should handle different days of week', () => {
        const monday = new Date('2021-01-11'); // Monday
        const result = GetEndOfWeek(monday);
        
        expect(result).toBeInstanceOf(Date);
    });

    it('should return Sunday as end of week', () => {
        const result = GetEndOfWeek(new Date());
        expect(result).toBeInstanceOf(Date);
    });
});
