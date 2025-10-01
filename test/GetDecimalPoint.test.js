import GetDecimalPoint from '../src/number/GetDecimalPoint.js';

describe('GetDecimalPoint function', () => {
    it('should return decimal places for numbers', () => {
        expect(GetDecimalPoint(3.14)).toBe(2);
        expect(GetDecimalPoint(3.14159)).toBe(5);
    });

    it('should return 0 for integers', () => {
        expect(GetDecimalPoint(5)).toBe(0);
        expect(GetDecimalPoint(100)).toBe(0);
    });

    it('should handle zero', () => {
        expect(GetDecimalPoint(0)).toBe(0);
    });

    it('should handle negative numbers', () => {
        expect(GetDecimalPoint(-3.14)).toBe(2);
    });

    it('should handle very small numbers', () => {
        expect(GetDecimalPoint(0.001)).toBe(3);
    });
});
