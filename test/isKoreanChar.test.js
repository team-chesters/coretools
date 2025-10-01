import isKoreanChar from '../src/string/isKoreanChar.js';

describe('isKoreanChar function', () => {
    it('should return true for Korean characters', () => {
        expect(isKoreanChar('한')).toBe(true);
        expect(isKoreanChar('글')).toBe(true);
        expect(isKoreanChar('테')).toBe(true);
        expect(isKoreanChar('스')).toBe(true);
        expect(isKoreanChar('트')).toBe(true);
    });

    it('should return false for non-Korean characters', () => {
        expect(isKoreanChar('A')).toBe(false);
        expect(isKoreanChar('1')).toBe(false);
        expect(isKoreanChar('!')).toBe(false);
        expect(isKoreanChar('中')).toBe(false);
        expect(isKoreanChar('日')).toBe(false);
    });

    it('should return false for empty string', () => {
        expect(isKoreanChar('')).toBe(false);
    });

    it('should handle mixed Korean and non-Korean', () => {
        expect(isKoreanChar('한글ABC')).toBe(false);
    });

    it('should handle Korean vowels and consonants', () => {
        expect(isKoreanChar('ㅏ')).toBe(true);
        expect(isKoreanChar('ㄱ')).toBe(true);
    });
});
