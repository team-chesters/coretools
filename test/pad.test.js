import pad from '../src/string/pad.js';

describe('pad function', () => {
    it('should pad string to specified length', () => {
        expect(pad('123', 5, '0')).toBe('00123');
        expect(pad('hello', 10, ' ')).toBe('     hello');
    });

    it('should handle default padding character', () => {
        expect(pad('123', 5)).toBe('  123');
    });

    it('should not pad if string is already longer', () => {
        expect(pad('hello', 3, '0')).toBe('hello');
    });

    it('should handle empty string', () => {
        expect(pad('', 5, '0')).toBe('00000');
    });

    it('should handle zero length', () => {
        expect(pad('hello', 0, '0')).toBe('hello');
    });

    it('should handle single character padding', () => {
        expect(pad('1', 3, 'x')).toBe('xx1');
    });
});
