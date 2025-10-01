import isNotInArray from '../src/array/isNotInArray.js';

describe('isNotInArray function', () => {
    it('should return true when value is not in array', () => {
        expect(isNotInArray('grape', ['apple', 'banana', 'orange'])).toBe(true);
        expect(isNotInArray(4, [1, 2, 3])).toBe(true);
    });

    it('should return false when value is in array', () => {
        expect(isNotInArray('apple', ['apple', 'banana', 'orange'])).toBe(false);
        expect(isNotInArray(1, [1, 2, 3])).toBe(false);
    });

    it('should handle empty array', () => {
        expect(isNotInArray('apple', [])).toBe(true);
    });

    it('should handle non-array input', () => {
        expect(isNotInArray('apple', 'not an array')).toBe(true);
        expect(isNotInArray('apple', {})).toBe(true);
    });

    it('should use loose equality', () => {
        expect(isNotInArray(1, ['1', 2, 3])).toBe(false);
        expect(isNotInArray('1', [1, 2, 3])).toBe(false);
    });

    it('should handle nested arrays', () => {
        expect(isNotInArray(['nested'], [['nested'], 'other'])).toBe(true);
    });
});
