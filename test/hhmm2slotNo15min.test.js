import hhmm2slotNo15min from '../src/time/hhmm2slotNo15min.js';

describe('hhmm2slotNo15min function', () => {
    it('should convert HH:MM to 15-minute slot number', () => {
        expect(hhmm2slotNo15min('00:00')).toBe(0);
        expect(hhmm2slotNo15min('00:15')).toBe(1);
        expect(hhmm2slotNo15min('00:30')).toBe(2);
        expect(hhmm2slotNo15min('00:45')).toBe(3);
    });

    it('should handle hour boundaries', () => {
        expect(hhmm2slotNo15min('01:00')).toBe(4);
        expect(hhmm2slotNo15min('02:00')).toBe(8);
    });

    it('should handle partial slots', () => {
        expect(hhmm2slotNo15min('00:10')).toBe(0);
        expect(hhmm2slotNo15min('00:25')).toBe(1);
    });

    it('should handle end of day', () => {
        expect(hhmm2slotNo15min('23:59')).toBe(95);
    });
});
