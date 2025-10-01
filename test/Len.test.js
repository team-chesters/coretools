import Len from '../src/string/Len.js';

describe('Len function', () => {
    it('should return correct length for strings', () => {
        expect(Len('Hello')).toBe(5);
        expect(Len('')).toBe(0);
        expect(Len('한글')).toBe(2);
    });

    it('should return correct length for arrays', () => {
        expect(Len([1, 2, 3])).toBe(3);
        expect(Len([])).toBe(0);
    });

    it('should handle special characters', () => {
        expect(Len('Hello World!')).toBe(12);
        expect(Len('@#$%^&*()')).toBe(10);
    });

    it('should handle empty inputs', () => {
        expect(Len('')).toBe(0);
        expect(Len([])).toBe(0);
    });
});
