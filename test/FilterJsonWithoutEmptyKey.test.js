import FilterJsonWithoutEmptyKey from '../src/object/FilterJsonWithoutEmptyKey.js';

describe('FilterJsonWithoutEmptyKey function', () => {
    it('should filter object keeping only non-empty values', () => {
        const obj = { a: 'value', b: null, c: 'test', d: undefined };
        const keys = ['a', 'b', 'c', 'd'];
        const result = FilterJsonWithoutEmptyKey(obj, keys);
        
        expect(result).toEqual({ a: 'value', c: 'test' });
    });

    it('should handle empty object', () => {
        const obj = {};
        const keys = ['a', 'b'];
        const result = FilterJsonWithoutEmptyKey(obj, keys);
        
        expect(result).toEqual({});
    });

    it('should handle empty keys array', () => {
        const obj = { a: 'value' };
        const keys = [];
        const result = FilterJsonWithoutEmptyKey(obj, keys);
        
        expect(result).toEqual({});
    });
});
