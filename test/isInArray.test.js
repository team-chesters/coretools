import isInArray from '../src/array/isInArray.js';

describe('isInArray function', () => {
    it('should return true when value is in array', () => {
        expect(isInArray('apple', ['apple', 'banana', 'orange'])).toBe(true);
        expect(isInArray(1, [1, 2, 3])).toBe(true);
    });

    it('should return false when value is not in array', () => {
        expect(isInArray('grape', ['apple', 'banana', 'orange'])).toBe(false);
        expect(isInArray(4, [1, 2, 3])).toBe(false);
    });

    it('should handle empty array', () => {
        expect(isInArray('apple', [])).toBe(false);
    });

    it('should handle non-array input', () => {
        expect(isInArray('apple', 'not an array')).toBe(false);
        expect(isInArray('apple', {})).toBe(false);
    });

    it('should use loose equality', () => {
        expect(isInArray(1, ['1', 2, 3])).toBe(true);
        expect(isInArray('1', [1, 2, 3])).toBe(true);
    });

    it('should handle nested arrays', () => {
        expect(isInArray(['nested'], [['nested'], 'other'])).toBe(false);
    });
});
