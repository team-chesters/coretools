import isApproxEqual from '../src/number/isApproxEqual.js';

describe('isApproxEqual function', () => {
    it('should return true for exactly equal numbers', () => {
        expect(isApproxEqual(1, 1)).toBe(true);
        expect(isApproxEqual(3.14, 3.14)).toBe(true);
    });

    it('should return true for approximately equal numbers', () => {
        expect(isApproxEqual(0.1 + 0.2, 0.3)).toBe(true);
        expect(isApproxEqual(1.0000001, 1.0000002)).toBe(false);
    });

    it('should return false for significantly different numbers', () => {
        expect(isApproxEqual(1, 2)).toBe(false);
        expect(isApproxEqual(3.14, 3.15)).toBe(false);
    });

    it('should handle zero', () => {
        expect(isApproxEqual(0, 0)).toBe(true);
        expect(isApproxEqual(0, 0.000001)).toBe(false);
    });

    it('should handle negative numbers', () => {
        expect(isApproxEqual(-1, -1)).toBe(true);
        expect(isApproxEqual(-1, -2)).toBe(false);
    });

    it('should handle floating point precision issues', () => {
        expect(isApproxEqual(0.1 + 0.2, 0.3)).toBe(true);
    });
});
