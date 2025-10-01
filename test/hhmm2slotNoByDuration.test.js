import hhmm2slotNoByDuration from '../src/time/hhmm2slotNoByDuration.js';

describe('hhmm2slotNoByDuration function', () => {
    it('should convert HH:MM to slot number by duration', () => {
        expect(hhmm2slotNoByDuration('00:00', 60)).toBe(0);
        expect(hhmm2slotNoByDuration('01:00', 60)).toBe(1);
        expect(hhmm2slotNoByDuration('02:30', 60)).toBe(2);
    });

    it('should handle different durations', () => {
        expect(hhmm2slotNoByDuration('00:00', 30)).toBe(0);
        expect(hhmm2slotNoByDuration('00:30', 30)).toBe(1);
        expect(hhmm2slotNoByDuration('01:00', 30)).toBe(2);
    });

    it('should handle 15-minute duration', () => {
        expect(hhmm2slotNoByDuration('00:00', 15)).toBe(0);
        expect(hhmm2slotNoByDuration('00:15', 15)).toBe(1);
        expect(hhmm2slotNoByDuration('01:00', 15)).toBe(4);
    });

    it('should handle partial slots', () => {
        expect(hhmm2slotNoByDuration('00:30', 60)).toBe(0);
        expect(hhmm2slotNoByDuration('01:30', 60)).toBe(1);
    });
});
