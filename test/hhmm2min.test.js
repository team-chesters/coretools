import hhmm2min from '../src/time/hhmm2min.js';

describe('hhmm2min function', () => {
    it('should convert HH:MM to minutes', () => {
        expect(hhmm2min('01:00')).toBe(60);
        expect(hhmm2min('02:30')).toBe(150);
        expect(hhmm2min('00:45')).toBe(45);
    });

    it('should handle 24-hour format', () => {
        expect(hhmm2min('23:59')).toBe(1439);
        expect(hhmm2min('12:00')).toBe(720);
    });

    it('should handle zero time', () => {
        expect(hhmm2min('00:00')).toBe(0);
    });

    it('should handle midnight', () => {
        expect(hhmm2min('24:00')).toBe(1440);
    });

    it('should handle single digit hours and minutes', () => {
        expect(hhmm2min('9:5')).toBe(545);
        expect(hhmm2min('1:1')).toBe(61);
    });
});
