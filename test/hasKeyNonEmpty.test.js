import hasKeyNonEmpty from '../src/object/hasKeyNonEmpty.js';

describe('hasKeyNonEmpty function', () => {
    it('should return true when key has non-empty value', () => {
        const obj = { name: 'John', age: 30 };
        expect(hasKeyNonEmpty(obj, 'name')).toBe(true);
        expect(hasKeyNonEmpty(obj, 'age')).toBe(true);
    });

    it('should return false when key has empty value', () => {
        const obj = { name: '', age: 0, email: null };
        expect(hasKeyNonEmpty(obj, 'name')).toBe(false);
        expect(hasKeyNonEmpty(obj, 'age')).toBe(false);
        expect(hasKeyNonEmpty(obj, 'email')).toBe(false);
    });

    it('should return false when key does not exist', () => {
        const obj = { name: 'John' };
        expect(hasKeyNonEmpty(obj, 'age')).toBe(false);
    });

    it('should handle empty string', () => {
        const obj = { description: '' };
        expect(hasKeyNonEmpty(obj, 'description')).toBe(false);
    });

    it('should handle empty array', () => {
        const obj = { items: [] };
        expect(hasKeyNonEmpty(obj, 'items')).toBe(false);
    });
});
