import slotNo2hhmm from '../src/time/slotNo2hhmm.js';

describe('slotNo2hhmm function', () => {
    it('should convert slot number to HH:MM format', () => {
        expect(slotNo2hhmm(0)).toBe('00:00');
        expect(slotNo2hhmm(1)).toBe('00:15');
        expect(slotNo2hhmm(4)).toBe('01:00');
    });

    it('should handle 15-minute slots', () => {
        expect(slotNo2hhmm(0, 15)).toBe('00:00');
        expect(slotNo2hhmm(1, 15)).toBe('00:15');
        expect(slotNo2hhmm(4, 15)).toBe('01:00');
    });

    it('should handle 30-minute slots', () => {
        expect(slotNo2hhmm(0, 30)).toBe('00:00');
        expect(slotNo2hhmm(1, 30)).toBe('00:30');
        expect(slotNo2hhmm(2, 30)).toBe('01:00');
    });

    it('should handle 60-minute slots', () => {
        expect(slotNo2hhmm(0, 60)).toBe('00:00');
        expect(slotNo2hhmm(1, 60)).toBe('01:00');
        expect(slotNo2hhmm(12, 60)).toBe('12:00');
    });

    it('should handle end of day slots', () => {
        expect(slotNo2hhmm(95, 15)).toBe('23:45'); // 15-min slots
        expect(slotNo2hhmm(47, 30)).toBe('23:30'); // 30-min slots
    });
});
