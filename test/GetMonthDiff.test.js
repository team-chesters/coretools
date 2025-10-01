import GetMonthDiff from '../src/date/GetMonthDiff.js';

describe('GetMonthDiff function', () => {
    it('should calculate month difference between dates', () => {
        const date1 = new Date('2021-01-01');
        const date2 = new Date('2021-03-01');
        const result = GetMonthDiff(date1, date2);
        
        expect(typeof result).toBe('number');
        expect(result).toBe(2);
    });

    it('should handle same month', () => {
        const date1 = new Date('2021-01-01');
        const date2 = new Date('2021-01-15');
        const result = GetMonthDiff(date1, date2);
        
        expect(result).toBe(0);
    });

    it('should handle reverse order', () => {
        const date1 = new Date('2021-03-01');
        const date2 = new Date('2021-01-01');
        const result = GetMonthDiff(date1, date2);
        
        expect(typeof result).toBe('number');
    });

    it('should handle year boundaries', () => {
        const date1 = new Date('2020-12-01');
        const date2 = new Date('2021-02-01');
        const result = GetMonthDiff(date1, date2);
        
        expect(result).toBe(2);
    });
});
