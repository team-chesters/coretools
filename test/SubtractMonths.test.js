import SubtractMonths from '../src/date/SubtractMonths.js';

describe('SubtractMonths function', () => {
    it('should subtract months from date', () => {
        const date = new Date('2021-03-15');
        const result = SubtractMonths(date, 1);
        
        expect(result.getMonth()).toBe(1); // February (0-indexed)
        expect(result.getFullYear()).toBe(2021);
    });

    it('should handle year boundaries', () => {
        const date = new Date('2021-01-15');
        const result = SubtractMonths(date, 1);
        
        expect(result.getMonth()).toBe(11); // December (0-indexed)
        expect(result.getFullYear()).toBe(2020);
    });

    it('should handle multiple months', () => {
        const date = new Date('2021-06-15');
        const result = SubtractMonths(date, 6);
        
        expect(result.getMonth()).toBe(0); // January (0-indexed)
        expect(result.getFullYear()).toBe(2021);
    });

    it('should preserve day when possible', () => {
        const date = new Date('2021-03-15');
        const result = SubtractMonths(date, 1);
        
        expect(result.getDate()).toBe(15);
    });

    it('should handle end-of-month edge cases', () => {
        const date = new Date('2021-03-31');
        const result = SubtractMonths(date, 1);
        
        expect(result.getMonth()).toBe(1); // February
    });
});
