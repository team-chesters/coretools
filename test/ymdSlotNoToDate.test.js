import ymdSlotNoToDate from '../src/date/ymdSlotNoToDate.js';

describe('ymdSlotNoToDate function', () => {
    it('should convert YYYYMMDD and slot number to Date', () => {
        const result = ymdSlotNoToDate('20210315', 4); // 4th slot (15-min intervals)
        
        expect(result).toBeInstanceOf(Date);
        expect(result.getFullYear()).toBe(2021);
        expect(result.getMonth()).toBe(2); // March (0-indexed)
        expect(result.getDate()).toBe(15);
    });

    it('should handle slot 0', () => {
        const result = ymdSlotNoToDate('20210315', 0);
        
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
    });

    it('should handle different slot numbers', () => {
        const result1 = ymdSlotNoToDate('20210315', 4); // 1:00 AM
        const result2 = ymdSlotNoToDate('20210315', 8); // 2:00 AM
        
        expect(result1.getHours()).toBe(1);
        expect(result2.getHours()).toBe(2);
    });

    it('should handle end of day slots', () => {
        const result = ymdSlotNoToDate('20210315', 95); // 23:45
        
        expect(result.getHours()).toBe(23);
        expect(result.getMinutes()).toBe(45);
    });

    it('should handle invalid date format', () => {
        const result = ymdSlotNoToDate('invalid', 0);
        expect(result).toBe(false);
    });
});
