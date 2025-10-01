import MergeJson from '../src/object/MergeJson.js';

describe('MergeJson function', () => {
    it('should merge multiple objects', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const obj3 = { d: 5 };
        
        const result = MergeJson(obj1, obj2, obj3);
        expect(result).toEqual({ a: 1, b: 3, c: 4, d: 5 });
    });

    it('should handle empty objects', () => {
        const result = MergeJson({}, { a: 1 }, {});
        expect(result).toEqual({ a: 1 });
    });

    it('should handle single object', () => {
        const obj = { a: 1, b: 2 };
        const result = MergeJson(obj);
        expect(result).toEqual({ a: 1, b: 2 });
    });

    it('should handle no arguments', () => {
        const result = MergeJson();
        expect(result).toEqual({});
    });

    it('should handle nested objects', () => {
        const obj1 = { user: { name: 'John' } };
        const obj2 = { user: { age: 30 } };
        
        const result = MergeJson(obj1, obj2);
        expect(result).toEqual({ user: { age: 30 } }); // Last value wins
    });
});
