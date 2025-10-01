import padZero from '../src/string/padZero.js';

describe('padZero function', () => {
    it('should pad number with zeros', () => {
        expect(padZero(123, 5)).toBe('00123');
        expect(padZero(1, 3)).toBe('001');
    });

    it('should handle string numbers', () => {
        expect(padZero('123', 5)).toBe('00123');
        expect(padZero('1', 3)).toBe('001');
    });

    it('should not pad if number is already longer', () => {
        expect(padZero(12345, 3)).toBe('12345');
    });

    it('should handle zero', () => {
        expect(padZero(0, 3)).toBe('000');
    });

    it('should handle negative numbers', () => {
        expect(padZero(-123, 5)).toBe('-00123');
    });

    it('should handle decimal numbers', () => {
        expect(padZero(12.34, 5)).toBe('012.34');
    });
});
