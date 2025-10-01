import isCharInRange from '../src/string/isCharInRange.js';

describe('isCharInRange function', () => {
    it('should return true for characters in ASCII range', () => {
        expect(isCharInRange('A', 'ascii')).toBe(true);
        expect(isCharInRange('z', 'ascii')).toBe(true);
        expect(isCharInRange('5', 'ascii')).toBe(true);
    });

    it('should return true for characters in Unicode range', () => {
        expect(isCharInRange('한', 'unicode')).toBe(true);
        expect(isCharInRange('가', 'unicode')).toBe(true);
        expect(isCharInRange('😀', 'unicode')).toBe(true);
    });

    it('should return false for non-ASCII characters in ASCII mode', () => {
        expect(isCharInRange('한', 'ascii')).toBe(false);
        expect(isCharInRange('가', 'ascii')).toBe(false);
    });

    it('should handle special characters', () => {
        expect(isCharInRange('!', 'ascii')).toBe(true);
        expect(isCharInRange('@', 'ascii')).toBe(true);
        expect(isCharInRange('#', 'ascii')).toBe(true);
    });

    it('should handle empty string', () => {
        expect(isCharInRange('', 'ascii')).toBe(false);
    });
});
