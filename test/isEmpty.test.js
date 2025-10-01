import isEmpty from '../src/object/isEmpty.js';

describe('isEmpty function', () => {
    it('returns true for null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    it('returns true for undefined', () => {
        expect(isEmpty(undefined)).toBe(true);
    });

    it('returns true for an empty string', () => {
        expect(isEmpty("")).toBe(true);
    });

    it('returns true for a number 0', () => {
        expect(isEmpty(0)).toBe(true);
    });

    it('returns true for a boolean false', () => {
        expect(isEmpty(false)).toBe(true);
    });

    it('returns true for an empty array', () => {
        expect(isEmpty([])).toBe(true);
    });

    it('returns true if the property does not exist in the object', () => {
        expect(isEmpty({ a: 1 }, 'b')).toBe(true);
    });

    it('returns false for non-empty string, array, and objects', () => {
        expect(isEmpty("test")).toBe(false);
        expect(isEmpty([1, 2, 3])).toBe(false);
        expect(isEmpty({ a: 1 })).toBe(false);
    });
});
