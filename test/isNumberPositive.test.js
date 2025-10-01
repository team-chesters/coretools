import isNumberPositive from '../src/number/isNumberPositive.js';

describe('isNumberPositive function', () => {
    it('should return true for positive numbers', () => {
        expect(isNumberPositive(1)).toBe(true);
        expect(isNumberPositive(3.14)).toBe(true);
        expect(isNumberPositive(0.1)).toBe(true);
    });

    it('should return false for negative numbers', () => {
        expect(isNumberPositive(-1)).toBe(false);
        expect(isNumberPositive(-3.14)).toBe(false);
        expect(isNumberPositive(-0.1)).toBe(false);
    });

    it('should return false for zero', () => {
        expect(isNumberPositive(0)).toBe(false);
    });

    it('should return false for non-numbers', () => {
        expect(isNumberPositive('1')).toBe(false);
        expect(isNumberPositive('positive')).toBe(false);
        expect(isNumberPositive(null)).toBe(false);
        expect(isNumberPositive(undefined)).toBe(false);
        expect(isNumberPositive({})).toBe(false);
        expect(isNumberPositive([])).toBe(false);
    });

    it('should handle Infinity', () => {
        expect(isNumberPositive(Infinity)).toBe(true);
        expect(isNumberPositive(-Infinity)).toBe(false);
    });
});
