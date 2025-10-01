import hasKeyNumberPositive from '../src/object/hasKeyNumberPositive.js';

describe('hasKeyNumberPositive function', () => {
    it('should return true when key has positive number', () => {
        const obj = { count: 5, price: 10.99 };
        expect(hasKeyNumberPositive(obj, 'count')).toBe(true);
        expect(hasKeyNumberPositive(obj, 'price')).toBe(true);
    });

    it('should return false when key has negative number', () => {
        const obj = { count: -5, balance: -100 };
        expect(hasKeyNumberPositive(obj, 'count')).toBe(false);
        expect(hasKeyNumberPositive(obj, 'balance')).toBe(false);
    });

    it('should return false when key has zero', () => {
        const obj = { count: 0 };
        expect(hasKeyNumberPositive(obj, 'count')).toBe(false);
    });

    it('should return false when key does not exist', () => {
        const obj = { name: 'John' };
        expect(hasKeyNumberPositive(obj, 'count')).toBe(false);
    });

    it('should return false for non-number values', () => {
        const obj = { count: '5', price: null };
        expect(hasKeyNumberPositive(obj, 'count')).toBe(false);
        expect(hasKeyNumberPositive(obj, 'price')).toBe(false);
    });
});
