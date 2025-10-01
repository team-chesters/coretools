import CutW from '../src/string/CutW.js';

describe('CutW function', () => {
    it('should cut string by character length', () => {
        expect(CutW('Hello World', 5)).toBe('Hello');
        expect(CutW('한글테스트', 2)).toBe('한글');
    });

    it('should return original string if within limit', () => {
        expect(CutW('Hello', 10)).toBe('Hello');
    });

    it('should handle empty string', () => {
        expect(CutW('', 5)).toBe('');
    });
});
