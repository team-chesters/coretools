import hasKey from '../src/object/hasKey.js';

describe('hasKey function', () => {
    it('should return true for existing key', () => {
        const obj = { name: 'John', age: 30 };
        expect(hasKey(obj, 'name')).toBe(true);
        expect(hasKey(obj, 'age')).toBe(true);
    });

    it('should return false for non-existing key', () => {
        const obj = { name: 'John' };
        expect(hasKey(obj, 'age')).toBe(false);
        expect(hasKey(obj, 'email')).toBe(false);
    });

    it('should handle nested keys', () => {
        const obj = { user: { profile: { name: 'John' } } };
        expect(hasKey(obj, 'user', 'profile', 'name')).toBe(true);
        expect(hasKey(obj, 'user', 'profile')).toBe(true);
    });

    it('should return false for null/undefined objects', () => {
        expect(hasKey(null, 'key')).toBe(false);
        expect(hasKey(undefined, 'key')).toBe(false);
    });

    it('should return false for null values', () => {
        const obj = { name: null };
        expect(hasKey(obj, 'name')).toBe(false);
    });
});
