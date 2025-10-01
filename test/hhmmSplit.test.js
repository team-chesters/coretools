import hhmmSplit from '../src/time/hhmmSplit.js';

describe('hhmmSplit function', () => {
    it('should split HH:MM into hours and minutes', () => {
        const result = hhmmSplit('02:30');
        expect(result).toHaveProperty('hours');
        expect(result).toHaveProperty('minutes');
        expect(result.hours).toBe(2);
        expect(result.minutes).toBe(30);
    });

    it('should handle zero values', () => {
        const result = hhmmSplit('00:00');
        expect(result.hours).toBe(0);
        expect(result.minutes).toBe(0);
    });

    it('should handle single digit values', () => {
        const result = hhmmSplit('9:5');
        expect(result.hours).toBe(9);
        expect(result.minutes).toBe(5);
    });

    it('should handle 24-hour format', () => {
        const result = hhmmSplit('23:59');
        expect(result.hours).toBe(23);
        expect(result.minutes).toBe(59);
    });

    it('should return object with numeric values', () => {
        const result = hhmmSplit('12:45');
        expect(typeof result.hours).toBe('number');
        expect(typeof result.minutes).toBe('number');
    });
});
