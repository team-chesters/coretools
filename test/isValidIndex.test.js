import isValidIndex from '../src/array/isValidIndex.js';

describe('isValidIndex function', () => {
    it('should return true for valid array indices', () => {
        expect(isValidIndex(0, ['a', 'b', 'c'])).toBe(true);
        expect(isValidIndex(1, ['a', 'b', 'c'])).toBe(true);
        expect(isValidIndex(2, ['a', 'b', 'c'])).toBe(true);
    });

    it('should return false for out-of-bounds indices', () => {
        expect(isValidIndex(-1, ['a', 'b', 'c'])).toBe(false);
        expect(isValidIndex(3, ['a', 'b', 'c'])).toBe(false);
        expect(isValidIndex(10, ['a', 'b', 'c'])).toBe(false);
    });

    it('should handle empty arrays', () => {
        expect(isValidIndex(0, [])).toBe(false);
        expect(isValidIndex(-1, [])).toBe(false);
    });

    it('should handle non-array inputs', () => {
        expect(isValidIndex(0, 'string')).toBe(false);
        expect(isValidIndex(0, {})).toBe(false);
        expect(isValidIndex(0, null)).toBe(false);
    });

    it('should handle non-integer indices', () => {
        expect(isValidIndex(1.5, ['a', 'b', 'c'])).toBe(false);
        expect(isValidIndex('1', ['a', 'b', 'c'])).toBe(false);
    });
});
