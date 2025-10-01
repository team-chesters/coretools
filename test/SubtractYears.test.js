import SubtractYears from '../src/date/SubtractYears.js';

describe('SubtractYears function', () => {
    it('should subtract years from date', () => {
        const date = new Date('2021-03-15');
        const result = SubtractYears(date, 1);
        
        expect(result.getFullYear()).toBe(2020);
        expect(result.getMonth()).toBe(2); // March (0-indexed)
        expect(result.getDate()).toBe(15);
    });

    it('should handle multiple years', () => {
        const date = new Date('2021-03-15');
        const result = SubtractYears(date, 5);
        
        expect(result.getFullYear()).toBe(2016);
    });

    it('should handle leap year edge case', () => {
        const date = new Date('2020-02-29'); // Leap year
        const result = SubtractYears(date, 1);
        
        expect(result.getFullYear()).toBe(2019);
        expect(result.getMonth()).toBe(1); // February (0-indexed)
        expect(result.getDate()).toBe(28); // Not a leap year
    });

    it('should preserve month and day when possible', () => {
        const date = new Date('2021-06-15');
        const result = SubtractYears(date, 2);
        
        expect(result.getMonth()).toBe(5); // June (0-indexed)
        expect(result.getDate()).toBe(15);
    });

    it('should handle zero years', () => {
        const date = new Date('2021-03-15');
        const result = SubtractYears(date, 0);
        
        expect(result.getTime()).toBe(date.getTime());
    });
});
