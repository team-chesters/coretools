import isNumber from '../src/number/isNumber.js';

describe('isNumber function', () => {
    it('should return true for valid numbers', () => {
        expect(isNumber(42)).toBe(true); // 42 is a valid number
        expect(isNumber(0)).toBe(true); // 0 is a valid number
        expect(isNumber(-3.14)).toBe(true); // -3.14 is a valid number
        expect(isNumber('123')).toBe(true); // '123' can be converted to a valid number
    });

    it('should return false for invalid values', () => {
        expect(isNumber('')).toBe(false); // Empty string is not a valid number
        expect(isNumber('abc')).toBe(false); // 'abc' cannot be converted to a valid number
        expect(isNumber(null)).toBe(false); // null is not a valid number
        expect(isNumber(undefined)).toBe(false); // undefined is not a valid number
        expect(isNumber(true)).toBe(false); // true is not a valid number
        expect(isNumber(false)).toBe(false); // false is not a valid number
        expect(isNumber({})).toBe(false); // Empty object is not a valid number
    });
});
