import hasKeyButNotIn from '../src/object/hasKeyButNotIn.js';

describe('hasKeyButNotIn function', () => {
    it('should return true when key exists but value is not in list', () => {
        const obj = { status: 'active' };
        expect(hasKeyButNotIn(obj, 'status', 'inactive', 'pending')).toBe(true);
    });

    it('should return false when key value is in list', () => {
        const obj = { status: 'active' };
        expect(hasKeyButNotIn(obj, 'status', 'active', 'pending')).toBe(false);
    });

    it('should return false when key does not exist', () => {
        const obj = { name: 'John' };
        expect(hasKeyButNotIn(obj, 'status', 'active')).toBe(false);
    });

    it('should handle multiple values in exclusion list', () => {
        const obj = { type: 'premium' };
        expect(hasKeyButNotIn(obj, 'type', 'basic', 'free', 'trial')).toBe(true);
    });

    it('should handle empty exclusion list', () => {
        const obj = { status: 'active' };
        expect(hasKeyButNotIn(obj, 'status')).toBe(true);
    });
});
