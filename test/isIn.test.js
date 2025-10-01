import isIn from '../src/array/isIn.js';

describe('isIn function', () => {
    it('should return true when value is in list', () => {
        expect(isIn('apple', 'apple', 'banana', 'orange')).toBe(true);
        expect(isIn(1, 1, 2, 3)).toBe(true);
    });

    it('should return false when value is not in list', () => {
        expect(isIn('grape', 'apple', 'banana', 'orange')).toBe(false);
        expect(isIn(4, 1, 2, 3)).toBe(false);
    });

    it('should handle empty list', () => {
        expect(isIn('apple')).toBe(false);
    });

    it('should handle single value list', () => {
        expect(isIn('apple', 'apple')).toBe(true);
        expect(isIn('banana', 'apple')).toBe(false);
    });

    it('should handle mixed types', () => {
        expect(isIn(1, '1', 1, 2)).toBe(true);
        expect(isIn('1', 1, 2, 3)).toBe(false);
    });

    it('should use strict equality', () => {
        expect(isIn(1, '1', 2, 3)).toBe(false);
        expect(isIn('1', '1', '2', '3')).toBe(true);
    });
});
