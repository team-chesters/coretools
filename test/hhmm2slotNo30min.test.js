import hhmm2slotNo30min from '../src/time/hhmm2slotNo30min.js';

describe('hhmm2slotNo30min function', () => {
    it('should convert HH:MM to 30-minute slot number', () => {
        expect(hhmm2slotNo30min('00:00')).toBe(0);
        expect(hhmm2slotNo30min('00:30')).toBe(1);
        expect(hhmm2slotNo30min('01:00')).toBe(2);
        expect(hhmm2slotNo30min('01:30')).toBe(3);
    });

    it('should handle hour boundaries', () => {
        expect(hhmm2slotNo30min('02:00')).toBe(4);
        expect(hhmm2slotNo30min('12:00')).toBe(24);
    });

    it('should handle partial slots', () => {
        expect(hhmm2slotNo30min('00:15')).toBe(0);
        expect(hhmm2slotNo30min('00:45')).toBe(1);
    });

    it('should handle end of day', () => {
        expect(hhmm2slotNo30min('23:59')).toBe(47);
    });
});
