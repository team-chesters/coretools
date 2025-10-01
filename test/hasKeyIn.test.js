import hasKeyIn from '../src/object/hasKeyIn.js';

describe('hasKeyIn function', () => {
    it('should return true when key value is in list', () => {
        const obj = { status: 'active' };
        expect(hasKeyIn(obj, 'status', 'active', 'pending')).toBe(true);
    });

    it('should return false when key value is not in list', () => {
        const obj = { status: 'inactive' };
        expect(hasKeyIn(obj, 'status', 'active', 'pending')).toBe(false);
    });

    it('should return false when key does not exist', () => {
        const obj = { name: 'John' };
        expect(hasKeyIn(obj, 'status', 'active')).toBe(false);
    });

    it('should handle multiple values in list', () => {
        const obj = { type: 'premium' };
        expect(hasKeyIn(obj, 'type', 'basic', 'premium', 'enterprise')).toBe(true);
    });

    it('should handle empty value list', () => {
        const obj = { status: 'active' };
        expect(hasKeyIn(obj, 'status')).toBe(false);
    });
});
