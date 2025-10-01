import isFunction from '../src/type/isFunction.js';

describe('isFunction function', () => {
    it('should return true for functions', () => {
        expect(isFunction(function() {})).toBe(true);
        expect(isFunction(() => {})).toBe(true);
        expect(isFunction(Math.max)).toBe(true);
    });

    it('should return false for non-functions', () => {
        expect(isFunction('string')).toBe(false);
        expect(isFunction(123)).toBe(false);
        expect(isFunction({})).toBe(false);
        expect(isFunction([])).toBe(false);
        expect(isFunction(null)).toBe(false);
        expect(isFunction(undefined)).toBe(false);
        expect(isFunction(true)).toBe(false);
    });

    it('should handle arrow functions', () => {
        const arrowFunc = () => 'test';
        expect(isFunction(arrowFunc)).toBe(true);
    });

    it('should handle async functions', () => {
        const asyncFunc = async () => {};
        expect(isFunction(asyncFunc)).toBe(true);
    });
});
