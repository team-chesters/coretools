import LenByte from '../src/string/LenByte.js';

describe('LenByte function', () => {
    it('should return byte length for ASCII strings', () => {
        expect(LenByte('Hello')).toBe(5);
        expect(LenByte('World!')).toBe(6);
    });

    it('should return byte length for Unicode strings', () => {
        expect(LenByte('한글')).toBe(6); // 3 bytes per Korean character
        expect(LenByte('한글테스트')).toBe(15);
    });

    it('should handle mixed ASCII and Unicode', () => {
        expect(LenByte('Hello한글')).toBe(11); // 5 + 6
    });

    it('should handle empty string', () => {
        expect(LenByte('')).toBe(0);
    });

    it('should handle special characters', () => {
        expect(LenByte('@#$%^&*()')).toBe(10);
    });

    it('should handle emojis', () => {
        expect(LenByte('😀')).toBe(4); // Emoji is 4 bytes in UTF-8
    });
});
