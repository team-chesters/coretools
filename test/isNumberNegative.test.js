import isNumberNegative from '../src/number/isNumberNegative.js';

describe('isNumberNegative function', () => {
    it('should return true for a negative number', () => {
        const number = -5;

        const result = isNumberNegative(number);

        expect(result).toBe(true);
    });

    it('should return false for a positive number', () => {
        const number = 10;

        const result = isNumberNegative(number);

        expect(result).toBe(false);
    });

    it('should return null for zero', () => {
        const number = 0;

        const result = isNumberNegative(number);

        expect(result).toBe(null);
    });

    it('should return null for an empty input', () => {
        const number = null;

        const result = isNumberNegative(number);

        expect(result).toBeNull();
    });

    it('should return null for a non-number input', () => {
        const nonNumber = 'not a number';

        const result = isNumberNegative(nonNumber);

        expect(result).toBeNull();
    });
});
