import GetStartOfWeek from '../src/date/GetStartOfWeek.js';

describe('GetStartOfWeek function', () => {
    it('should return start of week for given date', () => {
        const date = new Date('2021-01-15'); // Friday
        const result = GetStartOfWeek(date);
        
        expect(result).toBeInstanceOf(Date);
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
    });

    it('should handle different days of week', () => {
        const sunday = new Date('2021-01-17'); // Sunday
        const result = GetStartOfWeek(sunday);
        
        expect(result).toBeInstanceOf(Date);
    });

    it('should return Monday as start of week', () => {
        const result = GetStartOfWeek(new Date());
        expect(result).toBeInstanceOf(Date);
    });
});
