import isZero from '../src/number/isZero.js';

describe('isZero function', () => {
    it('should return true for zero', () => {
        expect(isZero(0)).toBe(true);
    });

    it('should return false for non-zero numbers', () => {
        expect(isZero(1)).toBe(false);
        expect(isZero(-1)).toBe(false);
        expect(isZero(0.1)).toBe(false);
        expect(isZero(-0.1)).toBe(false);
    });

    it('should return false for non-numbers', () => {
        expect(isZero('0')).toBe(false);
        expect(isZero('zero')).toBe(false);
        expect(isZero(null)).toBe(false);
        expect(isZero(undefined)).toBe(false);
        expect(isZero({})).toBe(false);
        expect(isZero([])).toBe(false);
    });

    it('should handle very small numbers', () => {
        expect(isZero(0.0000001)).toBe(false);
        expect(isZero(-0.0000001)).toBe(false);
    });

    it('should handle Infinity', () => {
        expect(isZero(Infinity)).toBe(false);
        expect(isZero(-Infinity)).toBe(false);
    });
});
