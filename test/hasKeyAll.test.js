import hasKeyAll from '../src/object/hasKeyAll.js';

describe('hasKeyAll function', () => {
    it('should return true when all keys exist', () => {
        const obj = { name: 'John', age: 30, email: 'john@example.com' };
        expect(hasKeyAll(obj, 'name', 'age', 'email')).toBe(true);
    });

    it('should return false when any key is missing', () => {
        const obj = { name: 'John', age: 30 };
        expect(hasKeyAll(obj, 'name', 'age', 'email')).toBe(false);
    });

    it('should return true for single existing key', () => {
        const obj = { name: 'John' };
        expect(hasKeyAll(obj, 'name')).toBe(true);
    });

    it('should return false for empty object', () => {
        const obj = {};
        expect(hasKeyAll(obj, 'name')).toBe(false);
    });

    it('should handle null values', () => {
        const obj = { name: null, age: 30 };
        expect(hasKeyAll(obj, 'name', 'age')).toBe(false);
    });
});
