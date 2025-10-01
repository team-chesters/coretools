import GetDatesBetween from '../src/date/GetDatesBetween.js';

describe('GetDatesBetween function', () => {
    it('should return dates between two dates', () => {
        const start = new Date('2021-01-01');
        const end = new Date('2021-01-05');
        const result = GetDatesBetween(start, end);
        
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBeGreaterThan(0);
    });

    it('should handle same start and end date', () => {
        const date = new Date('2021-01-01');
        const result = GetDatesBetween(date, date);
        
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBeGreaterThanOrEqual(1);
    });

    it('should handle reverse date order', () => {
        const start = new Date('2021-01-05');
        const end = new Date('2021-01-01');
        const result = GetDatesBetween(start, end);
        
        expect(result).toBeInstanceOf(Array);
    });
});
