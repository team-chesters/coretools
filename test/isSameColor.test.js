import isSameColor from '../src/color/isSameColor.js';

describe('isSameColor function', () => {
    it('should return true for same colors (case insensitive)', () => {
        expect(isSameColor('#FF0000', '#ff0000')).toBe(true);
        expect(isSameColor('red', 'RED')).toBe(true);
        expect(isSameColor('blue', 'Blue')).toBe(true);
    });

    it('should return false for different colors', () => {
        expect(isSameColor('#FF0000', '#00FF00')).toBe(false);
        expect(isSameColor('red', 'blue')).toBe(false);
        expect(isSameColor('green', 'yellow')).toBe(false);
    });

    it('should return false for empty or null values', () => {
        expect(isSameColor('', 'red')).toBe(false);
        expect(isSameColor('red', '')).toBe(false);
        expect(isSameColor('', '')).toBe(false);
    });

    it('should handle hex color codes', () => {
        expect(isSameColor('#FFFFFF', '#ffffff')).toBe(true);
        expect(isSameColor('#000000', '#000000')).toBe(true);
    });
});
