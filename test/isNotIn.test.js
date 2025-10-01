import isNotIn from '../src/array/isNotIn.js';

describe('isNotIn function', () => {
    it('should return true when value is not in list', () => {
        expect(isNotIn('grape', 'apple', 'banana', 'orange')).toBe(true);
        expect(isNotIn(4, 1, 2, 3)).toBe(true);
    });

    it('should return false when value is in list', () => {
        expect(isNotIn('apple', 'apple', 'banana', 'orange')).toBe(false);
        expect(isNotIn(1, 1, 2, 3)).toBe(false);
    });

    it('should handle empty list', () => {
        expect(isNotIn('apple')).toBe(true);
    });

    it('should handle single value list', () => {
        expect(isNotIn('banana', 'apple')).toBe(true);
        expect(isNotIn('apple', 'apple')).toBe(false);
    });

    it('should handle mixed types', () => {
        expect(isNotIn(4, '1', 1, 2)).toBe(true);
        expect(isNotIn(1, '1', 2, 3)).toBe(true);
    });

    it('should use strict equality', () => {
        expect(isNotIn(1, '1', 2, 3)).toBe(true);
        expect(isNotIn('1', '1', '2', '3')).toBe(false);
    });
});
