import GetUnique from '../src/array/GetUnique.js';

describe('GetUnique function', () => {
    it('should remove duplicate values from array', () => {
        const input = [1, 2, 2, 3, 4, 4, 5];
        const result = GetUnique(input);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return empty array for empty input', () => {
        const input = [];
        const result = GetUnique(input);
        expect(result).toEqual([]);
    });

    it('should return same array if no duplicates', () => {
        const input = [1, 2, 3, 4, 5];
        const result = GetUnique(input);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle string arrays', () => {
        const input = ['a', 'b', 'b', 'c', 'd', 'd'];
        const result = GetUnique(input);
        expect(result).toEqual(['a', 'b', 'c', 'd']);
    });

    it('should handle mixed type arrays', () => {
        const input = [1, '1', 2, '2', 3];
        const result = GetUnique(input);
        expect(result).toEqual([1, '1', 2, '2', 3]);
    });
});
