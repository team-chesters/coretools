import isAlphaNumeric from '../src/string/isAlphaNumeric.js';

describe('isAlphaNumeric function', () => {
    it('should return true for alphanumeric strings', () => {
        expect(isAlphaNumeric('abc123')).toBe(true);
        expect(isAlphaNumeric('Hello123')).toBe(true);
        expect(isAlphaNumeric('123')).toBe(true);
        expect(isAlphaNumeric('ABC')).toBe(true);
    });

    it('should return false for strings with special characters', () => {
        expect(isAlphaNumeric('hello world')).toBe(false);
        expect(isAlphaNumeric('hello@world')).toBe(false);
        expect(isAlphaNumeric('hello-world')).toBe(false);
        expect(isAlphaNumeric('hello.world')).toBe(false);
    });

    it('should return true for empty string', () => {
        expect(isAlphaNumeric('')).toBe(true);
    });

    it('should handle mixed case', () => {
        expect(isAlphaNumeric('Hello123World')).toBe(true);
        expect(isAlphaNumeric('Test123')).toBe(true);
    });

    it('should handle only numbers', () => {
        expect(isAlphaNumeric('123456')).toBe(true);
    });

    it('should handle only letters', () => {
        expect(isAlphaNumeric('abcdef')).toBe(true);
        expect(isAlphaNumeric('ABCDEF')).toBe(true);
    });
});
