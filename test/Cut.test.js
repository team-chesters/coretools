import Cut from '../src/string/Cut.js';

describe('Cut function', () => {
    it('should cut string by byte length', () => {
        expect(Cut('Hello World', 5)).toBe('Hello');
        expect(Cut('한글테스트', 6)).toBe('한글');
    });

    it('should return original string if within limit', () => {
        expect(Cut('Hello', 10)).toBe('Hello');
    });

    it('should handle empty string', () => {
        expect(Cut('', 5)).toBe('');
    });

    it('should handle non-string input', () => {
        expect(Cut(123, 5)).toBeUndefined();
    });
});
